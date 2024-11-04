//Chapter 1.01 - This is a one line comment!

/* This is a multi-line comment
variables  - var, let, const
data types - string, number, boolean, null, undefined, symbol, object
Everything inside paranthesis is an expression/object
*/

//Operators: = + - * / % ** 
let d = 20;  
let e = 5;

console.log(d + e)
console.log(d - e)
console.log(d * e)
console.log(d ** e) //To the power of: Exponentiation 
console.log(d / e)
console.log(d % e) //Prints the Quotient: Modulus


//Unary Operators 
let f = 5 
let g = 10

console.log(f++) //post-increment - Increased the value of a2 after printing
console.log(g--) //post-decrement - Decreased the value of b2 after printing
console.log(++f) //pre-increment - Increased the value of a2 before printing
console.log(--g) //pre-decrement - Decreased the value of b2 before printing


//Assignment Operators: = += -= *= %= **=
let h = 11

console.log(h += 2) // also means h = h + 2
console.log(h -= 2) // also means h = h - 2
console.log(h *= 2) // also means h = h * 2
console.log(h /= 2) // also means h = h / 2
console.log(h **= 2) // also means h = h ** 2 : Expo or to the power. 


//Comparison Operators: Equal to:== Equal to & Type:=== Not equal to:!= Not equal to &type: !== 
let i = 12
let j = 14
let k = '12'

console.log(i === j)
console.log(i !== j)
console.log(i == k)


//Continuted Comparison Operators: greater then >, greater then equal to >=, less than <= and <=.  
console.log( i < 14)
console.log(i <= 14)
console.log(j > i)
console.log(j >= i)


//Logical Operators: Evaluate Multiple expressions and results true or false
//Logical AND &&: Only if all the values are true
let l = 20
let m = 30

console.log(l < m && l !== m)

//Logical OR ||: If any condition or case is true
let n = 20
let o = 30

console.log(n > o || n == o)

//Logical NOT !: If operand is ture its boolean value will be false and vice versa. 
let p = 32

console.log(!(p < 30))


// Conditional Statements;
//if statement
let age = 18 //[Change this value to print console.log]

if (age > 18) {
  console.log("You are eligible for full drivers license.")
} 
if (age < 18) {
  console.log("You can apply for your learners permit.")
}


// if-else statement
let number = 2

if (number > 2) {
  console.log("You are eligible for 20% discount.")
}else {
  console.log("More than 3 items qualify for 20% discount.")
}

let int = 2

if (int%2 === 0){
  console.log("Even")
}else{
  console.log("Odd")
}

//else-if statement
let range = 100

if (range <= 20) {
  console.log("You are a kid.")
}else if(range >=20){
  console.log("You are an adult")
}else{
  console.log("You are a senior citizen.")
}
