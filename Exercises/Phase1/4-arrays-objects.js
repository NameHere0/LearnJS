/**
 * Exercise: Arrays & Objects
 * Time: 45 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Fruit Array Operations
 *    - Create an array with 5 fruits
 *    - Add a fruit to the beginning and end
 *    - Remove the first and last fruit
 *    - Log the final array
 * 
 * 2. Person Object
 *    - Create an object representing a person with:
 *      - name (string)
 *      - age (number)
 *      - hobbies (array of strings)
 *      - address (object with street, city, country)
 *    - Add a method introduce() that returns a greeting
 * 
 * 3. Nested Object Access
 *    - Access and modify nested properties
 *    - Add a new property to the address
 *    - Update the person's age
 */

'use strict';

// === TASK 1: Fruit Array Operations ===
function arrayOperations() {
  const fruits = [];  // Start with 5 fruits
  
  // Your code here
  
  return fruits;
}


// === TASK 2: Person Object ===
function createPerson(name, age, hobbies, address) {
  // Create and return a person object with the introduce method
  
  // Your code here
}


// === TASK 3: Nested Object Access ===
function nestedObjectDemo() {
  const person = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    }
  };
  
  // 1. Add 'street' property to address
  // 2. Update age to 31
  // 3. Add 'zipCode' to address
  
  // Your code here
  
  return person;
}


// Test your code
console.log("=== Array Operations ===");
console.log(arrayOperations());

console.log("\n=== Person Object ===");
const person = createPerson(
  "Alice",
  28,
  ["reading", "coding"],
  { city: "San Francisco", country: "USA" }
);
console.log(person.introduce());

console.log("\n=== Nested Object ===");
const updated = nestedObjectDemo();
console.log(updated);
