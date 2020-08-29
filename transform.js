export function reflected({ x, y, parent_pos }, cell_w, cell_h, horizontal, vertical) {
  let lx = cell_w * (Math.floor(x / cell_w) + 1) - (x % cell_w) - 1;
  let ly = cell_h * (Math.floor(y / cell_h) + 1) - (y % cell_h) - 1;

  let nx = horizontal ? lx : x;
  let ny = vertical ? ly : y;

  //console.log(x, y, nx, ny, grid);
  return { x: nx, y: ny, parent_pos: parent_reflected(parent_pos, horizontal, vertical) };
}

export function rotated({ x, y, parent_pos }, cell_w, cell_h, quartile) {
  let x_init = cell_w * Math.floor(x / cell_w);
  let y_init = cell_h * Math.floor(y / cell_h);

  let x_cell = x % cell_w;
  let y_cell = y % cell_h;

  let parent = parent_rotated(parent_pos, quartile);

  if (quartile == 1) return { x: x_init + (cell_h - y_cell - 1), y: y_init + x_cell, parent_pos: parent };
  if (quartile == 2)
    return { x: x_init + (cell_w - x_cell - 1), y: y_init + (cell_h - y_cell - 1), parent_pos: parent };
  if (quartile == 3) return { x: x_init + y_cell, y: y_init + (cell_w - x_cell - 1), parent_pos: parent };

  return { x, y, parent_pos: parent };
}

export function translated({ x, y, parent_pos }, grid_w, grid_h, dx, dy) {
  let nx = (x + dx) % grid_w;
  let ny = (y + dy) % grid_h;

  return { x: nx, y: ny, parent_pos: parent_pos };
}

function parent_reflected(pos, horizontal, vertical) {
  if (pos === 'N') return vertical ? 'S' : 'N';
  if (pos === 'S') return vertical ? 'N' : 'S';
  if (pos === 'W') return horizontal ? 'E' : 'W';
  if (pos === 'E') return horizontal ? 'W' : 'E';
  return '';
}

function parent_rotated(pos, quartile) {
  let positions = ['N', 'E', 'S', 'W'];
  if (pos === 'N') return positions[quartile % 4];
  if (pos === 'E') return positions[(1 + quartile) % 4];
  if (pos === 'S') return positions[(2 + quartile) % 4];
  if (pos === 'W') return positions[(3 + quartile) % 4];
  return '';
}
