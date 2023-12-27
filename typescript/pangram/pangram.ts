export function isPangram(txt: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const txt_use = txt.toLowerCase()
  for (let alph of alphabet) {
    if (!txt_use.includes(alph)) {
      return false
    }
  }
  return true
}
