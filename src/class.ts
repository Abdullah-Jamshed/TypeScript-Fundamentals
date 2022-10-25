class Person {
  name: string;
  age: number;
  private pvt_property?: string; // accessible with in the class only
  protected pro_property?: string; // accessible with in the class and child class
  public pub_property?: string; // default read/write from any where

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  register() {
    return `${this.name} is registered`;
  }
}

const Abdullah = new Person("Abdullah", 21);
const Fahad = new Person("Fahad", 22);

Abdullah.age = 22;
// Abdullah.pvt_property = "Will Not Update";
// Abdullah.pro_property = "Will Not Update";
Abdullah.pub_property = "Will Be Update";

// console.log(Abdullah.pvt_property) /* will console undefined */
// console.log(Abdullah.pro_property) /* will console undefined */
console.log(Abdullah.pub_property); /* will console string value */

console.log(Abdullah.register());
console.log(Abdullah, Fahad);

interface PersonClassInterface {
  name: string;
  age: number;
  register?(): string;
}

class PersonInterfaceClass implements PersonClassInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  register() {
    return `${this.name} is registered`;
  }
}

interface PInt {
  name: string;
  age: number;
  method(): string;
}

class Parent implements PInt {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  method() {
    return "String";
  }
}

class Child extends Parent {
  weight: number;
  constructor(name: string, age: number, weight: number) {
    super(name, age);
    this.weight = weight;
  }
}

var cl = new Child("Abdullah", 48, 78);

console.log("cl ==>>", cl.method());
