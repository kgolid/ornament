export function create_explorer(w, h, init_x, init_y) {
  const grid = [...Array(h)].map((_, y) => [...Array(w)].map((_, x) => ({ x, y, explored: false })));
  const explored = [];
  let neighbors = [];

  let init_cell = grid[init_y][init_x];
  init_cell.parent = init_cell;
  init_cell.generation = 0;
  init_cell.color = 0;
  neighbors.push(init_cell);

  /*
  init_cell.explored = true;
  explored.push(init_cell);

  
  let refl_cell = reflected(init_x, init_y, grid, true, false);
  refl_cell.explored = true;


  rotated(init_x, init_y, grid, 1).explored = true;
  rotated(init_x, init_y, grid, 2).explored = true;
  rotated(init_x, init_y, grid, 3).explored = true;
  */

  return () => {
    //const pick = neighbors[Math.floor(Math.random() * neighbors.length)];
    const pick = shuffle(neighbors).sort((a, b) => b.generation - a.generation)[0];
    if (pick === undefined) return null;

    pick.explored = true;
    explored.push(pick);

    if (Math.random() < 0.1) {
      pick.parent = pick;
      //pick.generation = 0;
      pick.color = Math.floor(Math.random() * 5);
    }

    /*
    let reflected_pick = reflected(pick.x, pick.y, grid, true, false);
    reflected_pick.explored = true;
    reflected_pick.parent = reflected(pick.parent.x, pick.parent.y, grid, true, false);
*/

    let r1 = rotated(pick.x, pick.y, grid, 1);
    let r2 = rotated(pick.x, pick.y, grid, 2);
    let r3 = rotated(pick.x, pick.y, grid, 3);
    r1.explored = true;
    r2.explored = true;
    r3.explored = true;
    r1.color = pick.color;
    r2.color = pick.color;
    r3.color = pick.color;
    r1.parent = rotated(pick.parent.x, pick.parent.y, grid, 1);
    r2.parent = rotated(pick.parent.x, pick.parent.y, grid, 2);
    r3.parent = rotated(pick.parent.x, pick.parent.y, grid, 3);

    neighbors = get_all_neighbors(explored, grid);

    return [pick, r1, r2, r3];
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
  neighbors.forEach((n) => {
    n.parent = cell;
    n.generation = cell.generation + 1;
    n.color = cell.color;
  });

  return neighbors.filter((n) => !n.explored);
}

function reflected(x, y, grid, horizontal, vertical) {
  let h = grid.length;
  let w = grid[0].length;

  let nx = horizontal ? w - x - 1 : x;
  let ny = vertical ? h - y - 1 : y;

  return grid[ny][nx];
}

function rotated(x, y, grid, quartile) {
  if (quartile == 1) return reflected(y, x, grid, true, false);
  if (quartile == 2) return reflected(x, y, grid, true, true);
  if (quartile == 3) return reflected(y, x, grid, false, true);
  return grid[y][x];
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
