export class Triangle {
  private a: number
  private b: number
  private c: number
  constructor(...sides: Array<number>) {
    this.a = sides[0]
    this.b = sides[1]
    this.c = sides[2]
  }


  get isEquilateral() {
    if (!this.isTriangle()) return false
    return this.a === this.b && this.b === this.c
  }

  get isIsosceles() {
    if (!this.isTriangle()) return false
    return this.a === this.b || this.a === this.c || this.b === this.c;
  }

  get isScalene() {
    if (!this.isTriangle()) return false;
    return this.a !== this.b && this.a !== this.c && this.b !== this.c;
  }

  isTriangle(): boolean {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      return false
    }
    if (!(this.a + this.b >= this.c && this.b + this.c >= this.a && this.a + this.c >= this.b)) {
      return false
    }
    return true
  }
}
