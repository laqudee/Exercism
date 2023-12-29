export function steps(count: number): number {
  if (count <= 0 || !Number.isInteger(count)) throw new Error('Only positive integers are allowed');
  if (count === 1) return 0;

  let result = 0;
  for (let i = count; i > 1; i = i % 2 === 0 ? i / 2 : i * 3 + 1) {
    result++;
  }

  return result;
}
