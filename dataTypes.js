// data types used in javascript
// number => 2 to power 53
// BigInt
// String => ""
// boolean => true/false
// null => standalone value
// symbol => unique
// undefined

// "use strict"; //treat all JS code as newer version

let name = "Prakash";
let age = 22;
let isLoggedIn = true;
let k;

// console.log(name);
console.table([name, age, isLoggedIn]);

// console.log(typeof age);
// console.log(typeof null);
// console.log(typeof k);

let id = Symbol("123");
let anotherId = Symbol("123");
// console.log(id === anotherId);

const BigInt = 36987445588588758885n;
// console.log(BigInt);
// console.log(typeof BigInt);

/*
Data Types in Javascript

# premitive data type
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

# Non-premitive (Reference) data type
3 types: Array, Objects, Functions
*/

// Array
const heros = ["Tony Stark", "Captain America", "The Hulk"];
// console.log(heros);

// Object

let myObj = {
  name: "Tony Stark",
  age: 50,
  address: "America",
};
// console.log(myObj);

// Function

const myFunction = function () {
  // console.log("Hello World!");
};
// console.log(typeof myFunction);
// console.log(typeof myFunction);

// Stack and Heap memory in javascript
// Notes: stack memory used in all premitive data type and heap memory is used in all non-premitive data type
// stack (premitive), heap (non=premitive)

let myName = "prakash pathak";
let newName = myName;
newName = "manoj kc";
// changes happen on a copy of the file in stack (premitive data types: Number, BigInt, Symbol, String, Symbol, null, undefined)

console.log(myName);
console.log(newName);

let userOne = {
  email: "user@gmail.com",
  age: 20,
};

let userTwo = userOne;

userTwo.email = "prakash@gmail.com";
// changes happen on an original value of the file in heap (non premitive data types: Array, objects, function)

console.log(userOne.email);
console.log(userTwo.email);

// Notes: stacks gives copy and heap gives reference
