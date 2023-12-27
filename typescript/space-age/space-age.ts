export function age(planet: string, seconds: number): number {
  if (!Planets[planet as keyof typeof Planets]) {
    throw new Error('Invalid Planet input.')
  }
  if (!seconds || seconds <= 0) {
    throw new Error('Invalid seconds input.');
  }
  let result = ((seconds / (365.25 * 24 * 60 * 60)) / Planets[planet as keyof typeof Planets]).toFixed(2);
  return parseFloat(result)
}

enum Planets {
  earth = 1,
  mercury = 0.2408467,
  venus = 0.61519726,
  mars = 1.8808158,
  jupiter = 11.862615,
  saturn = 29.447498,
  uranus = 84.016846,
  neptune = 164.79132
}
