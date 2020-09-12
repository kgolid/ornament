import * as tome from 'chromotome';
import seedrandom from 'seed-random';
import chroma from 'chroma-js';

import create_ui from './ui';
import { get_symmetry } from './symmetries';
import { create_explorer } from './explorer';

const canvas_width = 1600;
const canvas_height = 1200;

let horizontal_lines;
let vertical_lines;

let cell_dim;
let spacing_dim;

let seed;
let rng;

let PARAMS;

let ornaments;
let dividers;

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
      tile_dim: { x: 12, y: 12 },
      tile_copies: { x: 2, y: 2 },
      segment_copies: 1,
      ornament_scale: 24,
      resolution: 6,
      spacing: 0.8,
      noise_intensity: 1,
      palette: 'revolucion',
      interpolate_colors: true,
      segment_padding: 2,
      display_borders: true,
      display_base: false,
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
    p.push();
    p.translate(pad_x, pad_y);
    const base_col = tome.get(PARAMS.palette).stroke || '#000';

    if (!PARAMS.animate_drawing) {
      if (PARAMS.display_base) draw_base(ornament_width, ornament_height, base_col);
      if (PARAMS.display_borders) draw_dividers(ornament_width, ornament_height);

      ornaments.forEach((polyset) =>
        polyset.forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color))
      );
      p.noLoop();
    } else if (tick < ornaments.length) {
      if (tick === 0) {
        if (PARAMS.display_base) draw_base(ornament_width, ornament_height, base_col);
        if (PARAMS.display_borders) draw_dividers(ornament_width, ornament_height);
      }

      ornaments[tick].forEach((poly) => draw_poly(poly.pnts, ornament_width, ornament_height, poly.color));
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
    const colors = params.interpolate_colors ? chroma.scale(palette.colors).mode('lch').colors(25) : palette.colors;
    const divider_col = colors[Math.floor(rng() * colors.length)];
    p.background(palette.background || '#ddd');

    const segment_w = params.tile_dim.x * params.tile_copies.x;
    const segment_h = params.tile_dim.y * params.tile_copies.y;

    const segment_pad = params.segment_padding;

    const grid_w = segment_w + 2 * segment_pad;
    const grid_h = (segment_h + segment_pad) * params.segment_copies + segment_pad;

    cell_dim = params.resolution;
    spacing_dim = Math.ceil(params.resolution * params.spacing);

    ornament_width = params.ornament_scale * grid_w;
    ornament_height = params.ornament_scale * grid_h;

    pad_x = (canvas_width - ornament_width) / 2;
    pad_y = (canvas_height - ornament_height) / 2;

    create_grid(grid_w + 2, grid_h + 2, cell_dim, spacing_dim, params.noise_intensity, rng);

    ornaments = create_ornaments(
      params,
      segment_w,
      segment_h,
      segment_h + segment_pad,
      segment_pad + 1,
      segment_pad + 1,
      colors
    );
    dividers = create_dividers(
      params.segment_copies,
      segment_h + segment_pad,
      segment_w + segment_pad,
      grid_h - 1,
      1,
      1,
      segment_pad - 1,
      divider_col
    );

    tick = 0;
    p.loop();
  }

  function create_dividers(n, div_spacing, div_width, column_height, x_off, y_off, weight, col) {
    if (weight === -1) return [];

    const dividers = [];

    const divider = create_divider(div_width, x_off, y_off, weight);
    dividers.push({ pnts: divider, color: col });

    const column1 = create_column(column_height, x_off, y_off, weight);
    const column2 = create_column(column_height, x_off + div_width, y_off, weight);
    dividers.push({ pnts: column1, color: col });
    dividers.push({ pnts: column2, color: col });

    for (let i = 0; i < n; i++) {
      const y_pos = (i + 1) * div_spacing + y_off;
      const div = create_divider(div_width, x_off, y_pos, weight);
      dividers.push({ pnts: div, color: col });
    }
    return dividers;
  }

  function create_ornaments(params, segment_w, segment_h, spacing, x_off, y_off, colors) {
    let ornaments = [];
    for (let i = 0; i < params.segment_copies; i++) {
      let explore_fn = create_segment_explorer(params, colors.length, rng);

      let y_pos = i * spacing + y_off;
      let segment = create_ornament(explore_fn, segment_w, segment_h, colors, x_off, y_pos);
      ornaments = ornaments.concat(segment);
    }
    return ornaments;
  }

  function create_ornament(explore, grid_w, grid_h, colors, x_off, y_off) {
    let polys = [];
    let next = explore();

    while (next) {
      let polyset = [];
      next.forEach((n) => {
        const pnts = create_poly(n, grid_w, grid_h, x_off, y_off);
        const col = n.color === -1 ? null : colors[n.color];
        polyset.push({ pnts: pnts, color: col });
      });

      polys.push(polyset);
      next = explore();
    }

    return polys;
  }

  function create_poly(n, grid_w, grid_h, x_off, y_off) {
    var block_w = n.parent_pos === 'W' || n.parent_pos === 'E' ? 1 : 0;
    var block_h = n.parent_pos === 'N' || n.parent_pos === 'S' ? 1 : 0;
    var block_x = n.parent_pos === 'W' ? n.x - 1 : n.x;
    var block_y = n.parent_pos === 'N' ? n.y - 1 : n.y;

    var long_dist = block_x + block_w > grid_w - 1 || block_y + block_h > grid_h - 1 || block_x < 0 || block_y < 0;

    return long_dist
      ? extract_square(n.x + x_off, n.y + y_off, 0, 0)
      : extract_square(block_x + x_off, block_y + y_off, block_w, block_h);
  }

  function create_divider(width, x_off, y_off, weight) {
    return extract_square(x_off, y_off, width, weight);
  }

  function create_column(height, x_off, y_off, weight) {
    return extract_square(x_off, y_off, weight, height);
  }

  function extract_square(x, y, w, h) {
    var size1 = cell_dim;
    var size2 = spacing_dim;
    var step_size = size1 + size2;

    var north = horizontal_lines[y * 2].slice(x * step_size, (x + w) * step_size + size1 + 1);
    var east = vertical_lines[(x + w) * 2 + 1].slice(y * step_size, (y + h) * step_size + size1 + 1);
    var south = horizontal_lines[(y + h) * 2 + 1].slice(x * step_size, (x + w) * step_size + size1 + 1);
    var west = vertical_lines[x * 2].slice(y * step_size, (y + h) * step_size + size1 + 1);

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

  function draw_dividers(width, height) {
    dividers.forEach((div) => draw_poly(div.pnts, width, height, div.color));
  }

  function draw_poly(pnts, sizeX, sizeY, col) {
    if (col) p.fill(col);
    else p.noFill();

    p.beginShape();
    pnts.forEach((pnt) => p.vertex(pnt[0] * sizeX, pnt[1] * sizeY));
    p.endShape(p.CLOSE);
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

  function create_segment_explorer(params, pal_size, rng) {
    return create_explorer(params.tile_dim.x, params.tile_dim.y, params.tile_copies.x, params.tile_copies.y, pal_size, {
      init_x: Math.floor(rng() * params.tile_dim.x),
      init_y: Math.floor(rng() * params.tile_dim.y),
      split_chance: params.split_chance,
      blank_chance: params.blank_chance,
      cand_size: params.path_priority,
      symmetries: get_symmetry(params.symmetries),
      href: params.horizontal_reflection,
      vref: params.vertical_reflection,
      rng: rng,
    });
  }

  function create_frame_explorer(width, height, pal_size, params, frame, rng) {
    return create_explorer(width, height, 1, 1, pal_size, {
      init_x: 0,
      init_y: 0,
      split_chance: params.split_chance,
      blank_chance: params.blank_chance,
      cand_size: params.path_priority,
      symmetries: get_symmetry(params.symmetries),
      frame: frame,
      href: false,
      vref: false,
      rng: rng,
    });
  }

  const transpose = (m) => m[0].map((_, i) => m.map((x) => x[i]));

  p.keyPressed = function () {
    if (p.keyCode === 80) p.saveCanvas('ornament', 'jpeg');
  };
};
new p5(sketch);
