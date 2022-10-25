/******************** TYPES ********************/

const firstName: string = "Abdullah";
const ageInYear: number = 22;
const skillsArrString: string[] = ["React", "NodeJS", "Express"];
const skillsArrNumber: number[] = [1, 2, 3];
const booleanValue: boolean = true;
const anyValue: any = "true";
const skillsArrAny: any[] = [true, 1, 2, 3];
const tupleInfo: [string, number] = ["Hello World", 22];
const tupleInfoArr: [string, number][] = [
  ["Hello World", 22],
  ["Hello World", 22],
];

// union
const unionType: string | boolean = true;

// TYPE ASSERTION
let uid: any = "f5c45w24";
let customerUID = <string>uid;
/* ==OR== */
// let customerUID = uid as number



// Example 1: Type assertion using syntax
// In this example, we give assign the ‘geeksforgeeks’ string to a variable
// of type unknown. We further assign the value of the string to another variable 
// and calculate the length of the string. In the below code we have asserted that
// str is of type number by using the “as” keyword. 

let str: unknown = "geeksforgeeks";
console.log(str);
  
let len: number = (str as string).length;
console.log(len);

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

const objectType: {
  name: string;
  age: number;
  weight?: string;
} = {
  name: "Abdullah",
  age: 22,
};

objectType.weight = "70kg";

// type

type ObjectType = {
  name: string;
  age: 22;
  weight?: string;
};

const objectType2: ObjectType = {
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

enum Pointer1 {
  Up,
  Down,
  Left,
  Right,
}

// console.log(Pointer1.Up); // 0
// console.log(Pointer1.Down); // 1
// console.log(Pointer1.Left); // 2
// console.log(Pointer1.Right); // 3

enum Pointer2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
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

const additionFunction = (x: number, y: number): number => {
  return x + y;
};

const fullName = (name: string, l_name: string): string => {
  return name + " " + l_name;
};

const greetUser = (): void | string => {
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
  name: string;
  last_name: string;
  age: number;
  constructor(name: string, last_name: string, age: number) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }

  full_name(): void {
    console.log(this.name, " ", this.last_name);
  }

  // full_name(name: string, last_name: string): void {
  //   console.log(name, " ", last_name);
  // }
}

// scopes of properties

class UserData {
  name: string;
  last_name: string;
  age: number;
  private pvt_property?: string; // accessible with in the class only
  protected pro_property?: string; // accessible with in the class and child class
  public pub_property?: string; // default read/write from any where
  constructor(name: string, last_name: string, age: number) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }

  full_name(name: string, last_name: string): void {
    console.log(name, " ", last_name);
  }
}

class SpecificClient extends ClientData {
  department: string;
  constructor(name: string, last_name: string, age: number, department: string) {
    super(name, last_name, age);
    this.department = department;
  }
}

const clientData = new SpecificClient("Abdullah", "Jamshed", 22, "Web Developer");
// clientData.full_name()

/******************** CLASS END ********************/

/*
 **
 **
 **
 **
 **
 **
 **
 */

/******************** INTERFACE ********************/

// interaface for class
interface Client {
  name: string;
  last_name: string;
  age: number;
  add?: (x: number, y: number) => number;
}

class MyUser implements Client {
  name: string;
  last_name: string;
  age: number;
  constructor(name: string, last_name: string, age: number) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
  }
}

// interaface for class
interface ClientNested {
  dir: string;
  nestedMethod?: () => string;
}

class MyUserC extends MyUser implements ClientNested {
  dir: string;

  constructor(name: string, last_name: string, age: number, dir: string) {
    super(name, last_name, age);
    this.dir = dir;
  }

  nestedMethod() {
    return "Hello World";
  }
}

const myUserC = new MyUserC("Abdullah", "Jamshed", 22, "Web");
// console.log(myUserC.nestedMethod());

// interaface for function

interface Func {
  (f_name: string, l_name: string): string;
}

const my_user: Func = (f_name, l_name) => {
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

// import axios from "../node_modules/axios/index";

const todoData = <T>(items: T[]): T[] => {
  const newArray: T[] = [...items];
  return newArray;
};

todoData<string>(["Hello", "World"]);
todoData<number>([1, 2, 3]);

interface Ac {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface ApiRes {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Ac;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// const getUser = async <ApiRes>(url: string): Promise<ApiRes> => {
//   const { data } = await axios.get(url);
//   return data;
// };

const getUser1 = async (url: string): Promise<string> => {
  fetch(url)
    .then((res) => {
      res.json();
    })
    .then((v) => {
      console.log(v);
    });
  return "data";
};

// const A = getUser<ApiRes>("https://jsonplaceholder.typicode.com/users/1").then((v) => console.log(v));
const A = getUser1("https://jsonplaceholder.typicode.com/todos/1").then((v) => console.log(v));

// /******************** GENERIC END ********************/
