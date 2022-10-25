//  DATA TYPES

let first_name: string = "Abdullah";
let age: number = 21;
let cool: any = true;
let career: string[] = ["Software Engineer", "Data Scientist"];
let arr: any[] = [true, 123, "abc"];
let tuple: [number, string] = [1, "Software Engineer"];
let tuple_arr: [number, string][] = [
  [1, "Software Engineer"],
  [2, "Data Scientist"],
];

// TYPE ASSERTION
let cid: any = "Abdullah";
let customerId = <number>cid;
//              OR
// let customerId:  = cid as number

//  UNIONS

let pid: string | number = 123456;