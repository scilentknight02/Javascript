// data types used in javascript
// number => 2 to power 53
// BigInt
// String => ""
// boolean => true/false
// null => standalone value
// symbol => unique

// "use strict"; //treat all JS code as newer version

let name = "Prakash";
let age = 22;
let isLoggedIn = true;
let k;

console.log(name);
console.table([name, age, isLoggedIn]);

console.log(typeof age);
console.log(typeof null);
console.log(typeof k);

let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id === anotherId);

const BigInt = 36987445588588758885n;
console.log(BigInt);
console.log(typeof BigInt);

/*
Data Types in Javascript

# premitive data type
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

# Non-premitive data type
3 types: Array, Objects, Functions
*/

// Array
const heros = ["Tony Stark", "Captain America", "The Hulk"];
console.log(heros);

// Object

let myObj = {
  name: "Tony Stark",
  age: 50,
  address: "America",
};
console.log(myObj);

// Finction

const myFunction = function () {
  console.log("Hello World!");
};
console.log(typeof myFunction);
console.log(typeof myFunction);
