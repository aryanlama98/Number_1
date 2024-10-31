//Chapter 1.01 - This is a one line comment!

/* This is a multi-line comment
variables  - var, let, const
data types - string, number, boolean, null, undefined, symbol, object
Everything inside paranthesis is an expression/object
*/

let a = "Aryan"
let b = 6
console.log(a + b)

//Chapter 1.02
console.log(typeof (a + b))

//Operators: = + - * / % ** ++ -- += -= *= /= %= **=
let d = 20;  
let e = 5;
console.log(d + e)
console.log(d - e)
console.log(d * e)
console.log(d ** e) //To the power of
console.log(d / e)
console.log(d % e) //Prints the Quotient

let c = 4
console.log(c += 2)

let f = 5
let g = 10

//Arithmetic Operators 
console.log(f++) //post-increment - Increased the value of a2 after printing
console.log(g--) //post-decrement - Decreased the value of b2 after printing
console.log(+f) //pre-increment - Increased the value of a2 before printing
console.log(--g) //pre-decrement - Decreased the value of b2 before printing

//Assignment Operators: = += -= *= %= **=
let h = 11
console.log(h += 2)
console.log(h -= 2)
console.log(h *= 2)

//Comparison Operators: Equal to:== Equal to & Type:=== Not equal to:!= Not equal to &type: !== 
let i = 12
let j = 14
let k = '12'

if (i === k) {
  console.log('i and k are strictly equal')
} else {
  console.log('i and k are not strictly equal')
}

if (i !== j) {
  console.log('i and j are not strcitly equal')
} else{
  console.log('i and j are strictly equal')
}

//Chapter 1.04
const dict = {
  appreciate: "recognize the full worth of",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work",
}
console.log(dict.appreciate)

//Expressions: Every value written in the code is expression.
//77;"Aryan"; false;


