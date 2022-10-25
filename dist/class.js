"use strict";
class Person {
    constructor(name, age) {
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
class PersonInterfaceClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is registered`;
    }
}
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    method() {
        return "String";
    }
}
class Child extends Parent {
    constructor(name, age, weight) {
        super(name, age);
        this.weight = weight;
    }
}
var cl = new Child("Abdullah", 48, 78);
console.log("cl ==>>", cl.method());
