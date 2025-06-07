// function scope
// global and local scope in javascript

// var global scope can be redeclare and update 

let a = 300
if (true) {
  let a = 10;
  const b = 20; // 
  var c = 30; // global scope var has a issue which accessible everywhere
  console.log("INNER: ", a); // block scope
  
}

console.log(a) // global scope
// console.log(b)
// console.log(c)


