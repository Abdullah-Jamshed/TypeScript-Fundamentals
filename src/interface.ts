// INTERAFCE

interface User {
  name: string;
  age: number;
}

const user_object: User = {
  name: "Abdullah",
  age: 21,
};

// optional property

interface UserOpt {
  readonly id: string;
  name: string;
  age?: number; // kam ki line
}

const user_objectOpt: UserOpt = {
  id: "123456",
  name: "Abdullah",
};

// user_objectOpt.id = 5  /* will not be updated */

// function with interface

interface MathFunc {
  (x: number, y: number): number;
}

const interfaceFuncAdd: MathFunc = (x: number, y: number) => {
  return x + y;
};
const interfaceFuncSub: MathFunc = (x: number, y: number) => {
  return x - y;
};

// Diff Between TYPE & INTERFACE

type Point = string | number;
const p1: Point = "Point";

// will not work
// interface Point string | number;
// const p1: Point = "dsad";
