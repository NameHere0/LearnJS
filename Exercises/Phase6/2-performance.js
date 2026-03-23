/**
 * Exercise: Performance Optimization
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Optimize Slow Array Operation
 *    - Find performance bottleneck
 *    - Use more efficient methods
 *    - Compare performance
 * 
 * 2. Implement Memoization
 *    - Create memoize function
 *    - Use it for expensive calculations
 *    - Clear cache when needed
 * 
 * 3. Measure Performance
 *    - Use performance.now()
 *    - Measure execution time
 *    - Use Web Vitals (browser)
 */

'use strict';

// === TASK 1: Optimize Array Operations ===
function slowOperation() {
  const arr = Array.from({ length: 10000 }, (_, i) => i);
  let result = [];
  
  // Slow: nested loops
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 100) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  
  return result;
}

function optimizedOperation() {
  const arr = Array.from({ length: 10000 }, (_, i) => i);
  
  // Your code here
  // Use Set for O(1) lookup instead of O(n) nested loop
  // Find pairs that sum to 100
  
  return [];
}


// === TASK 2: Memoization ===
function memoize(fn) {
  // Your code here
  // 1. Create cache object (Map for better performance)
  // 2. Return function that:
  //    - Checks if result is cached
  //    - If yes, return cached result
  //    - If no, compute, cache, and return
  // 3. Include clearCache method
}


// Expensive calculation to memoize
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


// === TASK 3: Performance Measurement ===
function measurePerformance() {
  // Using performance.now()
  // Your code here
  
  const start = performance.now();
  // Do something
  const duration = performance.now() - start;
  console.log(`Took ${duration.toFixed(2)}ms`);
  
  // Measure different implementations
  const iterations = 100000;
  
  // Method 1: for loop
  const start1 = performance.now();
  let sum1 = 0;
  for (let i = 0; i < iterations; i++) {
    sum1 += i;
  }
  const time1 = performance.now() - start1;
  
  // Method 2: reduce
  const start2 = performance.now();
  const sum2 = Array.from({ length: iterations }, (_, i) => i)
    .reduce((a, b) => a + b, 0);
  const time2 = performance.now() - start2;
  
  console.log(`for loop: ${time1.toFixed(2)}ms`);
  console.log(`reduce: ${time2.toFixed(2)}ms`);
}


// Test your code
console.log('=== Task 1: Array Optimization ===');
// Uncomment to test:
// console.log('Slow:', slowOperation().length, 'pairs');
// console.log('Optimized:', optimizedOperation().length, 'pairs');

console.log('\n=== Task 2: Memoization ===');
const memoizedFib = memoize(fibonacci);

// Measure non-memoized
const start1 = performance.now();
fibonacci(40);
console.log('Fibonacci 40 (non-memoized):', (performance.now() - start1).toFixed(2), 'ms');

// Measure memoized
const start2 = performance.now();
memoizedFib(40);
memoizedFib(40);  // Second call should be instant
console.log('Fibonacci 40 (memoized):', (performance.now() - start2).toFixed(2), 'ms');

console.log('\n=== Task 3: Performance Measurement ===');
measurePerformance();
