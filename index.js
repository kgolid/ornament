import * as tome from 'chromotome';
import Tweakpane from 'tweakpane';

import { create_explorer } from './explorer';

const canvas_width = 1000;
const canvas_height = 1000;

let horizontal_lines;
let vertical_lines;

let PARAMS;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    p.noLoop();
    p.noStroke();
    p.pixelDensity(2);

    PARAMS = {
      grid_dim: { x: 12, y: 12 },
      grid_copies: { x: 2, y: 2 },
      ornament_size: { x: 450, y: 450 },
      resolution: 5,
      oscilation: 0.6,
      palette: 'revolucion',
      split_chance: 0.1,
      blank_chance: 0,
      path_priority: 0.8,
      symmetries: 'none',
    };

    const pane = new Tweakpane();
    pane.addInput(PARAMS, 'grid_dim', {
      x: { min: 4, max: 40, step: 2 },
      y: { min: 4, max: 40, step: 2 },
    });
    pane.addInput(PARAMS, 'grid_copies', {
      x: { min: 1, max: 4, step: 1 },
      y: { min: 1, max: 4, step: 1 },
    });
    pane.addInput(PARAMS, 'ornament_size', {
      x: { min: 100, max: 1000, step: 50 },
      y: { min: 100, max: 1000, step: 50 },
    });
    pane.addInput(PARAMS, 'resolution', { min: 1, max: 10, step: 1 });
    pane.addInput(PARAMS, 'oscilation', { min: 0.1, max: 2, step: 0.05 });
    pane.addInput(PARAMS, 'palette', { options: Object.assign({}, ...tome.getNames().map((n) => ({ [n]: n }))) });
    pane.addInput(PARAMS, 'split_chance', { min: 0, max: 0.5, step: 0.05 });
    pane.addInput(PARAMS, 'blank_chance', { min: 0, max: 0.9, step: 0.1 });
    pane.addInput(PARAMS, 'path_priority', { min: 0.1, max: 1, step: 0.1 });
    pane.addInput(PARAMS, 'symmetries', { options: { none: 'none', oneway: 'oneway', twoway: 'twoway' } });

    const btn = pane.addButton({ title: 'Redraw' });
    btn.on('click', () => reset(PARAMS));
    pane.on('change', (_) => reset(PARAMS));

    reset(PARAMS);
  };

  function reset(params) {
    const palette = tome.get(params.palette);

    const big_cell = params.resolution;
    const small_cell = Math.ceil(params.resolution * params.oscilation);

    const local_grid_w = params.grid_dim.x;
    const local_grid_h = params.grid_dim.y;
    const grid_w = local_grid_w * params.grid_copies.x;
    const grid_h = local_grid_h * params.grid_copies.y;
    const ornament_w = params.ornament_size.x * params.grid_copies.x;
    const ornament_h = params.ornament_size.y * params.grid_copies.y;

    const explore_opts = {
      init_x: Math.floor(Math.random() * local_grid_w),
      init_y: Math.floor(Math.random() * local_grid_h),
      split_chance: params.split_chance,
      blank_chance: params.blank_chance,
      cand_size: params.path_priority,
      symmetries: symmetry(params.symmetries),
    };

    p.noiseSeed(Math.random() * 9999);

    const explore_fn = create_explorer(
      local_grid_w,
      local_grid_h,
      params.grid_copies.x,
      params.grid_copies.y,
      palette.colors.length,
      explore_opts
    );

    create_grid(grid_w, grid_h, big_cell, small_cell);
    draw_ornament(explore_fn, ornament_w, ornament_h, big_cell, small_cell, palette);
  }

  function draw_ornament(explore, size_x, size_y, big_cell, small_cell, palette) {
    const pad_x = (canvas_width - size_x) / 2;
    const pad_y = (canvas_height - size_y) / 2;

    p.push();
    p.translate(pad_x, pad_y);
    p.background(palette.background);

    let next = explore();
    while (next) {
      next.forEach((n) => {
        var block_w = Math.abs(n.x - n.parent.x);
        var block_h = Math.abs(n.y - n.parent.y);
        var block_x = Math.min(n.x, n.parent.x);
        var block_y = Math.min(n.y, n.parent.y);

        var long_dist = block_w + block_h > 1;
        var pnts = long_dist
          ? extract_square(n.x, n.y, 0, 0, big_cell, small_cell)
          : extract_square(block_x, block_y, block_w, block_h, big_cell, small_cell);

        draw_poly(pnts, size_x, size_y, n.color == -1 ? null : palette.colors[n.color]);
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

  function create_grid(w, h, big_cell, small_cell) {
    const cell_dim = big_cell + small_cell;
    const grid_height = h * cell_dim - small_cell + 1;
    const grid_width = w * cell_dim - small_cell + 1;

    const pnts = [...Array(grid_height)].map((_, y) =>
      [...Array(grid_width)].map((_, x) => get_point(x / cell_dim, y / cell_dim, w, h))
    );

    horizontal_lines = pnts.filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
    vertical_lines = transpose(pnts).filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
  }

  function get_point(x, y, w, h) {
    const nx = (x + (p.noise(x / 2, y / 8, 4.123) - 0.5) * 1.1) / w;
    const ny = (y + (p.noise(x / 8, y / 2, 0.582) - 0.5) * 1.1) / h;

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
