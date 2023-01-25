// inspired by this article
// https://sebhastian.com/doubly-linked-list-javascript/

function createNode(value) {
  return {
    value: value,
    next: null,
    previous: null,
  };
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    let newNode = createNode(value);
    this.amount++;

    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;

    return newNode;
  }

  pop() {
    const item = this.tail;

    if (item) {
      if (item.previous) {
        this.tail = item.previous;
        item.previous.next = null;
      } else {
        this.tail = null;
        this.head = null;
      }

      this.amount--;
    }
  }

  iterate(callback) {
    let current = this.head;

    while (current) {
      callback(current);
      current = current.next;
    }
  }

  insertAfter(value, valueToInsert) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        let newNode = createNode(valueToInsert);
        newNode.previous = currentNode;
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.amount++;
        return true;
      }

      currentNode = currentNode.next;
    }
    return false;
  }

  removeItem(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        const previousNode = currentNode.previous;
        const nextNode = currentNode.next;

        previousNode ? (previousNode.next = nextNode) : (nextNode.previous = previousNode);

        this.amount--;

        return true;
      }

      currentNode = currentNode.next;
    }
    return false;
  }
}
