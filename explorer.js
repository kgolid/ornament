export function create_explorer(w, h, init_x, init_y) {
  const grid = [...Array(h)].map((_, y) => [...Array(w)].map((_, x) => ({ x, y, explored: false })));
  const explored = [];

  let init_cell = grid[init_y][init_x];
  init_cell.explored = true;
  explored.push(init_cell);

  return () => {
    const neighbors = get_all_neighbors(explored, grid);

    const pick = neighbors[Math.floor(Math.random() * neighbors.length)];

    if (pick === undefined) return null;

    pick.explored = true;
    explored.push(pick);

    return pick;
  };
}

function get_all_neighbors(cells, grid) {
  return [...new Set(cells.flatMap((cell) => get_neighbors_of_cell(cell, grid)))];
}

function get_neighbors_of_cell(cell, grid) {
  let neighbors = [];

  if (cell.y > 0) neighbors.push(grid[cell.y - 1][cell.x]);
  if (cell.y < grid.length - 1) neighbors.push(grid[cell.y + 1][cell.x]);
  if (cell.x > 0) neighbors.push(grid[cell.y][cell.x - 1]);
  if (cell.x < grid[0].length - 1) neighbors.push(grid[cell.y][cell.x + 1]);

  neighbors = neighbors.filter((n) => !n.explored);
  neighbors.forEach((n) => (n.parent = cell));

  return neighbors.filter((n) => !n.explored);
}
