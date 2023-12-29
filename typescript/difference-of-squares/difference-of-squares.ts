export class Squares {
  private count: number = 0;
  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    let result: number = 0;
    for(let i = 1; i <= this.count; i++) {
      result += i * i;
    }

    return result;
  }

  get squareOfSum(): number {
    let sum: number = 0;
    for(let i = 1; i <= this.count; i++) {
      sum += i;
    }

    return sum * sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
