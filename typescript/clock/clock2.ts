export class Clock {
  private hour: number
  private minute: number

  constructor(hour: number, minute?: number) {
    let totalMinutes = this.positiveMod(hour * 60 + (minute || 0), 24 * 60);
    
    if (totalMinutes < 0) {
      totalMinutes = totalMinutes + 24 * 60;
    }
    this.hour = Math.floor(totalMinutes / 60);
    this.minute = totalMinutes % 60;
  }

  private positiveMod(n: number, d: number): number {
    return (n % d + d) % d
  }

  toString(): string {
    return String(this.hour).padStart(2, '0')
      + ':'
      + String(this.minute).padStart(2, '0')
  }

  equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }

  plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes)
  }

  minus(minutes: number): Clock {
    return this.plus(-minutes)
  }
}
