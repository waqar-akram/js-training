const accountId = 54545
let accountEmail = "3dwaqarakram@gmail.com"
var accountPassword = "112233"
accountCity = "Karachi"

// accountId = 22345 // this is not possible to change variable values 
accountEmail ="vicky@gmail.com" // yes you can change this Let variable values 
accountPassword = "999999" // Yes also you can change this Var variable values.
accountCity = "Attock" // Yes you can change this variable values 

/*
Prefer not to use Var keyword
because of issue in block scope and functional scope
*/

console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity]);