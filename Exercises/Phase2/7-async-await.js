/**
 * Exercise: Asynchronous JavaScript
 * Time: 90 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Callback to Promise
 *    - Convert a callback-based function to Promise-based
 *    - Create a delay function using Promise
 * 
 * 2. Fetch and Display
 *    - Fetch data from JSONPlaceholder API
 *    - Display posts in console
 *    - Handle loading and error states
 * 
 * 3. Promise Combinators
 *    - Use Promise.all to fetch multiple resources
 *    - Use Promise.race to timeout a slow operation
 *    - Use Promise.allSettled to handle partial failures
 * 
 * 4. Retry Logic
 *    - Implement a retry function that:
 *      - Retries a failed operation up to N times
 *      - Waits between retries (exponential backoff optional)
 *      - Returns after successful attempt or final failure
 */

'use strict';

// === TASK 1: Callback to Promise ===
// Original callback-based function
function fetchUserCallback(id, callback) {
  setTimeout(() => {
    if (id > 0) {
      callback(null, { id, name: 'User ' + id });
    } else {
      callback(new Error('Invalid ID'));
    }
  }, 100);
}

// Convert to Promise-based
function fetchUser(id) {
  // Your code here - return a Promise
}

// Create a delay function
function delay(ms) {
  // Return a promise that resolves after ms milliseconds
  // Your code here
}


// === TASK 2: Fetch and Display ===
async function fetchPosts() {
  // Fetch from: https://jsonplaceholder.typicode.com/posts
  // Handle:
  // - Loading state
  // - Network errors
  // - Empty response
  // Return first 5 posts
  // Your code here
}


// === TASK 3: Promise Combinators ===
async function promiseCombinators() {
  const api = 'https://jsonplaceholder.typicode.com';
  
  // Promise.all - fetch user and their posts
  // Your code here
  
  // Promise.race - timeout after 1 second
  // Your code here
  
  // Promise.allSettled - try multiple optional resources
  // Your code here
}


// === TASK 4: Retry Logic ===
async function retry(fn, maxAttempts = 3, delayMs = 1000) {
  // Your code here
  // - Try to execute fn
  // - If it fails, retry up to maxAttempts times
  // - Wait delayMs between attempts
  // - Return result on success, throw error after max attempts
}

// Bonus: Exponential backoff
async function retryWithBackoff(fn, maxAttempts = 3) {
  // Each retry waits twice as long as the previous
  // Your code here
}


// Test your code
async function runTests() {
  console.log('=== Task 1: Promise Conversion ===');
  try {
    const user = await fetchUser(1);
    console.log('User:', user);
  } catch (e) {
    console.log('Error:', e.message);
  }
  
  console.log('\n=== Task 2: Fetch Posts ===');
  const posts = await fetchPosts();
  console.log('Posts:', posts);
  
  console.log('\n=== Task 3: Promise Combinators ===');
  await promiseCombinators();
  
  console.log('\n=== Task 4: Retry Logic ===');
  let attempts = 0;
  const unreliableFn = () => {
    attempts++;
    if (attempts < 3) throw new Error('Failed');
    return 'Success after ' + attempts + ' attempts';
  };
  
  try {
    const result = await retry(unreliableFn, 5);
    console.log(result);
  } catch (e) {
    console.log('Final error:', e.message);
  }
}

runTests();
