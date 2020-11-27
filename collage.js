import { create_explorer } from './explorer';
import { random_int } from './util';
import { get_symmetry } from './symmetries';

export function get_collage_explorers(rng, pal_size, split_chance, blank_chance, cand_size) {
  const size_a = [16, 16];
  const size_b = [4, 4];
  const size_c = [12, 6];

  const scale_a = 2;
  const scale_b = 1;
  const scale_c = 1;

  const dim_a = [size_a[0] / scale_a, size_a[1] / scale_a];
  const dim_b = [size_b[0] / scale_b, size_b[1] / scale_b];
  const dim_c = [size_c[0] / scale_c, size_c[1] / scale_c];

  const copies_a = [2, 1];
  const copies_b = [2, 4];
  const copies_c = [4, 1];

  const pos_a = [size_b[0] * copies_b[0], size_c[1] * copies_c[1]];
  const pos_b = [0, size_c[1] * copies_c[1]];
  const pos_c = [0, 0];

  const pos_b2 = [size_b[0] * copies_b[0] + size_a[0] * copies_a[0], size_c[1] * copies_c[1]];
  const pos_c2 = [0, size_c[1] * copies_c[1] + size_a[1] * copies_a[1]];

  const pos_a2 = [size_b[0] * copies_b[0], 2 * (size_c[1] * copies_c[1]) + size_a[1] * copies_a[1]];
  const pos_b3 = [0, pos_b[1] + size_c[1] * copies_c[1] + size_a[1] * copies_a[1]];
  const pos_b4 = [
    size_b[0] * copies_b[0] + size_a[0] * copies_a[0],
    pos_b[1] + size_c[1] * copies_c[1] + size_a[1] * copies_a[1],
  ];
  const pos_c3 = [0, pos_c2[1] + size_c[1] * copies_c[1] + size_a[1] * copies_a[1]];

  const params_a = {
    pos: [pos_a, pos_a2],
    local_dim: dim_a,
    copies: copies_a,
    pal_size: pal_size,
    init_x: random_int(rng, dim_a[0]),
    init_y: random_int(rng, dim_a[1]),
    split_chance: split_chance,
    blank_chance: blank_chance,
    cand_size: cand_size,
    symmetries: get_symmetry('rotate_90'),
    href: false,
    vref: false,
    rng: rng,
    scale: scale_a,
  };

  const params_b = {
    pos: [pos_b, pos_b2, pos_b3, pos_b4],
    local_dim: dim_b,
    copies: copies_b,
    pal_size: pal_size,
    init_x: random_int(rng, dim_b[0]),
    init_y: random_int(rng, dim_b[1]),
    split_chance: split_chance,
    blank_chance: blank_chance,
    cand_size: cand_size,
    symmetries: get_symmetry('translate_reflect_h'),
    href: true,
    vref: false,
    rng: rng,
    scale: scale_b,
  };

  const params_c = {
    pos: [pos_c, pos_c2, pos_c3],
    local_dim: dim_c,
    copies: copies_c,
    pal_size: pal_size,
    init_x: random_int(rng, dim_c[0]),
    init_y: random_int(rng, dim_c[1]),
    split_chance: split_chance,
    blank_chance: blank_chance,
    cand_size: cand_size,
    symmetries: get_symmetry('rotate_180'),
    href: true,
    vref: false,
    rng: rng,
    scale: scale_c,
  };

  const explorer_a = create_collage_explorer(params_a);
  const explorer_b = create_collage_explorer(params_b);
  const explorer_c = create_collage_explorer(params_c);

  return [explorer_a, explorer_b, explorer_c];
}

function create_collage_explorer(par) {
  const explorer = create_explorer(...par.local_dim, ...par.copies, par.pal_size, par);
  return {
    explorer,
    pos: par.pos,
    scale: par.scale,
    dim_x: par.local_dim[0] * par.copies[0],
    dim_y: par.local_dim[1] * par.copies[1],
  };
}
