const score = 39 
// console.log(score)

const newScore = new Number (100)
// console.log(newScore)

// console.log(newScore.toString().length)
// toFixed is used for after . values show like 100.00
// console.log(newScore.toFixed(2))
// toPrecision is used for round of number
const NewNumber = 1001.893
// console.log(NewNumber.toPrecision(4))

// this is used for comma according to international law
const mathValue = 1000000
// console.log(mathValue.toLocaleString())
// if you want to use according to India currency rule
// console.log(mathValue.toLocaleString('en-IN'))
// Arabic in most Arabic speaking countries uses Eastern Arabic digits
// console.log(mathValue.toLocaleString('ar-EG'))


// ###########   Math ################
const examp = 10.6
console.log(Math.E)
// round this vlaues 
console.log(Math.round(examp))
// floor is always use lower value
console.log(Math.floor(examp))
// ceil function is used upper value always.
console.log(Math.ceil(examp))
// sqrt is used for square root
console.log(Math.sqrt(256))

console.log(Math.max(4,33,23,34,55,35))
console.log(Math.min(4,33,23,34,55,35))
// always generate random number 
console.log(Math.random())
console.log((Math.random()*10) + 1)