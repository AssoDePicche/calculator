export default class FixedArray {
  constructor(maxSize) {
    this.maxSize = maxSize

    this.items = [];
  }

  isFull() {
    return this.items.length === this.maxSize;
  }

  push(item) {
    if (false === this.isFull()) {
      this.items.push(item);
    }
  }

  shift() {
    return this.items.shift();
  }

  get(index) {
    return this.items[index];
  }

  clear() {
    this.items = [];
  }
}
