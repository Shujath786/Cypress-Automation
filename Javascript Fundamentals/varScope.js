//var - visible at global level, not at function level; value can be reinitialized
var greet = "Afternoon"

if (1 == 1)
{
    var greet = "Brunch" // var is redeclared with a new value here
                         // Even though inside a block, but the block is still outside the function
}
function add(a,b)
{
    var greet = "Morning" // doesn't work since var is defined inside a function block
    return a+b
}
console.log(greet)

//let -visible at global level only and not inside block level; value can be reinitialized
let greet1 = "sunset"
function add1(a,b)
{
    let greet1 = "evening" // variable scope is not visible outside the block
    return a+b
}
console.log(greet1)
//const - value cannot be reinitialized
const greet2 = "Hello"
//var greet2 = "Bonjour" // cannot be redeclared
console.log(greet2)