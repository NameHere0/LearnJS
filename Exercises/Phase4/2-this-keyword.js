/**
 * Exercise: The 'this' Keyword
 * Time: 45 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. 'this' in Different Contexts
 *    - Demonstrate 'this' in: global, object method, function, arrow function
 *    - Log the value of 'this' in each context
 * 
 * 2. bind, call, and apply
 *    - Create a function that uses 'this'
 *    - Use .bind() to set 'this' permanently
 *    - Use .call() to invoke with different 'this'
 *    - Use .apply() to invoke with array arguments
 * 
 * 3. Fix 'this' in Callbacks
 *    - Common problem: 'this' is lost in callbacks
 *    - Fix using: arrow function, bind, self/that variable
 */

'use strict';

// === TASK 1: 'this' in Different Contexts ===
function demonstrateThis() {
  console.log('=== Global this ===');
  // Your code here - log this in global scope
  
  const obj = {
    name: 'John',
    regularMethod() {
      console.log('=== Regular Method this ===');
      // Your code here - log this inside method
    },
    arrowMethod: () => {
      console.log('=== Arrow Method this ===');
      // Your code here - log this inside arrow method
    }
  };
  
  obj.regularMethod();
  obj.arrowMethod();
  
  console.log('=== Function this ===');
  function regularFunction() {
    // Your code here - log this in function
  }
  regularFunction();
}


// === TASK 2: bind, call, and apply ===
function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

function demonstrateBinding() {
  const person = { name: 'Alice' };
  
  console.log('=== Using call ===');
  // Your code here - use call to set this to person
  
  console.log('=== Using apply ===');
  // Your code here - use apply with array of arguments
  
  console.log('=== Using bind ===');
  // Your code here - create bound function and call it later
}


// === TASK 3: Fix 'this' in Callbacks ===
class Counter {
  constructor() {
    this.count = 0;
    
    // Problem: 'this' is lost in callback
    // Your code here - show the problem
    // document.getElementById('btn')?.addEventListener('click', function() {
    //   this.count++;  // 'this' is not Counter!
    // });
    
    // Solution 1: Arrow function (inherits 'this')
    // document.getElementById('btn')?.addEventListener('click', () => {
    //   this.count++;  // 'this' is Counter
    // });
    
    // Solution 2: Bind
    // document.getElementById('btn')?.addEventListener('click', function() {
    //   this.count++;
    // }.bind(this));
    
    // Solution 3: Store reference
    // const self = this;
    // document.getElementById('btn')?.addEventListener('click', function() {
    //   self.count++;
    // });
  }
}


// === TASK 4: Practical Example ===
class Timer {
  constructor() {
    this.seconds = 0;
    this.interval = null;
  }
  
  start() {
    // Your code here - start interval
    // Use arrow function to preserve 'this'
    
    // setInterval(() => {
    //   this.seconds++;
    //   console.log(this.seconds);
    // }, 1000);
  }
  
  stop() {
    // Your code here - stop interval
  }
  
  reset() {
    // Your code here - reset seconds
  }
}


// Test your code
console.log('=== Task 1: Demonstrate this ===');
demonstrateThis();

console.log('\n=== Task 2: Bind, Call, Apply ===');
demonstrateBinding();

console.log('\nNote: Task 3 requires browser for full testing');
