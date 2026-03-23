# Error Handling

## Try/Catch/Finally

```javascript
try {
  // Code that might throw an error
  const data = JSON.parse(invalidJson);
} catch (error) {
  // Handle the error
  console.log('Error:', error.message);
} finally {
  // Always executes (optional)
  console.log('Cleanup code runs');
}
```

## Error Object

```javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  error.name;      // 'Error'
  error.message;   // 'Something went wrong'
  error.stack;     // Stack trace string
}
```

## Throwing Errors

```javascript
// Primitive throw
throw 'Error string';
throw 404;
throw undefined;

// Error object
throw new Error('Message');
throw new TypeError('Expected a string');
throw new RangeError('Value out of range');
throw new SyntaxError('Invalid syntax');
throw new ReferenceError('Variable not defined');
```

## Custom Error Classes

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(`${resource} not found`);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

try {
  throw new ValidationError('Email is required', 'email');
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(`Validation error in field: ${e.field}`);
  }
}
```

## Async Error Handling

```javascript
// With promises
fetch('/api/data')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// With async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error; // Re-throw if needed
  }
}
```

## Handling Different Error Types

```javascript
async function safeFetch(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError('Resource');
      }
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
    
  } catch (error) {
    if (error instanceof TypeError) {
      // Network error
      console.log('Network error:', error.message);
    } else if (error instanceof SyntaxError) {
      // JSON parse error
      console.log('Invalid JSON:', error.message);
    } else {
      // Other error
      console.log('Error:', error.message);
    }
    return null;
  }
}
```

## Promise.allSettled

```javascript
// Handle multiple promises, never rejects
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Request ${index}:`, result.value);
  } else {
    console.log(`Request ${index} failed:`, result.reason);
  }
});
```

## Graceful Degradation

```javascript
function safeJsonParse(json, defaultValue = null) {
  try {
    return JSON.parse(json);
  } catch {
    return defaultValue;
  }
}

const data = safeJsonParse('{invalid}', { error: true });
```

## Error Handling Best Practices

```javascript
// 1. Specific error handling
try {
  riskyOperation();
} catch (error) {
  if (error instanceof TypeError) {
    // Handle type errors specifically
  } else if (error instanceof RangeError) {
    // Handle range errors
  } else {
    // Handle other errors
  }
}

// 2. Let errors bubble up
async function lowLevel() {
  try {
    await doSomethingRisky();
  } catch (error) {
    // Log or transform, then re-throw
    logger.error(error);
    throw new AppError('Operation failed', { cause: error });
  }
}

// 3. Async error boundaries
async function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}
```

## Global Error Handling

```javascript
// Browser
window.addEventListener('error', (event) => {
  console.log('Uncaught error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.log('Unhandled promise rejection:', event.reason);
});

// Node.js
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});
```
