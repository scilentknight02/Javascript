// function SayMyName() {
//   console.log("P");
//   console.log("R");
//   console.log("A");
//   console.log("K");
//   console.log("A");
//   console.log("S");
//   console.log("H");
// }
// SayMyName()

// function addTwoNum(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNum(number1, number2){
    // let result  = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNum(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username===undefined){
        console.log(`Please enter the username`)
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kali"));
// console.log(loginUserMessage()); // return username = undefined if we do not pass argument

function logedinUser(username = "Sam"){ // Sam is a default value if user doesnot pass any value
    if(!undefined){ // !usdefined because undefined return always false value so i use ! symbol (if undefined sanga tru xa vane execute Please enter a username)
        console.log("Please enter a username!");
    }
    return `${username} just logged in.`
}
// console.log(logedinUser("prakash"));
console.log(logedinUser(""));