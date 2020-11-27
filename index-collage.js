import * as tome from 'chromotome';
import seedrandom from 'seed-random';
import chroma from 'chroma-js';

import create_ui from './ui';
import { get_collage_explorers } from './collage';

const canvas_width = 1200;
const canvas_height = 1200;

let horizontal_lines;
let vertical_lines;

let cell_dim;
let spacing_dim;

let seed;
let rng;

let PARAMS;

let ornaments;

let ornament_width;
let ornament_height;

let pad_x;
let pad_y;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    p.pixelDensity(2);
    p.noStroke();
    p.frameRate(1);

    seed = Math.random();
    PARAMS = {
      tile_dim: { x: 12, y: 12 },
      tile_copies: { x: 2, y: 2 },
      segment_copies: 1,
      ornament_scale: 20,
      resolution: 6,
      spacing: 0.8,
      noise_intensity: 1,
      palette: 'saami',
      interpolate_colors: false,
      segment_padding: 2,
      border_padding: 2,
      display_borders: true,
      display_base: true,
      split_chance: 0.1,
      blank_chance: 0,
      path_priority: 0.8,
      symmetries: 'rotate_90',
      horizontal_reflection: false,
      vertical_reflection: false,
      animate_drawing: false,
    };

    create_ui(PARAMS, reset, reset_with_new_seed);

    reset_with_new_seed(PARAMS);
  };

  p.draw = function () {
    reset_with_new_seed(PARAMS);
    p.push();
    p.translate(pad_x, pad_y);
    const base_col = tome.get(PARAMS.palette).stroke || '#000';

    if (PARAMS.display_base) draw_base(ornament_width, ornament_height, base_col);

    ornaments.forEach((polyset) =>
      polyset.forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color))
    );

    p.pop();
  };

  function reset_with_new_seed(params) {
    seed = Math.random();
    reset(params);
  }

  function reset(params) {
    rng = seedrandom(seed);

    const palette = tome.get(params.palette);
    const colors = params.interpolate_colors ? chroma.scale(palette.colors).mode('lch').colors(25) : palette.colors;

    p.background('#000');

    const grid_w = 48;
    const grid_h = 50;

    cell_dim = params.resolution;
    spacing_dim = Math.ceil(params.resolution * params.spacing);

    ornament_width = params.ornament_scale * grid_w;
    ornament_height = params.ornament_scale * grid_h;

    pad_x = (canvas_width - ornament_width) / 2;
    pad_y = (canvas_height - ornament_height) / 2;

    create_grid(grid_w + 2, grid_h + 2, cell_dim, spacing_dim, params.noise_intensity, rng);

    const explorers = get_collage_explorers(
      rng,
      colors.length,
      params.split_chance,
      params.blank_chance,
      params.path_priority
    );

    ornaments = create_ornaments(explorers, colors);
  }

  function create_ornaments(explorers, colors) {
    let ornaments = [];

    for (const exp of explorers) {
      const segment = create_ornament(exp.explorer, exp.dim_x, exp.dim_y, exp.pos, exp.scale, colors);
      ornaments = ornaments.concat(segment);
    }

    return ornaments;
  }

  function create_ornament(explore, grid_w, grid_h, offsets, scale, colors) {
    let polys = [];
    let next = explore();

    while (next) {
      let polyset = [];
      next.forEach((n) => {
        offsets.forEach((off) => {
          const pnts = create_poly(n, grid_w, grid_h, 1 + off[0], 1 + off[1], scale);
          const col = n.color === -1 ? null : colors[n.color];
          polyset.push({ pnts: pnts, color: col });
        });
      });

      polys.push(polyset);
      next = explore();
    }

    return polys;
  }

  function create_poly(n, grid_w, grid_h, x_off, y_off, scale) {
    var block_w = n.parent_pos === 'W' || n.parent_pos === 'E' ? 1 : 0;
    var block_h = n.parent_pos === 'N' || n.parent_pos === 'S' ? 1 : 0;
    var block_x = n.parent_pos === 'W' ? n.x - 1 : n.x;
    var block_y = n.parent_pos === 'N' ? n.y - 1 : n.y;

    var long_dist = block_x + block_w > grid_w - 1 || block_y + block_h > grid_h - 1 || block_x < 0 || block_y < 0;

    return long_dist
      ? extract_square(n.x, n.y, x_off, y_off, 0, 0, scale)
      : extract_square(block_x, block_y, x_off, y_off, block_w, block_h, scale);
  }

  function extract_square(x, y, x_off, y_off, w, h, scale) {
    //var w_scaled = w * (2 * scale - 1);
    //var h_scaled = h * (2 * scale - 1);

    var w_scaled = 2 * (w + 1) * scale - 1;
    var h_scaled = 2 * (h + 1) * scale - 1;

    var size1 = cell_dim;
    var size2 = spacing_dim;
    var step_size = size1 + size2;

    var size1_scaled = scale * (cell_dim + spacing_dim) - spacing_dim;
    var step_size_scaled = size1_scaled + size2;

    var from_x = x_off * step_size + x * step_size_scaled;
    var from_y = y_off * step_size + y * step_size_scaled;
    var to_x = x_off * step_size + (x + w) * step_size_scaled + size1_scaled + 1;
    var to_y = y_off * step_size + (y + h) * step_size_scaled + size1_scaled + 1;

    var north = horizontal_lines[y_off * 2 + y * 2 * scale].slice(from_x, to_x);
    var east = vertical_lines[x_off * 2 + x * 2 * scale + w_scaled].slice(from_y, to_y);
    var south = horizontal_lines[y_off * 2 + y * 2 * scale + h_scaled].slice(from_x, to_x);
    var west = vertical_lines[x_off * 2 + x * 2 * scale].slice(from_y, to_y);

    return [...north, ...east, ...south.reverse(), ...west.reverse()];
  }

  function draw_base(width, height, col) {
    let n = horizontal_lines[0];
    let e = vertical_lines[vertical_lines.length - 1];
    let s = horizontal_lines[horizontal_lines.length - 1].reverse();
    let w = vertical_lines[0].reverse();
    let points = [...n, ...e, ...s, ...w];

    draw_poly(points, width, height, col);
  }

  function draw_poly(pnts, sizeX, sizeY, col) {
    if (col) p.fill(col);
    else p.noFill();

    p.beginShape();
    pnts.forEach((pnt) => p.vertex(pnt[0] * sizeX, pnt[1] * sizeY));
    p.endShape();
  }

  function create_grid(w, h, big_cell, small_cell, noise_intensity, rng) {
    p.noiseSeed(rng() * 9999);

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
    if (p.keyCode === 80) p.saveCanvas('ornament', 'png');
  };
};
new p5(sketch);
