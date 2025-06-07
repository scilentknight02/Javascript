// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23) //months start with 0 index in js
// console.log(myCreatedDate.toDateString())

// let nDate = new Date("2025-03-24")
// console.log(nDate.toLocaleString())

// let mytimeStamp = Date.now()
// console.log(mytimeStamp)
// console.log(Math.floor((mytimeStamp)/(1000*60*60)))

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getTime())

let newDate = new Date();

var a = newDate.toLocaleString("default", {
  weekday: "short",
});
console.log(a)
