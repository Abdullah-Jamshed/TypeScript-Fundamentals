//  DATA TYPES

const first_name_1: string = "Abdullah";
const last_name: string = "Jamshed";
const age_1: number = 21;
const married: boolean = false;
const any_value: any = "true";
const skills: string[] = ["Fullstack Developer", "Frontend Developer", "Backend Developer", "ERPNext", "Data Science", "Data Analitics"];
const contact_numbers: number[] = [923452058899, 9233344777];
const mixed_list: any[] = ["Abdullah", 21];
const nested_array: string[][] = [
  ["list1-item1", "list1-item2"],
  ["list2-item1", "list2-item2"],
];
const nested_array_pattern: [string, string][] = [
  ["list1-item1", "list1-item2"],
  ["list2-item1", "list2-item2"],
];
const nested_array_pattern_2: [string, number][] = [
  ["list1-item1", 21],
  ["list2-item1", 22],
];
// union
const union: string | number = "String Or Number";

// type assertion

// ex:1
let str_1: unknown = "geeksforgeeks";
let len_1: number = (str as string).length;

// ex:2
let num: any = 77;
// Conversion from any to number
let num1 = num as number;
// let num1 = <number> num;

// OBJECTS

const data: {
  name: string;
  age: number;
} = {
  name: "Abdullah",
  age: 21,
};

// object-with-types

type Personal = {
  name: string;
  age: number;
  weight?: string;
};

const data_with_type: Personal = {
  name: "Abdullah",
  age: 21,
};

data_with_type.weight = "70kg";

// FUNCTION

function Addition(a: number, b: number): number {
  return a + b;
}

const addition = (a: number, b: number): number => {
  return a + b;
};

function ConcatString(a: string, b: string): string {
  return a + b;
}

const concat_string = (a: string, b: string): string => {
  return a + b;
};

const greetUsera = (name: string): void | string => {
  if (name.toUpperCase() === "ABDULLAH") {
    return "Hello " + name;
  }
};

interface Student {
  (first_name: string, last_name: string, age: number, married: boolean, skills: string[], contact_number?: number): object;
}

const create_student: Student = (first_name, last_name, age, married, skills, contact_number) => {
  return { first_name, last_name, age, married, skills, contact_number };
};

create_student("Abdullah", "Jamshed", 21, false, ["Fullstack"]);

//  CLASS

class App {
  first_name: string;
  last_name: string;
  constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  full_name(): void {
    console.log(this.first_name, " ", this.last_name);
  }
}
new App("Abdullah", "Jamshed");

interface StudentCL {
  first_name?: string;
  last_name?: string;
  age?: number;
  method?: (name: string) => void;
}

class StudentClass implements StudentCL {
  first_name: string;
  last_name: string;
  age?: number;
  constructor(f_name: string, last_name: string, age: number) {
    this.first_name = f_name;
    this.last_name = last_name;
  }
}

// new StudentClass("name", "last_name", 12)

interface StudentSubClassInterface {
  method_string: (a: string, b: string) => string;
}

class StudentSubClass extends StudentClass implements StudentSubClassInterface {
  department?: string;
  constructor(department_name: string) {
    super(first_name, last_name, age);
    this.department = department_name;
  }

  method_string = (name: string, last_name: string) => {
    console.log(name + " " + last_name);
    return "method_string";
  };
}
const sub_student = new StudentSubClass("dep_name");
// sub_student.method_string("Abdullah","Jamshed")

// ENUM

enum Directions {
  Up,
  Down,
  Left,
  Right,
}

enum DirectionsDes {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(DirectionsDes);

//  GENERICS

const todoDataa = <T>(items: T[]): T[] => {
  const newArray: T[] = [...items];
  return newArray;
};

todoDataa<string>(["Hello", "World"]);
todoDataa<number>([1, 2, 3]);

//  FETCH DATA

// var fetchTodos = (url: string) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);
// };

// fetchTodos("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log("data ==>> ", data);
//   })
//   .catch((error) => {
//     /* show error message */
//   });

var fetchTodos = <ApiRes>(url: string): Promise<ApiRes> => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

var a = fetchTodos<ApiRes>("https://jsonplaceholder.typicode.com/users/1")
  .then((data) => console.log(data))
  .catch((error) => {
    /* show error message */
});

console.log(a);
