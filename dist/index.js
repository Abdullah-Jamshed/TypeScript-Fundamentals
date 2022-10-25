"use strict";
/******************** TYPES ********************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const firstName = "Abdullah";
const ageInYear = 22;
const skillsArrString = ["React", "NodeJS", "Express"];
const skillsArrNumber = [1, 2, 3];
const booleanValue = true;
const anyValue = "true";
const skillsArrAny = [true, 1, 2, 3];
const tupleInfo = ["Hello World", 22];
const tupleInfoArr = [
    ["Hello World", 22],
    ["Hello World", 22],
];
// union
const unionType = true;
// TYPE ASSERTION
let uid = "f5c45w24";
let customerUID = uid;
/* ==OR== */
// let customerUID = uid as number;
/******************** TYPES END ********************/
/*
 **
 **
 **
 **
 **
 **
 **
 */
/******************** OBJECT ********************/
const object = {
    name: "Abdullah",
    age: 22,
};
// object.weight = "70kg"  // illegal if not intialize in object
const objectType = {
    name: "Abdullah",
    age: 22,
};
objectType.weight = "70kg";
const objectType2 = {
    name: "Abdullah",
    age: 22,
};
objectType2.weight = "70kg";
/******************** OBJECT END ********************/
/*
 **
 **
 **
 **
 **
 **
 **
 */
/******************** ENUM ********************/
var Pointer1;
(function (Pointer1) {
    Pointer1[Pointer1["Up"] = 0] = "Up";
    Pointer1[Pointer1["Down"] = 1] = "Down";
    Pointer1[Pointer1["Left"] = 2] = "Left";
    Pointer1[Pointer1["Right"] = 3] = "Right";
})(Pointer1 || (Pointer1 = {}));
// console.log(Pointer1.Up); // 0
// console.log(Pointer1.Down); // 1
// console.log(Pointer1.Left); // 2
// console.log(Pointer1.Right); // 3
var Pointer2;
(function (Pointer2) {
    Pointer2["Up"] = "Up";
    Pointer2["Down"] = "Down";
    Pointer2["Left"] = "Left";
    Pointer2["Right"] = "Right";
})(Pointer2 || (Pointer2 = {}));
// console.log(Pointer2.Up); // Up
// console.log(Pointer2.Down); // Down
// console.log(Pointer2.Left); // Left
// console.log(Pointer2.Right); // Right
/******************** ENUM END ********************/
/*
 **
 **
 **
 **
 **
 **
 **
 */
/******************** FUNCTION ********************/
const additionFunction = (x, y) => {
    return x + y;
};
const fullName = (name, l_name) => {
    return name + " " + l_name;
};
const greetUser = () => {
    console.log("Hello World");
    // return "Hello World"
};
/******************** FUNCTION END ********************/
/*
 **
 **
 **
 **
 **
 **
 **
 */
/******************** CLASS ********************/
class ClientData {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    full_name() {
        console.log(this.name, " ", this.last_name);
    }
}
// scopes of properties
class UserData {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
    full_name(name, last_name) {
        console.log(name, " ", last_name);
    }
}
class SpecificClient extends ClientData {
    constructor(name, last_name, age, department) {
        super(name, last_name, age);
        this.department = department;
    }
}
const clientData = new SpecificClient("Abdullah", "Jamshed", 22, "Web Developer");
class MyUser {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }
}
class MyUserC extends MyUser {
    constructor(name, last_name, age, dir) {
        super(name, last_name, age);
        this.dir = dir;
    }
    nestedMethod() {
        return "Hello World";
    }
}
const myUserC = new MyUserC("Abdullah", "Jamshed", 22, "Web");
const my_user = (f_name, l_name) => {
    return f_name + " " + l_name;
};
/******************** INTERFACE END ********************/
/*
 **
 **
 **
 **
 **
 **
 **
 */
/******************** GENERIC ********************/
// import axi/os from "../node_modules/axios/index";
const todoData = (items) => {
    const newArray = [...items];
    return newArray;
};
todoData(["Hello", "World"]);
todoData([1, 2, 3]);
// const getUser = async <ApiRes>(url: string): Promise<ApiRes> => {
//   const { data } = await axios.get(url);
//   return data;
// };
const getUser1 = (url) => __awaiter(void 0, void 0, void 0, function* () {
    fetch(url)
        .then((res) => {
        res.json();
    })
        .then((v) => {
        console.log(v);
    });
    return "data";
});
// const A = getUser<ApiRes>("https://jsonplaceholder.typicode.com/users/1").then((v) => console.log(v));
const A = getUser1("https://jsonplaceholder.typicode.com/users/1").then((v) => console.log(v));
// /******************** GENERIC END ********************/
