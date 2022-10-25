const getArr = <T>(items: T[]): T[] => {
  return Array().concat(items);
};

let StringArr = getArr<string>(["Hello World", "Hi There"]);
let NumberArr = getArr<number>([1, 2, 3, 4, 5]);