/**
 * Exercise: Variables & Data Types
 * Time: 30 minutes
 *
 * Complete the following tasks:
 *
 * 1. Create variables using var, let, and const
 *    - Declare a variable with var and reassign it
 *    - Declare a variable with let and reassign it
 *    - Declare a variable with const and explain why it cannot be reassigned
 *
 * 2. Use typeof to check the types of different values
 *    - Check: string, number, boolean, undefined, null, object, array, function
 *    - Log each type to the console
 *
 * 3. Convert between types
 *    - Convert string "123" to number
 *    - Convert number 456 to string
 *    - Convert string "hello" to boolean (and explain the result)
 *    - Convert empty string "" to boolean (and explain the result)
 */

"use strict";

// === TASK 1: Variables ===
// Declare your variables below:
var integer;
integer = 5;

let intege;
intege = 1;

const integ = 0; // constant

// === TASK 2: Type Checking ===
// Use typeof to check types:
typeof integer;

// === TASK 3: Type Conversion ===
// Convert between types:

let int = 5;
let string = "1";

console.log(String(integer));
console.log(Number(string));
console.log(Boolean("Hello")); // True - is not empty
console.log(Boolean("")); // False - is empty

// COMPLETE
