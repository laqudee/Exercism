export function toRna(txt: string): string {
  let result = '';
  for (const char of txt) {
    if (RNA[char as keyof typeof RNA]) {
      result += RNA[char as keyof typeof RNA];
    } else {
      throw new Error('Invalid input DNA.');
    }
  }
  return result;
}
enum RNA {
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U'
}
