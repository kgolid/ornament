import * as tome from 'chromotome';
import Tweakpane from 'tweakpane';

const canvas_width = 1000;
const canvas_height = 1000;
const col = tome.get().colors[0];

let horizontal_lines;
let vertical_lines;
let grid;

let ornament;

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(canvas_width, canvas_height);
    p.noLoop();
    p.background('#5ad');

    //ornament = [...Array(grid_dim_y)].map((_) => [...Array(grid_dim_x)].map((_) => false));

    const PARAMS = {
      grid_dim: { x: 16, y: 16 },
      ornament_size: { x: 750, y: 750 },
      resolution: 5,
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

    pane.on('change', (_) => {
      reset(PARAMS);
    });

    reset(PARAMS);
  };

  function reset(params) {
    create_fuzzy_grid(params.grid_dim.x + 1, params.grid_dim.y + 1, params.resolution);
    draw_grid(params.ornament_size.x, params.ornament_size.y);
  }

  function draw_grid(size_x, size_y) {
    const pad_x = (canvas_width - size_x) / 2;
    const pad_y = (canvas_height - size_y) / 2;

    p.stroke(0);
    p.strokeWeight(1);
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

    /*
    p.stroke(255, 0, 0);
    p.strokeWeight(5);
    grid.forEach((pnts) => {
      pnts.forEach((pnt) => p.point(pad_x + pnt[0] * size_x, pad_y + pnt[1] * size_y));
    });
    */
  }

  function create_fuzzy_grid(w, h, res) {
    horizontal_lines = [...Array(h)].map((_, y) =>
      [...Array((w - 1) * res + 1)].map((_, x) => get_point(x / res, y, w, h))
    );
    vertical_lines = [...Array(w)].map((_, x) =>
      [...Array((h - 1) * res + 1)].map((_, y) => get_point(x, y / res, w, h))
    );

    grid = [...Array(h)].map((_, y) =>
      [...Array(w)].map((_, x) => [vertical_lines[x][y * res][0], horizontal_lines[y][x * res][1]])
    );
  }

  function get_point(x, y, w, h) {
    //x = x % 2 == 0 ? x : x + 0.7;
    //y = y % 2 == 0 ? y : y + 0.7;
    const nx = (x + (p.noise(x / 2, y / 10, 4.123) - 0.5) * 1.2) / (w - 1);
    const ny = (y + (p.noise(x / 10, y / 2, 0.582) - 0.5) * 1.2) / (h - 1);

    return [nx, ny];
  }
};
new p5(sketch);
