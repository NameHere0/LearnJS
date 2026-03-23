/**
 * Exercise: Regular Expressions
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Email Validation
 *    - Validate email format: user@domain.extension
 *    - Handle common patterns and edge cases
 *    - Return true/false
 * 
 * 2. Extract Phone Numbers
 *    - Extract all phone numbers from text
 *    - Support formats: (123) 456-7890, 123-456-7890, 1234567890
 *    - Return array of found numbers
 * 
 * 3. Markdown to HTML
 *    - Convert markdown patterns to HTML
 *    - **text** -> <strong>text</strong>
 *    - *text* -> <em>text</em>
 *    - # Heading -> <h1>Heading</h1>
 *    - **bold** and *italic* can be nested
 */

'use strict';

// === TASK 1: Email Validation ===
function validateEmail(email) {
  // Your code here
  // Basic pattern: local@domain.extension
  // Should handle: letters, numbers, dots, hyphens, underscores in local part
  // Should handle: letters, numbers, hyphens in domain
  // Should have 2-4 letter TLD
}

// Test cases
console.log('=== Email Validation ===');
console.log(validateEmail('test@example.com'));         // true
console.log(validateEmail('user.name@domain.co.uk'));   // true
console.log(validateEmail('invalid@'));                  // false
console.log(validateEmail('@domain.com'));              // false
console.log(validateEmail('user@domain.c'));            // false


// === TASK 2: Extract Phone Numbers ===
function extractPhoneNumbers(text) {
  // Your code here
  // Match: (xxx) xxx-xxxx, xxx-xxx-xxxx, xxx.xxx.xxxx, xxxxxxxxxx
}

// Test cases
console.log('\n=== Extract Phone Numbers ===');
const text = `
  Call us at (123) 456-7890 or 987-654-3210.
  Also reachable at 555.123.4567 or 8001234567.
  Invalid: 123-45-6789
`;
console.log(extractPhoneNumbers(text));


// === TASK 3: Markdown to HTML ===
function markdownToHtml(markdown) {
  // Your code here
  // Convert in this order:
  // 1. # Heading -> <h1>Heading</h1>
  // 2. ## Heading -> <h2>Heading</h2>
  // 3. **text** -> <strong>text</strong>
  // 4. *text* -> <em>text</em>
  // 5. [text](url) -> <a href="url">text</a>
}

// Test cases
console.log('\n=== Markdown to HTML ===');
console.log(markdownToHtml('# Hello World'));
console.log(markdownToHtml('**bold** and *italic*'));
console.log(markdownToHtml('Click [here](https://example.com)'));


// === BONUS: More Patterns ===
function moreRegex() {
  // URL validation
  const urlPattern = /https?:\/\/[^\s]+/;
  
  // Password strength
  // At least 8 chars, 1 uppercase, 1 lowercase, 1 number
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
  // Date format (YYYY-MM-DD)
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  
  // Hex color
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  
  // Credit card (basic)
  const ccPattern = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;
  
  console.log('\n=== More Patterns ===');
  console.log('URL:', urlPattern.test('https://example.com'));
  console.log('Password:', passwordPattern.test('Password123'));
  console.log('Date:', datePattern.test('2024-01-15'));
  console.log('Hex:', hexPattern.test('#fff'));
  console.log('Hex:', hexPattern.test('#FF5733'));
}

moreRegex();
