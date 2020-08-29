import * as tome from 'chromotome';
import Tweakpane from 'tweakpane';
import seedrandom from 'seed-random';

import { create_explorer } from './explorer';

const canvas_width = 1000;
const canvas_height = 1000;

let horizontal_lines;
let vertical_lines;

let seed;
let rng;

let PARAMS;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    p.noLoop();
    p.noStroke();
    p.pixelDensity(2);

    seed = Math.random();
    PARAMS = {
      grid_dim: { x: 12, y: 12 },
      grid_copies: { x: 2, y: 2 },
      ornament_scale: 24,
      resolution: 6,
      spacing: 0.7,
      noise_intensity: 1,
      palette: 'revolucion',
      split_chance: 0.1,
      blank_chance: 0,
      path_priority: 0.85,
      symmetries: 'twoway',
      horizontal_reflection: true,
      vertical_reflection: false,
    };

    const pane = new Tweakpane();
    pane.addInput(PARAMS, 'grid_dim', {
      x: { min: 2, max: 30, step: 2 },
      y: { min: 2, max: 30, step: 2 },
    });
    pane.addInput(PARAMS, 'grid_copies', {
      x: { min: 1, max: 8, step: 1 },
      y: { min: 1, max: 8, step: 1 },
    });
    pane.addInput(PARAMS, 'ornament_scale', { min: 2, max: 50, step: 2 });
    pane.addInput(PARAMS, 'resolution', { min: 1, max: 10, step: 1 });
    pane.addInput(PARAMS, 'spacing', { min: 0.1, max: 2, step: 0.05 });
    pane.addInput(PARAMS, 'noise_intensity', { min: 0, max: 2, step: 0.1 });
    pane.addInput(PARAMS, 'palette', { options: Object.assign({}, ...tome.getNames().map((n) => ({ [n]: n }))) });
    pane.addInput(PARAMS, 'split_chance', { min: 0, max: 0.5, step: 0.05 });
    pane.addInput(PARAMS, 'blank_chance', { min: 0, max: 0.9, step: 0.1 });
    pane.addInput(PARAMS, 'path_priority', { min: 0.1, max: 1, step: 0.1 });
    pane.addInput(PARAMS, 'symmetries', { options: { none: 'none', oneway: 'oneway', twoway: 'twoway' } });
    pane.addInput(PARAMS, 'horizontal_reflection');
    pane.addInput(PARAMS, 'vertical_reflection');

    const btn = pane.addButton({ title: 'Redraw' });
    btn.on('click', () => reset_with_new_seed(PARAMS));
    pane.on('change', (_) => reset(PARAMS));

    reset_with_new_seed(PARAMS);
  };

  function reset_with_new_seed(params) {
    seed = Math.random();
    reset(params);
  }

  function reset(params) {
    rng = seedrandom(seed);
    const palette = tome.get(params.palette);

    const cell_dim = params.resolution;
    const spacing_dim = Math.ceil(params.resolution * params.spacing);

    const local_grid_w = params.grid_dim.x;
    const local_grid_h = params.grid_dim.y;
    const grid_w = local_grid_w * params.grid_copies.x;
    const grid_h = local_grid_h * params.grid_copies.y;
    const ornament_w = params.ornament_scale * grid_w;
    const ornament_h = params.ornament_scale * grid_h;

    const explore_opts = {
      init_x: Math.floor(rng() * local_grid_w),
      init_y: Math.floor(rng() * local_grid_h),
      split_chance: params.split_chance,
      blank_chance: params.blank_chance,
      cand_size: params.path_priority,
      symmetries: symmetry(params.symmetries),
      href: params.horizontal_reflection,
      vref: params.vertical_reflection,
      rng: rng,
    };

    p.noiseSeed(rng() * 9999);

    const explore_fn = create_explorer(
      local_grid_w,
      local_grid_h,
      params.grid_copies.x,
      params.grid_copies.y,
      palette.colors.length,
      explore_opts
    );

    create_grid(grid_w, grid_h, cell_dim, spacing_dim, params.noise_intensity);
    draw_ornament(explore_fn, grid_w, grid_h, ornament_w, ornament_h, cell_dim, spacing_dim, palette);
  }

  function draw_ornament(explore, grid_w, grid_h, size_x, size_y, cell_dim, spacing_dim, palette) {
    const pad_x = (canvas_width - size_x) / 2;
    const pad_y = (canvas_height - size_y) / 2;

    p.push();
    p.translate(pad_x, pad_y);
    p.background(palette.background);

    let next = explore();
    while (next) {
      next.forEach((n) => {
        var block_w = n.parent_pos === 'W' || n.parent_pos === 'E' ? 1 : 0; //Math.abs(n.x - n.parent.x);
        var block_h = n.parent_pos === 'N' || n.parent_pos === 'S' ? 1 : 0; //Math.abs(n.y - n.parent.y);
        var block_x = n.parent_pos === 'W' ? n.x - 1 : n.x; //Math.min(n.x, n.parent.x);
        var block_y = n.parent_pos === 'N' ? n.y - 1 : n.y; //Math.min(n.y, n.parent.y);

        var long_dist = block_x + block_w > grid_w - 1 || block_y + block_h > grid_h - 1 || block_x < 0 || block_y < 0;
        var pnts = long_dist
          ? extract_square(n.x, n.y, 0, 0, cell_dim, spacing_dim)
          : extract_square(block_x, block_y, block_w, block_h, cell_dim, spacing_dim);

        draw_poly(pnts, size_x, size_y, n.color === -1 ? null : palette.colors[n.color]);
      });

      next = explore();
    }
    p.pop();
  }

  function extract_square(x, y, w, h, size1, size2) {
    var step_size = size1 + size2;

    var north = horizontal_lines[y * 2].slice(x * step_size, (x + w) * step_size + size1 + 1);
    var east = vertical_lines[(x + w) * 2 + 1].slice(y * step_size, (y + h) * step_size + size1 + 1);
    var south = horizontal_lines[(y + h) * 2 + 1].slice(x * step_size, (x + w) * step_size + size1 + 1);
    var west = vertical_lines[x * 2].slice(y * step_size, (y + h) * step_size + size1 + 1);

    return [...north, ...east, ...south.reverse(), ...west.reverse()];
  }

  function draw_poly(pnts, sizeX, sizeY, col) {
    if (col) p.fill(col);
    else p.noFill();

    p.beginShape();
    pnts.forEach((pnt) => p.vertex(pnt[0] * sizeX, pnt[1] * sizeY));
    p.endShape(p.CLOSED);
  }

  function create_grid(w, h, big_cell, small_cell, noise_intensity) {
    const cell_dim = big_cell + small_cell;
    const grid_height = h * cell_dim - small_cell + 1;
    const grid_width = w * cell_dim - small_cell + 1;

    const pnts = [...Array(grid_height)].map((_, y) =>
      [...Array(grid_width)].map((_, x) => get_point(x / cell_dim, y / cell_dim, w, h, noise_intensity))
    );

    horizontal_lines = pnts.filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
    vertical_lines = transpose(pnts).filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
  }

  function get_point(x, y, w, h, intensity) {
    const nx = (x + (p.noise(x / 2, y / 8, 4.123) - 0.5) * intensity) / w;
    const ny = (y + (p.noise(x / 8, y / 2, 0.582) - 0.5) * intensity) / h;

    return [nx, ny];
  }

  function symmetry(s) {
    if (s === 'none') return [0];
    if (s === 'oneway') return [0, 2];
    if (s === 'twoway') return [0, 1, 2, 3];
  }

  const transpose = (m) => m[0].map((_, i) => m.map((x) => x[i]));

  p.keyPressed = function () {
    if (p.keyCode === 80) p.saveCanvas('ornament', 'jpeg');
  };
};
new p5(sketch);
