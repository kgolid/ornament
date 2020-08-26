import * as tome from 'chromotome';
import Tweakpane from 'tweakpane';

import { create_explorer } from './explorer';

const canvas_width = 1000;
const canvas_height = 1000;

let horizontal_lines;
let vertical_lines;

let PARAMS;
let palette;

let explore;
let next;

let ornament;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    p.noLoop();
    p.background('#5ad');
    //p.frameRate(2);
    palette = tome.get('skyspider');

    PARAMS = {
      grid_dim: { x: 16, y: 16 },
      ornament_size: { x: 750, y: 750 },
      resolution: 5,
      oscilation: 0.4,
    };

    // Pass the object and its key to pane
    const pane = new Tweakpane();
    pane.addInput(PARAMS, 'grid_dim', {
      x: { min: 4, max: 40, step: 2 },
      y: { min: 4, max: 40, step: 2 },
    });
    pane.addInput(PARAMS, 'ornament_size', {
      x: { min: 100, max: 1000, step: 50 },
      y: { min: 100, max: 1000, step: 50 },
    });
    pane.addInput(PARAMS, 'resolution', { min: 1, max: 10, step: 1 });
    pane.addInput(PARAMS, 'oscilation', { min: 0.05, max: 1, step: 0.05 });

    pane.on('change', (_) => {
      reset(PARAMS);
    });

    reset(PARAMS);
  };

  function reset(params) {
    const big_cell = params.resolution;
    const small_cell = Math.ceil(params.resolution * params.oscilation);

    const grid_w = params.grid_dim.x;
    const grid_h = params.grid_dim.y;

    const init = [2, 6];

    next = [
      { x: init[0], y: init[1] },
      { x: grid_w - init[0] - 1, y: grid_h - init[1] - 1 },
    ];
    next[0].parent = next[0];
    next[1].parent = next[1];
    explore = create_explorer(grid_w, grid_h, next[0].x, next[0].y);

    //create_ornament(params.grid_dim.x, params.grid_dim.y);
    create_fuzzy_grid(grid_w, grid_h, big_cell, small_cell);

    p.background(palette.background);
    //draw_grid(params.ornament_size.x, params.ornament_size.y);
    draw_ornament(params.ornament_size.x, params.ornament_size.y, big_cell, small_cell);
  }

  function draw_ornament(size_x, size_y, big_cell, small_cell) {
    const pad_x = (canvas_width - size_x) / 2;
    const pad_y = (canvas_height - size_y) / 2;

    p.push();
    p.translate(pad_x, pad_y);

    let retries = 0;
    next = explore();
    while (next && retries < 100000) {
      next.forEach((n) => {
        var pnts = extract_square(n.x, n.y, big_cell, small_cell);
        draw_poly(pnts, size_x, size_y, palette.colors[n.color]);

        var pnts = extract_square((n.x + n.parent.x) / 2, (n.y + n.parent.y) / 2, big_cell, small_cell);
        draw_poly(pnts, size_x, size_y, palette.colors[n.color]);
      });

      next = explore();
      retries++;
    }
    p.pop();
  }

  function extract_square(x, y, size1, size2) {
    var north = horizontal_lines[y * 2].slice(x * (size1 + size2), x * (size1 + size2) + size1 + 1);
    var east = vertical_lines[x * 2 + 1].slice(y * (size1 + size2), y * (size1 + size2) + size1 + 1);
    var south = horizontal_lines[y * 2 + 1].slice(x * (size1 + size2), x * (size1 + size2) + size1 + 1);
    var west = vertical_lines[x * 2].slice(y * (size1 + size2), y * (size1 + size2) + size1 + 1);

    return [...north, ...east, ...south.reverse(), ...west.reverse()];
  }

  function draw_poly(pnts, sizeX, sizeY, col) {
    p.fill(col);
    p.stroke(col);
    p.strokeWeight(2);

    p.beginShape();
    pnts.forEach((pnt) => p.vertex(pnt[0] * sizeX, pnt[1] * sizeY));
    p.endShape(p.CLOSED);
  }

  function draw_grid(size_x, size_y) {
    const pad_x = (canvas_width - size_x) / 2;
    const pad_y = (canvas_height - size_y) / 2;

    p.stroke(0);
    p.strokeWeight(3);
    p.noFill();
    p.background('#5ad');

    horizontal_lines.forEach((pnts) => {
      p.beginShape();
      pnts.forEach((pnt) => p.vertex(pad_x + pnt[0] * size_x, pad_y + pnt[1] * size_y));
      p.endShape();
    });

    vertical_lines.forEach((pnts) => {
      p.beginShape();
      pnts.forEach((pnt) => p.vertex(pad_x + pnt[0] * size_x, pad_y + pnt[1] * size_y));
      p.endShape();
    });
    p.stroke(255, 0, 0);
    p.strokeWeight(5);

    horizontal_lines.forEach((pnts) => {
      p.beginShape();
      pnts.forEach((pnt) => p.point(pad_x + pnt[0] * size_x, pad_y + pnt[1] * size_y));
      p.endShape();
    });

    vertical_lines.forEach((pnts) => {
      p.beginShape();
      pnts.forEach((pnt) => p.point(pad_x + pnt[0] * size_x, pad_y + pnt[1] * size_y));
      p.endShape();
    });

    /*
    p.stroke(255, 0, 0);
    p.strokeWeight(5);
    grid.forEach((pnts) => {
      pnts.forEach((pnt) => p.point(pad_x + pnt[0] * size_x, pad_y + pnt[1] * size_y));
    });
    */
  }

  function create_ornament(w, h) {
    ornament = [...Array(h)].map((_) => [...Array(w)].map((_) => Math.random() < 0.5));
  }

  function create_fuzzy_grid(w, h, big_cell, small_cell) {
    const cell_dim = big_cell + small_cell;
    const grid_height = h * cell_dim - small_cell + 1;
    const grid_width = w * cell_dim - small_cell + 1;

    const pnts = [...Array(grid_height)].map((_, y) =>
      [...Array(grid_width)].map((_, x) => get_point(x / cell_dim, y / cell_dim, w, h))
    );

    horizontal_lines = pnts.filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);
    vertical_lines = transpose(pnts).filter((_, i) => i % cell_dim === 0 || i % cell_dim === big_cell);

    /*
    horizontal_lines = [...Array(h)].map((_, y) =>
      [...Array((w - 1) * res + 1)].map((_, x) =>
        get_point(oscilate(x / res, 0.3), oscilate(y, 0.3), w, h)
      )
    );
    vertical_lines = [...Array(w)].map((_, x) =>
      [...Array((h - 1) * res + 1)].map((_, y) =>
        get_point(oscilate(x, 0.3), oscilate(y / res, 0.3), w, h)
      )
    );

    grid = [...Array(h)].map((_, y) =>
      [...Array(w)].map((_, x) => [vertical_lines[x][y * res][0], horizontal_lines[y][x * res][1]])
    );
    */
  }

  function get_point(x, y, w, h) {
    const nx = (x + (p.noise(x / 2, y / 8, 4.123) - 0.5) * 1.1) / w;
    const ny = (y + (p.noise(x / 8, y / 2, 0.582) - 0.5) * 1.1) / h;

    return [nx, ny];
  }

  const transpose = (m) => m[0].map((x, i) => m.map((x) => x[i]));

  p.keyPressed = function () {
    if (p.keyCode === 80) p.saveCanvas('ornament', 'jpeg');
  };
};
new p5(sketch);
