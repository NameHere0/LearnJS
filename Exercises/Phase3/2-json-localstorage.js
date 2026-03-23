/**
 * Exercise: JSON & Local Storage
 * Time: 45 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Safe JSON Parsing
 *    - Write a function that safely parses JSON
 *    - Handle invalid JSON without throwing
 *    - Return default value on error
 * 
 * 2. LocalStorage CRUD
 *    - Save user object to localStorage
 *    - Retrieve and parse it back
 *    - Update specific properties
 *    - Delete from storage
 * 
 * 3. Dark Mode Toggle
 *    - Create a dark mode preference system
 *    - Persist preference in localStorage
 *    - Apply theme on page load
 *    - Toggle button functionality
 */

'use strict';

// === TASK 1: Safe JSON Parsing ===
function safeJsonParse(jsonString, defaultValue = null) {
  // Your code here
  // 1. Try to parse JSON
  // 2. Return parsed value on success
  // 3. Return defaultValue on error
}


// === TASK 2: LocalStorage CRUD ===
const Storage = {
  KEY: 'user_data',
  
  // Save user object to localStorage
  save(user) {
    // Your code here
    // 1. Convert user to JSON string
    // 2. Save to localStorage with key
  },
  
  // Retrieve user from localStorage
  get() {
    // Your code here
    // 1. Get from localStorage
    // 2. Parse and return (use safe parse)
  },
  
  // Update specific properties
  update(updates) {
    // Your code here
    // 1. Get current user
    // 2. Merge updates
    // 3. Save back to localStorage
  },
  
  // Delete from storage
  remove() {
    // Your code here
  }
};


// === TASK 3: Dark Mode Toggle ===
const ThemeManager = {
  STORAGE_KEY: 'theme',
  
  init() {
    // Your code here
    // 1. Load saved theme or default
    // 2. Apply theme to document
    // 3. Set up toggle button if exists
  },
  
  toggle() {
    // Your code here
    // 1. Get current theme
    // 2. Toggle between 'light' and 'dark'
    // 3. Save to localStorage
    // 4. Apply to document
  },
  
  setTheme(theme) {
    // Your code here
    // 1. Save theme to localStorage
    // 2. Apply to document
  },
  
  getTheme() {
    // Your code here
    // 1. Return current theme from storage
  }
};


// Test your code
console.log('=== Task 1: Safe JSON Parse ===');
console.log(safeJsonParse('{"valid": true}'));        // { valid: true }
console.log(safeJsonParse('invalid', { error: true })); // { error: true }

console.log('\n=== Task 2: LocalStorage CRUD ===');
Storage.save({ name: 'John', age: 30, email: 'john@example.com' });
console.log('Saved:', Storage.get());
Storage.update({ age: 31 });
console.log('Updated:', Storage.get());
Storage.remove();
console.log('After remove:', Storage.get());

console.log('\n=== Task 3: Theme Manager ===');
// Uncomment for browser testing:
// ThemeManager.init();
