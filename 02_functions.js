// Shopping cart page

function calculateCartPrice(...num1) { // ... operator called rest operator as well as spread operator also
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 1000));

// another example
function calculateCartPrice(val1, val2, ...num1) { // ... operator called rest operator as well as spread operator also
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 1000));


// creating a object called user and passing object into function called handleObject
const user = {
    username: "kali",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

// direct object pass example without creation saparate object like above
handleObject({
    username : "kali",
    price: 299
})


// arrays pass example

const myNewArray = [200, 3000, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([900, 1000, 500])); // direct array passing without creation saparate array
