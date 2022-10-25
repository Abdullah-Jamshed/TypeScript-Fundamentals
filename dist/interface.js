"use strict";
// INTERAFCE
const user_object = {
    name: "Abdullah",
    age: 21,
};
const user_objectOpt = {
    id: "123456",
    name: "Abdullah",
};
const interfaceFuncAdd = (x, y) => {
    return x + y;
};
const interfaceFuncSub = (x, y) => {
    return x - y;
};
const p1 = "Point";
// will not work
// interface Point string | number;
// const p1: Point = "dsad";
