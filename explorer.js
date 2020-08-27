export function create_explorer(
  local_w,
  local_h,
  copies_x,
  copies_y,
  number_of_cols,
  { init_x = 0, init_y = 0, split_chance = 0, blank_chance = 0, cand_size = 0.1, symmetries = [] } = {}
) {
  const w = local_w * copies_x;
  const h = local_h * copies_y;
  const grid = [...Array(h)].map((_, y) => [...Array(w)].map((_, x) => ({ x, y, explored: false })));
  const explored = [];
  let neighbors = [];

  let init_cell = grid[init_y][init_x];
  init_cell.parent = init_cell;
  init_cell.generation = 0;
  init_cell.color = Math.floor(Math.random() * number_of_cols);
  neighbors.push(init_cell);

  return () => {
    const candidates = shuffle(neighbors.slice(0, Math.ceil(cand_size * neighbors.length)));
    const pick = candidates.sort((a, b) => b.generation - a.generation)[0];

    if (pick === undefined) return null;

    pick.explored = true;
    explored.push(pick);

    if (Math.random() < split_chance) {
      pick.parent = pick;
      pick.color = Math.random() < blank_chance ? -1 : Math.floor(Math.random() * number_of_cols);
    }

    const picks = [pick];

    for (let i = 0; i < copies_y; i++) {
      for (let j = 0; j < copies_x; j++) {
        symmetries.forEach((s) => {
          if (i + j + s !== 0) {
            const r = rotated(pick.x, pick.y, grid, s);
            const tr = translated(r.x, r.y, j * local_w, i * local_h, grid);

            const rp = rotated(pick.parent.x, pick.parent.y, grid, s);
            const trp = translated(rp.x, rp.y, j * local_w, i * local_h, grid);

            tr.explored = true;
            tr.color = pick.color;
            tr.parent = trp;

            picks.push(tr);
          }
        });
      }
    }

    neighbors = get_all_neighbors(explored, grid);

    return picks;
  };
}

function get_all_neighbors(cells, grid) {
  return [...new Set(cells.flatMap((cell) => get_neighbors_of_cell(cell, grid)))];
}

function get_neighbors_of_cell(cell, grid) {
  let neighbors = [];

  if (cell.y > 0) neighbors.push(grid[cell.y - 1][cell.x]);
  else neighbors.push(grid[grid.length - 1][cell.x]);
  if (cell.y < grid.length - 1) neighbors.push(grid[cell.y + 1][cell.x]);
  else neighbors.push(grid[0][cell.x]);
  if (cell.x > 0) neighbors.push(grid[cell.y][cell.x - 1]);
  else neighbors.push(grid[cell.y][grid[0].length - 1]);
  if (cell.x < grid[0].length - 1) neighbors.push(grid[cell.y][cell.x + 1]);
  else neighbors.push(grid[cell.y][0]);

  neighbors = neighbors.filter((n) => !n.explored);
  neighbors.forEach((n) => {
    n.parent = cell;
    n.generation = cell.generation + 1;
    n.color = cell.color;
  });

  return neighbors.filter((n) => !n.explored);
}

function reflected(x, y, grid, horizontal, vertical) {
  let nx = horizontal ? grid[0].length - x - 1 : x;
  let ny = vertical ? grid.length - y - 1 : y;

  return grid[ny][nx];
}

function rotated(x, y, grid, quartile) {
  if (quartile == 1) return reflected(y % grid[0].length, x % grid.length, grid, true, false);
  if (quartile == 2) return reflected(x, y, grid, true, true);
  if (quartile == 3) return reflected(y % grid[0].length, x % grid.length, grid, false, true);

  return grid[y][x];
}

function translated(x, y, dx, dy, grid) {
  let nx = (x + dx) % grid[0].length;
  let ny = (y + dy) % grid.length;

  return grid[ny][nx];
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
