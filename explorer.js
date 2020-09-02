import { translated, reflected, rotated } from './transform';

export function create_explorer(
  local_w,
  local_h,
  copies_x,
  copies_y,
  number_of_cols,
  { init_x = 0, init_y = 0, split_chance = 0, blank_chance = 0, cand_size = 0.1, symmetries = [], href, vref, rng } = {}
) {
  const grid_w = local_w * copies_x;
  const grid_h = local_h * copies_y;
  const grid = [...Array(grid_h)].map((_, y) => [...Array(grid_w)].map((_, x) => ({ x, y, explored: false })));
  const explored = [];
  let neighbors = [];

  let init_cell = grid[init_y][init_x];
  init_cell.parent = init_cell;
  init_cell.parent_pos = '';
  init_cell.generation = 0;
  init_cell.color = Math.floor(rng() * number_of_cols);
  neighbors.push(init_cell);

  return () => {
    const candidates = shuffle(neighbors, rng).slice(0, Math.ceil(cand_size * neighbors.length));
    const pick = candidates.sort((a, b) => b.generation - a.generation)[0];

    if (pick === undefined) return null;

    pick.explored = true;
    explored.push(pick);

    if (rng() < split_chance) {
      pick.parent_pos = '';
      pick.color = rng() < blank_chance ? -1 : Math.floor(rng() * number_of_cols);
    }

    const picks = [pick];

    for (let i = 0; i < copies_y; i++) {
      for (let j = 0; j < copies_x; j++) {
        symmetries.forEach((s, si) => {
          if (i + j + si !== 0) {
            const transform = get_transform(j, i, s, local_w, local_h, grid_w, grid_h, href, vref);
            const tr = transform(pick);

            const pick_clone = grid[tr.y][tr.x];

            pick_clone.explored = true;
            pick_clone.color = pick.color;
            pick_clone.parent_pos = picks.includes(pick_clone) ? '' : tr.parent_pos;

            picks.push(pick_clone);
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
  const neighbors = [];

  let north = grid[mod(cell.y - 1, grid.length)][cell.x];
  if (!north.explored) {
    north.parent_pos = 'S';
    neighbors.push(north);
  }
  let south = grid[mod(cell.y + 1, grid.length)][cell.x];
  if (!south.explored) {
    south.parent_pos = 'N';
    neighbors.push(south);
  }
  let west = grid[cell.y][mod(cell.x - 1, grid[0].length)];
  if (!west.explored) {
    west.parent_pos = 'E';
    neighbors.push(west);
  }

  let east = grid[cell.y][mod(cell.x + 1, grid[0].length)];
  if (!east.explored) {
    east.parent_pos = 'W';
    neighbors.push(east);
  }

  neighbors.forEach((n) => {
    n.generation = cell.generation + 1;
    n.color = cell.color;
  });

  return neighbors;
}

function get_transform(global_x, global_y, symm, cell_w, cell_h, grid_w, grid_h, href, vref) {
  return (pnt) => {
    const p1 = rotated(pnt, cell_w, cell_h, symm[0]);
    const p1b = reflected(p1, cell_w, cell_h, symm[1], symm[2]);
    const p1c = translated(p1b, grid_w, grid_h, symm[3] * cell_w, symm[4] * cell_h);

    const p2 = translated(p1c, grid_w, grid_h, global_x * cell_w, global_y * cell_h);
    const p3 = global_x % 2 === 0 || !href ? p2 : reflected(p2, cell_w, cell_h, true, false);
    const p4 = global_y % 2 === 0 || !vref ? p3 : reflected(p3, cell_w, cell_h, false, true);
    return p4;
  };
}

function shuffle(a, rng) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
