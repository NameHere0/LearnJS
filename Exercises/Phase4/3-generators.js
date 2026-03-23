/**
 * Exercise: Generators & Iterators
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Fibonacci Generator
 *    - Create a generator function that yields Fibonacci numbers
 *    - fibonacci() -> 0, 1, 1, 2, 3, 5, 8, ...
 * 
 * 2. Custom Iterator (Linked List)
 *    - Create a linked list class
 *    - Implement Symbol.iterator for for...of support
 *    - Iterate through all nodes
 * 
 * 3. Infinite Sequence
 *    - Create an infinite number generator
 *    - Use it with for...of (with break)
 *    - Demonstrate next(), return(), throw()
 */

'use strict';

// === TASK 1: Fibonacci Generator ===
function* fibonacci() {
  // Your code here
  // Yield 0, then 1, then sum of previous two
  // 0, 1, 1, 2, 3, 5, 8, 13, ...
}


// === TASK 2: Linked List Iterator ===
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  
  // Your code here - add Symbol.iterator
  // Should yield each node's value
}

// Make LinkedList iterable
LinkedList.prototype[Symbol.iterator] = function() {
  // Your code here
  // Return an iterator object with next()
};


// === TASK 3: Generator Control ===
function* infiniteCounter() {
  let i = 0;
  while (true) {
    try {
      yield i++;
    } catch (e) {
      console.log('Caught error:', e.message);
      yield 'resumed';
    }
  }
}

function demonstrateGeneratorControl() {
  const counter = infiniteCounter();
  
  console.log('=== Basic iteration ===');
  // Your code here - use next() a few times
  
  console.log('\n=== With return() ===');
  // Your code here - use return() to stop generator
  
  console.log('\n=== With throw() ===');
  // Your code here - use throw() to throw into generator
}


// Test your code
console.log('=== Task 1: Fibonacci ===');
const fib = fibonacci();
console.log(fib.next().value);  // 0
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 1
console.log(fib.next().value);  // 2

// Use in for...of
console.log('\nFibonacci sequence (first 10):');
for (const num of fibonacci()) {
  if (num > 55) break;
  console.log(num);
}

console.log('\n=== Task 2: Linked List ===');
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);

for (const value of list) {
  console.log(value);  // 1, 2, 3
}

console.log('\n=== Task 3: Generator Control ===');
demonstrateGeneratorControl();
