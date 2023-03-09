export default class Calculator {
  constructor(list) {
    this.x = Number.parseFloat(list.get(0));

    this.y = Number.parseFloat(list.get(1));
  }

  sum() {
    return this.x + this.y;
  }

  subtract() {
    return this.x - this.y;
  }

  multiply() {
    return this.x * this.y;
  }

  divide() {
    return this.x / this.y;
  }

  modulo() {
    return this.x % this.y;
  }
}
