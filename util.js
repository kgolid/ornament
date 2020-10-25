export const mod = (n, m) => ((n % m) + m) % m;

export const random_int = (rng, max) => Math.floor(rng() * max);

export function shuffle(a, rng) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = random_int(rng, i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const normalize = (val, src0, src1) => {
  if (src0 === src1) return 0;
  return (val - src0) / (src1 - src0);
};

export function weighted_pick(rng, array, weight_fn) {
  const aggregate_array = aggregate_sums(array.map(weight_fn));

  const sum = last(aggregate_array);
  const threshold = rng() * sum;

  const index = aggregate_array.findIndex((el) => el > threshold) - 1;

  return array[index];
}

export function sorted_pick(rng, array, compare_fn) {}

const aggregate_sums = (arr) => arr.reduce((acc, cur) => [...acc, last(acc) + cur], [0]);
const last = (arr) => arr[arr.length - 1];
