const name = "      scilent knight       ";
const age = 22;

console.log(name + age + " years old.");
// instade of upper line we can use a new method like this
console.log(`Hello my name is ${name}and my age is ${age}.`);
console.log(name.length);
console.log(name.toUpperCase());
let b = name.trim();
console.log(b.length);
console.log(b);

// console.log(name.trim());

let gameName = "Football";
console.log(gameName.charAt(3));
console.log(gameName.indexOf("b"));
console.log(gameName.lastIndexOf("o"));

console.log(gameName.slice(0, 5));

let str = "My name is prakash pathak i love to code in javascript.";
let split = str.split(" ");
console.log(str);
console.log(split);

var namee = "Hritesh";
var kt = 50;
// console.log(`my name is ${namee.toUpperCase()} and my age is ${kt.length}.`);
a = kt.toString().length;
console.log("length is " + a);
// gameName = "hitesh"
const gameNames = new String("Hitesh");
console.log(gameNames)
