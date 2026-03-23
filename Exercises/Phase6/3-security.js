/**
 * Exercise: Security Best Practices
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Input Sanitization (XSS Prevention)
 *    - Sanitize user input before rendering
 *    - Escape HTML special characters
 *    - Use DOM textContent instead of innerHTML
 * 
 * 2. Data Validation
 *    - Validate email, URL, phone numbers
 *    - Sanitize before use
 *    - Use allowlists
 * 
 * 3. Rate Limiting (Concept)
 *    - Track requests per IP/user
 *    - Block after threshold
 *    - Reset after time window
 */

'use strict';

// === TASK 1: XSS Prevention ===
function escapeHtml(str) {
  // Your code here
  // Escape: & < > " '
  // Return safe string
}

function safeRender(userInput) {
  // Your code here
  // 1. Escape HTML
  // 2. Use textContent instead of innerHTML
  
  // const div = document.createElement('div');
  // div.textContent = userInput;  // Safe
  // container.appendChild(div);
}

// Dangerous inputs to handle:
const dangerousInputs = [
  '<script>alert("XSS")</script>',
  '<img src=x onerror="alert(1)">',
  '"><script>steal()</script>',
  "javascript:alert('XSS')"
];


// === TASK 2: Data Validation ===
const validators = {
  email(email) {
    // Your code here
    // Basic email validation
    // Return { valid: boolean, error?: string }
  },
  
  url(url) {
    // Your code here
    // Check if valid URL format
    // Only allow http/https
  },
  
  phone(phone) {
    // Your code here
    // Allow only digits, spaces, dashes, parentheses
    // Return clean phone number or null
  }
};


// === TASK 3: Rate Limiter ===
class RateLimiter {
  constructor(maxRequests = 100, windowMs = 60000) {
    // Your code here
    // 1. Store request counts by identifier
    // 2. maxRequests: maximum requests allowed
    // 3. windowMs: time window in milliseconds
  }
  
  isAllowed(identifier) {
    // Your code here
    // Return { allowed: boolean, remaining: number, resetTime: number }
  }
  
  reset(identifier) {
    // Your code here
  }
}


// Test your code
console.log('=== Task 1: XSS Prevention ===');
console.log('Original:', dangerousInputs[0]);
console.log('Escaped:', escapeHtml(dangerousInputs[0]));

console.log('\n=== Task 2: Data Validation ===');
console.log('Valid email:', validators.email('test@example.com'));
console.log('Invalid email:', validators.email('not-an-email'));

console.log('\n=== Task 3: Rate Limiter ===');
const limiter = new RateLimiter(5, 5000);  // 5 requests per 5 seconds

for (let i = 0; i < 7; i++) {
  const result = limiter.isAllowed('user-123');
  console.log(`Request ${i + 1}:`, result.allowed ? 'Allowed' : 'Blocked', `(${result.remaining} remaining)`);
}
