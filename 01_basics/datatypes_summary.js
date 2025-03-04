// Primitive Data Types 
// (there are almost 7 types of Primitive data types : String, Number, Boolean, Null, Undefined, Symbol, BigInt).

//Non Primitive Data Types also know as Reference Type
// (Array, Objects, Functions).

// Arry we define like this 
const testing = ["Waqar", "Shahab", "Akram"];

// Object define like this.
const myObj = {
    name: "Waqar",
    age: "28",
    city: "Karachi",
}
console.log(myObj)
// Now we define about Functions.
const myFunction = function(){
    console.log("Hello World...")
}
console.log(myFunction())


//**************** Stack and Heap Concept ***********/
// Stack (Primitive datatype) and Heap (Non-Primitive datatype)
// Stack is always copies the variable values into anywhere use.
// Heap is always use Reference base values.

let myFirstName = "Muhammad Waqar"
let myLastName = myFirstName
myLastName = "Akram"
console.log(myFirstName)
console.log(myLastName)

let userOne = {
    name : "Waqar",
    age : 28
}
let userTwo = userOne
userTwo.name = "Waqar akram"

console.log(userOne.name)
console.log(userTwo.name)