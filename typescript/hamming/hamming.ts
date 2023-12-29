export function compute(left: string, right: string): number {
  if (left.length !== right.length) throw new Error('DNA strands must be of equal length.');
  return Array.from(left).reduce((acc, curr, index) => (curr !== right[index] ? acc + 1 : acc), 0);
}
