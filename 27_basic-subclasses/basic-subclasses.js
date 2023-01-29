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


class Human {
  constructor(gender, name) {
    this.sex = gender;
    this.name = name;
  }
}

class Man extends Human {
  sex = 'male';
  constructor(name) {
    super(this.sex, name);
  }
}

class Woman extends Human {
  sex = 'female';
  constructor(name) {
    super(this.sex, name);
  }
}

class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export { God, Human, Man, Woman };
