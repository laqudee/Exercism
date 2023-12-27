export function decodedValue(array: Array<string>): number {
  let firstNumber: number = 0;
  let lastNumber: number = 0;
  if (!array || array.length === 0) {
    throw new Error('arguments error of array!')
  }
  Object.keys(Colors).forEach((key) => {
    if (array[0] === key) {
      firstNumber = Colors[key]
    }
    if (array[1] === key) {
      lastNumber = Colors[key]
    }
  })

  return firstNumber * 10 + lastNumber
}

type Colors<T> = { [key: string]: T }
const Colors: Colors<number> = {
  blank: 0,
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
