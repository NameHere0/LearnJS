/**
 * Exercise: ES6+ Features
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Destructuring
 *    - Destructure an array to get first, second, and rest elements
 *    - Destructure an object to extract specific properties
 *    - Use destructuring in function parameters
 *    - Destructure with rename
 * 
 * 2. Spread Operator
 *    - Merge two arrays using spread
 *    - Merge two objects using spread
 *    - Clone an array and object (not reference)
 *    - Use spread in function arguments
 * 
 * 3. Template Literals
 *    - Create an HTML template function that generates:
 *      - Card HTML with title, description, and image
 *      - List HTML from an array of items
 *      - Table row HTML with dynamic data
 */

'use strict';

// Sample data for exercises
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const person = { name: 'John', age: 30, city: 'New York', job: 'Developer' };


// === TASK 1: Destructuring ===
function destructuringDemo() {
  // Array destructuring - get first two and rest
  // const [first, second, ...rest] = colors;
  // console.log(first, second, rest);
  
  // Object destructuring - extract name and age
  // const { name, age } = person;
  // console.log(name, age);
  
  // Destructure with rename
  // const { name: personName } = person;
  
  // Destructure with default values
  // const { country = 'Unknown' } = person;
  
  // Your code here - experiment with all forms
  
  return { first: null, second: null, rest: null, personName: null };
}


// === TASK 2: Spread Operator ===
function spreadDemo() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  
  // 1. Merge arrays
  // const mergedArray = ;
  
  // 2. Clone array (not reference)
  // const clonedArray = ;
  
  // 3. Merge objects
  // const mergedObject = ;
  
  // 4. Clone object
  // const clonedObject = ;
  
  // 5. Use spread in function call
  const numbers = [1, 2, 3, 4, 5];
  // const max = Math.max(...numbers);
  
  // Your code here
  
  return { mergedArray: [], clonedArray: [], mergedObject: {}, clonedObject: {} };
}


// === TASK 3: Template Literals ===
function createCard(title, description, imageUrl) {
  // Return HTML string using template literal
  // Your code here
}

function createList(items) {
  // Return HTML string with <ul><li> for each item
  // Your code here
}

function createTableRow(columns) {
  // Return HTML string with <tr><td> for each column
  // Your code here
}


// Test your code
console.log("=== Destructuring ===");
console.log(destructuringDemo());

console.log("\n=== Spread ===");
console.log(spreadDemo());

console.log("\n=== Template Literals ===");
console.log(createCard('Welcome', 'This is a card', 'https://example.com/image.jpg'));
console.log(createList(['Item 1', 'Item 2', 'Item 3']));
console.log(createTableRow(['Col 1', 'Col 2', 'Col 3']));
