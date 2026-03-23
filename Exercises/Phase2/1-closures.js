/**
 * Exercise: Closures & Scope
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Counter with Closure
 *    - Create a function createCounter()
 *    - It should return an object with:
 *      - increment() - increases count by 1
 *      - decrement() - decreases count by 1
 *      - reset() - resets count to 0
 *      - getCount() - returns current count
 * 
 * 2. Unique ID Generator
 *    - Create a function createIdGenerator(prefix)
 *    - Each call to generate() should return a unique ID
 *    - Format: "prefix-1", "prefix-2", etc.
 *    - Must maintain state between calls
 * 
 * 3. var vs let in Loops
 *    - Explain and demonstrate the difference
 *    - Create a function that shows why let is better for loops
 *    - Show the classic closure-in-loop problem and fix
 */

'use strict';

// === TASK 1: Counter with Closure ===
function createCounter() {
  // Your code here
}


// === TASK 2: Unique ID Generator ===
function createIdGenerator(prefix) {
  // Your code here
}


// === TASK 3: var vs let in Loops ===
function demonstrateScope() {
  console.log("=== Problem with var in loops ===");
  // Show the problem: var creates shared reference
  const varFunctions = [];
  for (var i = 0; i < 3; i++) {
    varFunctions.push(function() { return i; });
  }
  console.log("Using var - all functions return:", varFunctions.map(f => f()));
  
  // Fix with let
  const letFunctions = [];
  // Your code here - fix the issue
  
  return { varFunctions, letFunctions };
}


// Test your code
console.log("=== Counter Test ===");
const counter = createCounter();
console.log(counter.getCount());  // 0
counter.increment();
counter.increment();
console.log(counter.getCount());  // 2
counter.decrement();
console.log(counter.getCount());  // 1
counter.reset();
console.log(counter.getCount());  // 0

console.log("\n=== ID Generator Test ===");
const userIdGen = createIdGenerator("user");
console.log(userIdGen.generate());  // "user-1"
console.log(userIdGen.generate());  // "user-2"
console.log(userIdGen.generate());  // "user-3"

const postIdGen = createIdGenerator("post");
console.log(postIdGen.generate());  // "post-1"
console.log(postIdGen.generate());  // "post-2"

console.log("\n=== Scope Demonstration ===");
demonstrateScope();
