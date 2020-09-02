import * as tome from 'chromotome';
import seedrandom from 'seed-random';

import create_ui from './ui';
import { get_symmetry } from './symmetries';
import { create_explorer } from './explorer';

const canvas_width = 1000;
const canvas_height = 1000;

let horizontal_lines;
let vertical_lines;

let seed;
let rng;

let PARAMS;

let ornament;

let ornament_width;
let ornament_height;

let pad_x;
let pad_y;

let tick = 0;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    p.pixelDensity(2);
    p.noStroke();

    seed = Math.random();
    PARAMS = {
      grid_dim: { x: 12, y: 12 },
      grid_copies: { x: 2, y: 2 },
      ornament_scale: 24,
      resolution: 6,
      spacing: 0.8,
      noise_intensity: 1,
      palette: 'revolucion',
      split_chance: 0.1,
      blank_chance: 0,
      path_priority: 0.8,
      symmetries: 'rotate_90',
      horizontal_reflection: true,
      vertical_reflection: true,
      animate_drawing: true,
    };

    create_ui(PARAMS, reset, reset_with_new_seed);

    reset_with_new_seed(PARAMS);
  };

  p.draw = function () {
    p.push();
    p.translate(pad_x, pad_y);

    if (!PARAMS.animate_drawing) {
      ornament.forEach((polyset) =>
        polyset.forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color))
      );
      p.noLoop();
    } else if (tick < ornament.length) {
      let polyset = ornament[tick];
      polyset.forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color));
      tick++;
    } else {
      p.noLoop();
    }

    p.pop();
  };

  function reset_with_new_seed(params) {
    seed = Math.random();
    reset(params);
  }

  function reset(params) {
    rng = seedrandom(seed);

    const palette = tome.get(params.palette);
    p.background(palette.background || '#ddd');

    const cell_dim = params.resolution;
    const spacing_dim = Math.ceil(params.resolution * params.spacing);

    const local_grid_w = params.grid_dim.x;
    const local_grid_h = params.grid_dim.y;
    const grid_w = local_grid_w * params.grid_copies.x;
    const grid_h = local_grid_h * params.grid_copies.y;

    ornament_width = params.ornament_scale * grid_w;
    ornament_height = params.ornament_scale * grid_h;

    pad_x = (canvas_width - ornament_width) / 2;
    pad_y = (canvas_height - ornament_height) / 2;

    p.noiseSeed(rng() * 9999);

    let explore_fn = create_explorer(
      local_grid_w,
      local_grid_h,
      params.grid_copies.x,
      params.grid_copies.y,
      palette.colors.length,
      {
        init_x: Math.floor(rng() * local_grid_w),
        init_y: Math.floor(rng() * local_grid_h),
        split_chance: params.split_chance,
        blank_chance: params.blank_chance,
        cand_size: params.path_priority,
        symmetries: get_symmetry(params.symmetries),
        href: params.horizontal_reflection,
        vref: params.vertical_reflection,
        rng: rng,
      }
    );

    create_grid(grid_w, grid_h, cell_dim, spacing_dim, params.noise_intensity);
    ornament = create_ornament(explore_fn, grid_w, grid_h, cell_dim, spacing_dim, palette);

    tick = 0;
    p.loop();
  }

  function create_ornament(explore, grid_w, grid_h, cell_dim, spacing_dim, palette) {
    let polys = [];
    let next = explore();
    while (next) {
      let polyset = [];
      next.forEach((n) => {
        const pnts = create_poly(n, grid_w, grid_h, cell_dim, spacing_dim);
        const col = n.color === -1 ? null : palette.colors[n.color];
        polyset.push({ pnts: pnts, color: col });
      });

      polys.push(polyset);
      next = explore();
    }

    return polys;
  }

  function create_poly(n, grid_w, grid_h, cell_dim, spacing_dim) {
    var block_w = n.parent_pos === 'W' || n.parent_pos === 'E' ? 1 : 0;
    var block_h = n.parent_pos === 'N' || n.parent_pos === 'S' ? 1 : 0;
    var block_x = n.parent_pos === 'W' ? n.x - 1 : n.x;
    var block_y = n.parent_pos === 'N' ? n.y - 1 : n.y;

    var long_dist = block_x + block_w > grid_w - 1 || block_y + block_h > grid_h - 1 || block_x < 0 || block_y < 0;

    return long_dist
      ? extract_square(n.x, n.y, 0, 0, cell_dim, spacing_dim)
      : extract_square(block_x, block_y, block_w, block_h, cell_dim, spacing_dim);
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
    p.endShape(p.CLOSE);
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

  const transpose = (m) => m[0].map((_, i) => m.map((x) => x[i]));

  p.keyPressed = function () {
    if (p.keyCode === 80) p.saveCanvas('ornament', 'jpeg');
  };
};
new p5(sketch);
