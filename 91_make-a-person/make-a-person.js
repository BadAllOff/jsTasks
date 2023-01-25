export class Person {
  constructor(fullName) {
    [this.first, this.last] = fullName.split(' ');
  }

  getFirstName() {
    return this.first;
  }

  getLastName() {
    return this.last;
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }

  setFirstName(first) {
    this.first = first;
  }

  setLastName(last) {
    this.last = last;
  }

  setFullName(firstAndLast) {
    [this.first, this.last] = firstAndLast.split(' ');
  }
}
