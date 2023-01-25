function createNode(value) {
  return {
    value: value,
    next: null,
    prev: null,
  };
}

export class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = createNode(value);
    newNode.prev = this.last;
    newNode.next = null;
    this.last = newNode;
    this.size++;

    return newNode;
  }

  pop() {
    const item = this.last;

    if (item) {
      item.prev ? (this.last = item.prev) : (this.last = null);
      this.size--;
    }

    return item?.value;
  }

  get isEmpty() {
    return this.size === 0;
  }
}
