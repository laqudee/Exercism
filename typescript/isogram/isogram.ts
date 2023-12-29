export function isIsogram(str: string): boolean {
  if (str.length === 0) return true;
  const letterArray: string[] = str.toLowerCase().match(/[a-z]/g) || [];
  const letterSet = new Set(letterArray);
  return letterSet.size === letterArray.length;
}
