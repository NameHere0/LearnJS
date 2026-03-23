# Fetch API

## Basic Fetch

```javascript
// GET request (default)
const response = await fetch('/api/data');

// Response object properties
response.ok;           // true if status 200-299
response.status;       // HTTP status code
response.statusText;   // Status text
response.headers;      // Response headers

// Parse response
const data = await response.json();     // Parse as JSON
const text = await response.text();     // Parse as text
const blob = await response.blob();     // Parse as binary
```

## Request Options

```javascript
fetch('/api/data', {
  method: 'POST',              // GET, POST, PUT, DELETE, PATCH
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify({       // Body must be string
    name: 'John',
    age: 30
  }),
  mode: 'cors',                // cors, no-cors, same-origin
  credentials: 'include',       // include, same-origin, omit
  cache: 'no-cache'            // default, no-cache, reload
});
```

## Handling Different Status Codes

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (response.status === 404) {
      return { error: 'Not found' };
    }
    
    if (response.status === 500) {
      return { error: 'Server error' };
    }
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return { error: error.message };
  }
}
```

## Sending Data

```javascript
// JSON data
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
});

// Form data
const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');

const response = await fetch('/api/submit', {
  method: 'POST',
  body: formData  // Don't set Content-Type with FormData
});

// Multipart file upload
const formData = new FormData();
formData.append('file', fileInput.files[0]);

const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData
});
```

## AbortController (Cancel Requests)

```javascript
const controller = new AbortController();
const signal = controller.signal;

// Start fetch
const promise = fetch('/api/data', { signal });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);

try {
  const response = await promise;
  const data = await response.json();
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request was cancelled');
  }
}
```

## Common API Patterns

```javascript
// GET with query parameters
function buildUrl(base, params) {
  const query = new URLSearchParams(params).toString();
  return `${base}?${query}`;
}

const url = buildUrl('/api/search', { q: 'javascript', page: 1 });
const response = await fetch(url);

// Retry logic
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Not ok');
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}
```

## Free Test APIs

```javascript
// JSONPlaceholder (testing)
'https://jsonplaceholder.typicode.com/posts'
'https://jsonplaceholder.typicode.com/users/1'
'https://jsonplaceholder.typicode.com/todos'

// REST Countries
'https://restcountries.com/v3.1/all'

// Random User
'https://randomuser.me/api/'

// Picsum (random images)
'https://picsum.photos/200'
```
