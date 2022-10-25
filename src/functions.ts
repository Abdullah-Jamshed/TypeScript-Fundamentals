// FUNCTION

function addNumber(x: number, y: number): number {
  return x + y;
}

// void

function message(message: string | number): void {
  console.log(message);
}
message("Hello World");

// function with interface

interface MathFunc {
  (x: number, y: number): number;
}

const interfaceFuncAdd1: MathFunc = (x, y) => {
  return x + y;
};
const interfaceFuncSub1: MathFunc = (x: number, y: number) => {
  return x - y;
};
