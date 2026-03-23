# Asynchronous JavaScript

## Callbacks (The Old Way)

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback(null, { data: 'success' });
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
});

// Callback hell
doSomething((err, result) => {
  if (err) handleError(err);
  else {
    doSomethingElse((err2, result2) => {
      if (err2) handleError(err2);
      else {
        doAnotherThing((err3, result3) => {
          // ...more nesting
        });
      }
    });
  }
});
```

## Promises

```javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});

// States: pending -> fulfilled or rejected
promise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'));
```

### Promise Methods

```javascript
// Chaining
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(`/api/posts/${user.id}`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));

// Static methods
Promise.resolve(value);              // Resolved promise
Promise.reject(error);              // Rejected promise
Promise.all([p1, p2, p3]);          // Waits for all (fails fast)
Promise.allSettled([p1, p2, p3]);   // Waits for all (never rejects)
Promise.race([p1, p2, p3]);         // Resolves/rejects with first
Promise.any([p1, p2, p3]);         // Resolves with first success
```

### Promise.all
```javascript
// Waits for all promises, fails if ANY rejects
const [users, posts, comments] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/comments').then(r => r.json())
]);
```

### Promise.allSettled
```javascript
// Never rejects, returns status of each
const results = await Promise.allSettled([
  fetch('/api/data1'),
  fetch('/api/data2'),
  fetch('/api/data3')
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Request ${index}:`, result.value);
  } else {
    console.log(`Request ${index} failed:`, result.reason);
  }
});
```

## Async/Await

```javascript
// Async function always returns a promise
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const data = await response.json();
  return data;
}

// Error handling with try/catch
async function getData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
```

### Parallel vs Sequential

```javascript
// Sequential (slow - waits for each)
async function sequential() {
  const user = await fetchUser(1);
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
}

// Parallel (fast - runs concurrently)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);
}
```

## Converting Callbacks to Promises

```javascript
// Old callback style
function getUser(id, callback) {
  db.query('SELECT * FROM users WHERE id = ?', id, callback);
}

// Convert to promise
function getUser(id) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE id = ?', id, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

// Modern: util.promisify (Node.js)
const { promisify } = require('util');
const getUserAsync = promisify(getUser);
```

## Fetch API

```javascript
// Basic GET
const response = await fetch('/api/data');
const data = await response.json();

// POST with JSON
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', age: 30 })
});

// Check response
if (!response.ok) {
  throw new Error(`HTTP error: ${response.status}`);
}

// Handle different status codes
if (response.status === 404) {
  // Handle 404
} else if (response.status === 500) {
  // Handle 500
}
```

## Retry Logic

```javascript
async function retry(fn, maxAttempts = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage
const data = await retry(() => fetch('/api/data').then(r => r.json()), 3, 1000);

// Exponential backoff
async function retryWithBackoff(fn, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxAttempts) throw error;
      const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

## Race Conditions

```javascript
let cancelToken;

async function fetchWithCancel() {
  cancelToken = new AbortController();
  
  try {
    const response = await fetch('/api/data', {
      signal: cancelToken.signal
    });
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled');
    }
    throw error;
  }
}

// Cancel request
cancelToken.abort();
```

## Promise Gotchas

```javascript
// Common mistake: forgetting await
async function mistake() {
  const data = fetch('/api/data')  // Missing await!
    .then(r => r.json());
  console.log(data);  // Promise, not data!
}

// Always return promises from async functions
async function correct() {
  return fetch('/api/data').then(r => r.json());
}

// Sequential await in loop (use for-of)
async function processItems(items) {
  // Don't use map with await directly (creates nested promises)
  // const results = items.map(async item => await process(item));
  
  // Instead:
  const results = [];
  for (const item of items) {
    results.push(await process(item));
  }
  return results;
}
```
