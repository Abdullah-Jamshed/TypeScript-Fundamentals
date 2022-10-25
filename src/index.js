class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var ains = new A("Abdullah", 21);

class B extends A {
  constructor(name, age, weight) {
    super(name, age);
    this.weight = weight;
  }
}

var bins = new B("Abdullah", 21, 70);
