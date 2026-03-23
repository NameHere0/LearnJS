/**
 * Exercise: Modules
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Create a utilities module with:
 *    - formatDate(date) function
 *    - capitalize(str) function
 *    - generateId() function
 *    - Export all as named exports
 * 
 * 2. Create a default export module:
 *    - A Calculator class with add, subtract, multiply, divide
 *    - Export as default
 * 
 * 3. Build a mini library:
 *    - Import from utilities and calculator
 *    - Use them together in main.js
 * 
 * Run with: node --experimental-modules main.js
 * Or use .mjs extension
 */

'use strict';

// === TASK 1: utils.js ===
// Create this file with named exports
// Export: formatDate, capitalize, generateId


// === TASK 2: calculator.js ===
// Create this file with default export
// Class Calculator with methods: add, subtract, multiply, divide


// === TASK 3: main.js ===
// Import and use the modules
async function runMain() {
  // Your code here
  // 1. Import formatDate, capitalize, generateId from utils
  // 2. Import Calculator from calculator
  // 3. Use them together
  
  // Example usage:
  // const id = generateId();
  // const formatted = formatDate(new Date());
  // const caps = capitalize('hello world');
  // const calc = new Calculator();
  // const result = calc.add(10, 5);
  
  // console.log({ id, formatted, caps, result });
}

// For Node.js module syntax
// Uncomment when files are created:
// import { formatDate, capitalize, generateId } from './utils.js';
// import Calculator from './calculator.js';

console.log('Module exercise - create the files and import them');
