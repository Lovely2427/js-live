//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//********************************************************************************MEMORY

let myName = ""



// Reference (Non primitive)

// Array, Objects, Functions - have return datatype is object

const heros = ["shaktiman", "naagraj", "doga"];  //syntax of array
let myObj = {
    name: "hitesh",
    age: 22,
}  // syntax of object

const myFunction = function(){
    console.log("Hello world");
} //syntax of function

console.log(typeof anotherId);
