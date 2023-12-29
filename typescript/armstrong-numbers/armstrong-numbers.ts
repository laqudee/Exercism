export function isArmstrongNumber(number: number | bigint): boolean {
  const digitArray = Array.from(String(number), Number);
  const numDigits = digitArray.length;
  let result: bigint = BigInt(0);

  for (let digit of digitArray) {
    result += BigInt(digit) ** BigInt(numDigits);
  }


  return result === BigInt(number);
}
