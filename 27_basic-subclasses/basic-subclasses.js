class Human {
  constructor(gender, name) {
    this.sex = gender;
    this.name = name;
  }
}
class Man extends Human {
  constructor(name) {
    super('male', name);
  }
}
class Woman extends Human {
  constructor(name) {
    super('female', name);
  }
}

class God {
  static create() {
    const humans = [new Man('Adam'), new Woman('Eve')];

    return humans;
  }
}

export { God, Human, Man, Woman };
