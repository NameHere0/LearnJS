/**
 * Exercise: Proxy & Reflect
 * Time: 45 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Validation Proxy
 *    - Create a proxy that validates property assignments
 *    - Only allow numbers for 'age', strings for 'name'
 *    - Throw error for invalid assignments
 * 
 * 2. Reactive Object
 *    - Create a reactive object using Proxy
 *    - Track property changes
 *    - Call callbacks when properties change
 * 
 * 3. Reflect API
 *    - Use Reflect for default behavior
 *    - Create a proxy that uses Reflect methods
 */

'use strict';

// === TASK 1: Validation Proxy ===
function createValidatedUser(initialData = {}) {
  const validator = {
    set(obj, prop, value) {
      // Your code here
      // 1. If prop is 'age', only allow numbers >= 0
      // 2. If prop is 'name', only allow strings
      // 3. Use Reflect.set for valid assignments
    }
  };
  
  return new Proxy(initialData, validator);
}


// === TASK 2: Reactive Object ===
function createReactive(obj, onChange) {
  // Your code here
  // 1. Return a Proxy around obj
  // 2. In set trap, call onChange(prop, oldValue, newValue)
  // 3. Track all changes
}


// === TASK 3: Reflect API ===
function demonstrateReflect() {
  const target = { a: 1, b: 2 };
  
  // Reflect.get
  console.log('=== Reflect.get ===');
  // Your code here - use Reflect.get to get properties
  
  // Reflect.set
  console.log('\n=== Reflect.set ===');
  // Your code here - use Reflect.set to set properties
  
  // Reflect.has
  console.log('\n=== Reflect.has ===');
  // Your code here - check if properties exist
  
  // Reflect.ownKeys
  console.log('\n=== Reflect.ownKeys ===');
  // Your code here - get all own keys
  
  // Reflect.deleteProperty
  console.log('\n=== Reflect.deleteProperty ===');
  // Your code here - delete properties
  
  // Proxy with Reflect
  console.log('\n=== Proxy with Reflect ===');
  const proxy = new Proxy(target, {
    get(target, prop) {
      // Your code here - use Reflect.get with default behavior
    },
    set(target, prop, value) {
      // Your code here - use Reflect.set with logging
      console.log(`Setting ${prop} = ${value}`);
    }
  });
}


// Test your code
console.log('=== Task 1: Validation Proxy ===');
const user = createValidatedUser({});
try {
  user.name = 'John';        // Should work
  user.age = 30;            // Should work
  console.log('Valid assignment:', user);
  
  user.age = 'not a number'; // Should throw
} catch (e) {
  console.log('Error:', e.message);
}

console.log('\n=== Task 2: Reactive Object ===');
const state = createReactive(
  { count: 0, message: 'Hello' },
  (prop, oldVal, newVal) => {
    console.log(`${prop} changed: ${oldVal} -> ${newVal}`);
  }
);
state.count = 1;        // Logs change
state.message = 'Hi';   // Logs change
state.count = 2;        // Logs change

console.log('\n=== Task 3: Reflect API ===');
demonstrateReflect();
