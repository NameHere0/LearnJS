/**
 * Exercise: Fetch API
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Fetch and Display Posts
 *    - Fetch posts from: https://jsonplaceholder.typicode.com/posts
 *    - Display the first 10 posts in console
 *    - Handle errors gracefully
 * 
 * 2. POST New Data
 *    - Create a new post using POST request
 *    - URL: https://jsonplaceholder.typicode.com/posts
 *    - Send title, body, and userId
 *    - Log the created post with its ID
 * 
 * 3. Handle Loading and Error States
 *    - Show loading state while fetching
 *    - Display user-friendly error message on failure
 *    - Return data or null appropriately
 */

'use strict';

// === TASK 1: Fetch and Display Posts ===
async function fetchPosts() {
  // Your code here
  // 1. Use fetch() to get posts
  // 2. Check if response is ok
  // 3. Parse JSON
  // 4. Return first 10 posts
}


// === TASK 2: POST New Data ===
async function createPost(title, body, userId) {
  // Your code here
  // 1. Use fetch() with POST method
  // 2. Set headers to application/json
  // 3. Send body as JSON string
  // 4. Return created post data
}


// === TASK 3: Handle Loading and Error States ===
async function fetchWithStatus(url) {
  // Your code here
  // Return object with:
  // { loading: boolean, data: any, error: string | null }
}


// Test your functions
async function runTests() {
  console.log('=== Task 1: Fetch Posts ===');
  const posts = await fetchPosts();
  console.log('Fetched posts:', posts);
  
  console.log('\n=== Task 2: Create Post ===');
  const newPost = await createPost(
    'Test Title',
    'This is a test post body',
    1
  );
  console.log('Created post:', newPost);
  
  console.log('\n=== Task 3: Fetch with Status ===');
  const result1 = await fetchWithStatus('https://jsonplaceholder.typicode.com/posts/1');
  console.log('Success:', result1);
  
  const result2 = await fetchWithStatus('https://invalid-domain-that-does-not-exist.com');
  console.log('Error:', result2);
}

runTests();
