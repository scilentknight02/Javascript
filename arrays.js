// const myArray = [0, 1, 2, 3, 4, 500, 6, 7, 8, 9, "Norali"];
// console.log(myArray[10])

// // Array Methods

// myArray.push(100)
// myArray.push("kirtan")
// console.log(myArray)
// myarr = myArray.pop()
// console.log(myarr) // To see which array item is popped
// console.log(myArray)

// const arr = [1, 5, 8, 9]
// console.log(arr)
// arr.unshift(60) // unshift method add the data at front of the index and shieft the position of all inserted data
// console.log(arr)
// arr.shift() // shieft method remive data from the front
// console.log(arr)
// console.log()
// console.log()
// console.log(`Result is: ${arr.indexOf(5)}`)
// console.log()
// console.log()
// console.log(arr.includes(5))
// console.log(arr.includes(50))
// console.log(arr.indexOf(5))
// console.log(arr.indexOf(50))

// console.log(arr)
// console.log(arr.join()) // join method binds all array items and represent it in strings form
// var a = console.log(arr.join())
// console.log(typeof(a))

// const marvel_heros = ['thor', 'iranman', 'spiderman']
// const dc_heros = ['superman', 'flash', 'batman']
// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)
// console.log(all_heros[4])

// another trick does same like upper concat operator called spread
// ... called spread whick make each elements of an array individual
// const all_new_heros =  [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


// const another_arr = [1, 2, 3, [4, 5], 6, [7, 8, 9], 10]
// const real_arr = another_arr.flat(Infinity)
// console.log(another_arr)
// console.log(real_arr)


console.log(Array.isArray("Prakash"))
console.log(Array.from("Prakash"))


let s1 = 100
let s2 = 200
let s3 = 300
let ans = console.log(Array.of(s1,s2,s3))
