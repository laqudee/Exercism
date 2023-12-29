export class Gigasecond {
  private time: Date;
  constructor(date: Date) {
    this.time = new Date(date.getTime() + 1e12);
  }
  public date(): Date {
    return this.time;
  }
}
