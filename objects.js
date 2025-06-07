// singleton
// Object.Create

// object literals
const sym = Symbol("Key1");

const JsUser = {
  name: "Prakash",
  "full name": "Prakash Pathak",
  [sym]: "myKey1",
  age: 22,
  location: "kathmandu",
  email: "scilentknight512@gmail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Tuesday", "Friday"],
};
// console.log(JsUser.email); // method 1 to access object
// console.log(JsUser["email"]); // method 2 to access object
// console.log(JsUser["full name"]);
// console.log(JsUser[sym]);
// console.log(typeof JsUser[sym]);

// JsUser.email = "helloworld@gmail.com";
// console.log(JsUser.email);
// Object.freeze(JsUser); // freeze operator make freeze to the object then after cannot made any changes on object values
// // here is the example of freeze where after freeze chage on email does not made.
// JsUser.email = "chatgpr@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting())


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
    console.log(`Hello JS User, ${this["name"]}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
