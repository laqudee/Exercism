export function decodedResistorValue(array: Array<string>): string {
  if (!array || array.length === 0) {
    throw new Error('Invalid input array!')
  }

  const colorValues: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }

  const first = colorValues[array[0]]
  const second = colorValues[array[1]]
  let result = (first * 10 + second) * Math.pow(10, colorValues[array[2]])

  return printNumber(result)
}

function printNumber(number: number): string {
  if (number < 1000) {
    return `${number} ohms`
  } else if (number < 1000000) {
    return `${(number / 1000)} kiloohms`
  } else if (number < 1000000000) {
    return `${(number / 1000000)} megaohms`
  } else {
    return `${(number / 1000000000)} gigaohms`
  }
}
