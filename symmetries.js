export function get_symmetry(s) {
  if (s === 'none') return [[0, false, false, 0, 0]];
  if (s === 'rotate_180')
    return [
      [0, false, false, 0, 0],
      [2, false, false, 0, 0],
    ];
  if (s === 'rotate_90')
    return [
      [0, false, false, 0, 0],
      [1, false, false, 0, 0],
      [2, false, false, 0, 0],
      [3, false, false, 0, 0],
    ];
  if (s === 'rotate_reflect_v')
    return [
      [0, false, false, 0, 0],
      [1, false, true, 0, 0],
    ];
  if (s === 'rotate_reflect_h')
    return [
      [0, false, false, 0, 0],
      [1, true, false, 0, 0],
    ];
  if (s === 'translate_reflect_v')
    return [
      [0, false, false, 0, 0],
      [0, false, true, 0.5, 0],
    ];
  if (s === 'translate_reflect_h')
    return [
      [0, false, false, 0, 0],
      [0, true, false, 0, 0.5],
    ];
}
