/**
 * Exercise: Functions
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Factorial (Recursion)
 *    - Write a function factorial(n) that calculates n! using recursion
 *    - factorial(5) should return 120
 *    - factorial(0) should return 1
 * 
 * 2. Arrow Function - Full Name
 *    - Create an arrow function getFullName(firstName, lastName)
 *    - Return the full name with a space between
 *    - Handle edge cases (empty strings, extra spaces)
 * 
 * 3. Default Parameters
 *    - Write a function greet(name, greeting = "Hello")
 *    - Should return "Hello, [name]!" by default
 *    - If greeting is provided, use it instead
 */

'use strict';

// === TASK 1: Recursive Factorial ===
function factorial(n) {
  // Your code here
}


// === TASK 2: Arrow Function for Full Name ===
const getFullName = (firstName, lastName) => {
  // Your code here
};


// === TASK 3: Default Parameters ===
function greet(name, greeting) {
  // Your code here
}


// Test your functions
console.log(factorial(5));        // 120
console.log(factorial(0));        // 1
console.log(factorial(10));       // 3628800

console.log(getFullName("John", "Doe"));        // "John Doe"
console.log(getFullName("Jane", "Smith"));      // "Jane Smith"

console.log(greet("World"));                    // "Hello, World!"
console.log(greet("Alice", "Hi"));              // "Hi, Alice!"
console.log(greet());                           // "Hello, undefined!"
