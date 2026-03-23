/**
 * Exercise: Error Handling
 * Time: 45 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Basic try/catch
 *    - Write a function that parses JSON and handles errors
 *    - Return the parsed object or a default value on error
 * 
 * 2. Custom Error Class
 *    - Create a ValidationError class that extends Error
 *    - Include a statusCode property
 *    - Create a function that throws it for invalid input
 * 
 * 3. Async Error Handling
 *    - Write an async function that fetches data and handles errors
 *    - Handle network errors, 404s, and parse errors differently
 * 
 * 4. Input Validation
 *    - Create a function validateUser(user) that:
 *      - Checks if name is provided and non-empty
 *      - Checks if email is valid format
 *      - Checks if age is a number between 0 and 150
 *      - Throws appropriate custom errors
 */

'use strict';

// === TASK 1: Basic try/catch ===
function safeJsonParse(jsonString) {
  // Try to parse JSON
  // If error, return default value: { error: true, message: "Invalid JSON" }
  // Your code here
}

// Test
console.log(safeJsonParse('{"valid": true}'));        // { valid: true }
console.log(safeJsonParse('not json at all'));       // { error: true, message: "Invalid JSON" }
console.log(safeJsonParse('{"broken": }'));          // { error: true, message: "Invalid JSON" }


// === TASK 2: Custom Error Class ===
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.statusCode = 400;
  }
}

function validateAge(age) {
  // Throw ValidationError if age is not a number or < 0 or > 150
  // Your code here
}


// === TASK 3: Async Error Handling ===
async function fetchData(url) {
  // Fetch from URL
  // Handle different error types:
  // - Network errors
  // - Non-200 status codes (throw specific error for 404)
  // - Invalid JSON response
  // Return the parsed data or throw appropriate error
  // Your code here
}


// === TASK 4: Input Validation ===
function validateUser(user) {
  // Validate:
  // 1. name: required, non-empty string
  // 2. email: required, valid email format (contains @ and .)
  // 3. age: required, number between 0 and 150
  
  // Throw ValidationError with field name for each failure
  
  // Your code here
  
  return true;  // Validation passed
}


// Test validation
try {
  validateUser({ name: '', email: 'test@test.com', age: 25 });
} catch (e) {
  console.log(e.name + ':', e.message, '(field: ' + e.field + ')');
}

try {
  validateUser({ name: 'John', email: 'invalid', age: 25 });
} catch (e) {
  console.log(e.name + ':', e.message, '(field: ' + e.field + ')');
}

try {
  validateUser({ name: 'John', email: 'test@test.com', age: 200 });
} catch (e) {
  console.log(e.name + ':', e.message, '(field: ' + e.field + ')');
}

try {
  validateUser({ name: 'John', email: 'test@test.com', age: 25 });
  console.log('Validation passed!');
} catch (e) {
  console.log('Validation failed:', e.message);
}
