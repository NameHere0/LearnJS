# JavaScript Exercises by Phase

Each exercise includes a reference markdown file with the concepts and syntax needed to solve it. Complete the exercises after reading the corresponding reference file.

---

## Phase 1: Fundamentals Exercises

### 1. Variables & Data Types

**Time:** 30 minutes
**File:** `Exercises/Phase1/1-variables.js`
**Reference:** `Exercises/Phase1/1-variables.md`

**Tasks:**

1. Create variables using `var`, `let`, and `const` and demonstrate their differences
2. Use `typeof` to check all data types (string, number, boolean, undefined, null, object, array, function)
3. Convert between types (string ↔ number, string ↔ boolean)

**Expected Output:**

- Understanding of variable hoisting behavior
- Ability to check types at runtime
- Safe type conversion between primitives

---

### 2. Control Flow

**Time:** 45 minutes
**File:** `Exercises/Phase1/2-control-flow.js`
**Reference:** `Exercises/Phase1/2-control-flow.md`

**Tasks:**

1. Write `classifyNumber(n)` - returns "positive", "negative", or "zero"
2. Write `fizzBuzz(n)` - FizzBuzz logic (3=Fizz, 5=Buzz, both=FizzBuzz)
3. Write a loop that prints 1-100, skipping multiples of 7

**Expected Output:**

- Mastery of if/else and switch statements
- Understanding of loop constructs (for, while)
- Ability to use break and continue

---

### 3. Functions

**Time:** 60 minutes
**File:** `Exercises/Phase1/3-functions.js`
**Reference:** `Exercises/Phase1/3-functions.md`

**Tasks:**

1. Write `factorial(n)` using recursion
2. Write `getFullName(firstName, lastName)` as an arrow function
3. Write `greet(name, greeting="Hello")` with default parameters

**Expected Output:**

- Understanding of function declarations vs expressions vs arrow functions
- Ability to use default parameters
- Familiarity with recursion

---

### 4. Arrays & Objects

**Time:** 45 minutes
**File:** `Exercises/Phase1/4-arrays-objects.js`
**Reference:** `Exercises/Phase1/4-arrays-objects.md`

**Tasks:**

1. Create fruit array, add/remove items from beginning and end
2. Create person object with name, age, hobbies, nested address, and `introduce()` method
3. Access and modify nested object properties

**Expected Output:**

- Proficiency with array methods (push, pop, shift, unshift, splice)
- Object property access and modification
- Understanding of nested data structures

---

### 5. String Manipulation

**Time:** 45 minutes
**File:** `Exercises/Phase1/5-strings.js`
**Reference:** `Exercises/Phase1/5-strings.md`

**Tasks:**

1. Write `reverseString(str)` without using `.reverse()`
2. Write `countVowels(sentence)` - count a, e, i, o, u (case-insensitive)
3. Write `isPalindrome(str)` - ignore case and non-alphanumeric characters

**Expected Output:**

- Mastery of string methods (split, join, charAt, etc.)
- Understanding of string immutability
- Ability to manipulate strings for common patterns

---

## Phase 2: Intermediate Core Exercises

### 1. Closures & Scope
**Time:** 60 minutes
**File:** `Exercises/Phase2/1-closures.js`
**Reference:** `Exercises/Phase2/1-closures.md`

**Tasks:**
1. Create `createCounter()` - returns object with increment, decrement, reset, getCount
2. Create `createIdGenerator(prefix)` - returns unique IDs like "user-1", "post-1"
3. Demonstrate var vs let in loops (show the closure problem)

**Expected Output:**
- Understanding of scope (global, function, block)
- Ability to create closures for private state
- Knowledge of var hoisting and let temporal dead zone

---

### 2. DOM Manipulation
**Time:** 75 minutes
**File:** `Exercises/Phase2/2-dom.js`
**Reference:** `Exercises/Phase2/2-dom.md`

**Tasks:**
1. Select elements by ID and class, modify text and styles
2. Create new elements and append them to the DOM
3. Build a simple todo list with add/remove functionality

**Expected Output:**
- Ability to select elements using querySelector and getElementById
- Skill in creating and inserting elements
- Understanding of event handling basics

---

### 3. Events
**Time:** 60 minutes
**File:** `Exercises/Phase2/3-events.js`
**Reference:** `Exercises/Phase2/3-events.md`

**Tasks:**
1. Create a click counter button that updates on each click
2. Implement event delegation on a list
3. Build an image gallery with thumbnail navigation

**Expected Output:**
- Proficiency with addEventListener
- Understanding of event delegation
- Knowledge of event object properties (target, preventDefault, etc.)

---

### 4. ES6+ Features
**Time:** 60 minutes
**File:** `Exercises/Phase2/4-es6-features.js`
**Reference:** `Exercises/Phase2/4-es6-features.md`

**Tasks:**
1. Destructure arrays and objects (with rename and defaults)
2. Use spread operator to merge and clone arrays/objects
3. Create HTML template functions using template literals

**Expected Output:**
- Mastery of destructuring syntax
- Ability to use spread/rest operators
- Skill with template literals for string generation

---

### 5. Array Methods (map, filter, reduce)
**Time:** 75 minutes
**File:** `Exercises/Phase2/5-array-methods.js`
**Reference:** `Exercises/Phase2/5-array-methods.md`

**Tasks:**
1. Use map to transform arrays (double numbers, uppercase names)
2. Use filter to select elements (evens, in-stock products)
3. Use reduce for aggregation (sum, average, longest word)
4. Chain all three methods together
5. Bonus: Group products by category using reduce

**Expected Output:**
- Proficiency with map, filter, and reduce
- Ability to chain array methods
- Understanding of when to use each method

---

### 6. Error Handling
**Time:** 45 minutes
**File:** `Exercises/Phase2/6-error-handling.js`
**Reference:** `Exercises/Phase2/6-error-handling.md`

**Tasks:**
1. Write `safeJsonParse(json)` with try/catch and fallback
2. Create custom `ValidationError` class with field and statusCode
3. Write async error handling for fetch operations
4. Implement `validateUser(user)` with specific error types

**Expected Output:**
- Ability to use try/catch/finally
- Skill in creating custom error classes
- Understanding of async error patterns

---

### 7. Asynchronous JavaScript
**Time:** 90 minutes
**File:** `Exercises/Phase2/7-async-await.js`
**Reference:** `Exercises/Phase2/7-async-await.md`

**Tasks:**
1. Convert callback-based function to Promise
2. Create a `delay(ms)` function
3. Fetch data from JSONPlaceholder API
4. Use Promise.all, Promise.race, and Promise.allSettled
5. Implement retry logic with exponential backoff

**Expected Output:**
- Understanding of callback, Promise, and async/await patterns
- Ability to handle concurrent operations
- Skill in error handling for async code

---

## Phase 3: Working with JavaScript Exercises

### 1. Fetch API
**Time:** 60 minutes
**File:** `Exercises/Phase3/1-fetch-api.js`
**Reference:** `Exercises/Phase3/1-fetch-api.md`

**Tasks:**
1. Fetch and display posts from JSONPlaceholder API
2. POST new data to an API endpoint
3. Handle loading, success, and error states

---

### 2. JSON & Local Storage
**Time:** 45 minutes
**File:** `Exercises/Phase3/2-json-localstorage.js`
**Reference:** `Exercises/Phase3/2-json-localstorage.md`

**Tasks:**
1. Parse JSON strings and handle invalid JSON safely
2. Save and retrieve objects from localStorage
3. Build a dark mode toggle with persistent preference

---

### 3. Modules
**Time:** 60 minutes
**File:** `Exercises/Phase3/3-modules.js`
**Reference:** `Exercises/Phase3/3-modules.md`

**Tasks:**
1. Create a module with utility functions
2. Practice default vs named exports and imports
3. Build a mini library with multiple interconnected modules

---

### 4. npm & Build Tools
**Time:** 75 minutes
**File:** `Exercises/Phase3/4-build-tools.js`
**Reference:** `Exercises/Phase3/4-build-tools.md`

**Tasks:**
1. Initialize a project with npm and install packages
2. Set up Vite for a simple project
3. Configure basic build scripts

---

## Phase 4: Advanced Concepts Exercises

### 1. Prototypes & Inheritance
**Time:** 60 minutes
**File:** `Exercises/Phase4/1-prototypes.js`
**Reference:** `Exercises/Phase4/1-prototypes.md`

**Tasks:**
1. Create a class and extend it using inheritance
2. Add methods to prototype and explain why it's efficient
3. Implement a custom array method using prototype

---

### 2. 'this' Keyword
**Time:** 45 minutes
**File:** `Exercises/Phase4/2-this-keyword.js`
**Reference:** `Exercises/Phase4/2-this-keyword.md`

**Tasks:**
1. Demonstrate 'this' in different contexts
2. Use bind, call, and apply methods
3. Fix 'this' binding issues in callbacks

---

### 3. Generators & Iterators
**Time:** 60 minutes
**File:** `Exercises/Phase4/3-generators.js`
**Reference:** `Exercises/Phase4/3-generators.md`

**Tasks:**
1. Create a generator function for Fibonacci numbers
2. Implement a custom iterator for a linked list
3. Use for...of with custom iterables

---

### 4. Proxy & Reflect
**Time:** 45 minutes
**File:** `Exercises/Phase4/4-proxy.js`
**Reference:** `Exercises/Phase4/4-proxy.md`

**Tasks:**
1. Create a proxy for input validation
2. Implement a reactive object using Proxy
3. Use Reflect for method invocations

---

### 5. Regular Expressions
**Time:** 60 minutes
**File:** `Exercises/Phase4/5-regex.js`
**Reference:** `Exercises/Phase4/5-regex.md`

**Tasks:**
1. Validate email format using regex
2. Extract all phone numbers from text
3. Replace markdown patterns with HTML equivalents

---

## Phase 5: Ecosystem Exercises

### 1. Node.js
**Time:** 90 minutes
**File:** `Exercises/Phase5/1-nodejs.js`
**Reference:** `Exercises/Phase5/1-nodejs.md`

**Tasks:**
1. Read and write files using fs module
2. Create a simple HTTP server
3. Build a command-line tool

---

### 2. TypeScript
**Time:** 90 minutes
**File:** `Exercises/Phase5/2-typescript.ts`
**Reference:** `Exercises/Phase5/2-typescript.md`

**Tasks:**
1. Define interfaces and types for a user object
2. Use generics in functions and classes
3. Type a complex data structure (e.g., state management)

---

### 3. React
**Time:** 120 minutes
**File:** `Exercises/Phase5/3-react.jsx`
**Reference:** `Exercises/Phase5/3-react.md`

**Tasks:**
1. Build a counter component with useState
2. Create a form with controlled inputs
3. Fetch and display data with useEffect
4. Build a multi-page app with React Router

---

### 4. Testing
**Time:** 90 minutes
**File:** `Exercises/Phase5/4-testing.js`
**Reference:** `Exercises/Phase5/4-testing.md`

**Tasks:**
1. Write unit tests for utility functions
2. Test React components with user interactions
3. Mock API calls in tests

---

## Phase 6: Professional Skills Exercises

### 1. Design Patterns
**Time:** 90 minutes
**File:** `Exercises/Phase6/1-design-patterns.js`
**Reference:** `Exercises/Phase6/1-design-patterns.md`

**Tasks:**
1. Implement Singleton pattern
2. Create Observer pattern for event handling
3. Build Factory pattern for object creation

---

### 2. Performance
**Time:** 60 minutes
**File:** `Exercises/Phase6/2-performance.js`
**Reference:** `Exercises/Phase6/2-performance.md`

**Tasks:**
1. Optimize a slow array operation
2. Implement memoization
3. Measure performance with Web Vitals

---

### 3. Security
**Time:** 60 minutes
**File:** `Exercises/Phase6/3-security.js`
**Reference:** `Exercises/Phase6/3-security.md`

**Tasks:**
1. Sanitize user input to prevent XSS
2. Validate and sanitize data
3. Implement rate limiting

---

## Practice Project Ideas

Combine skills from multiple phases:

| Project | Phases | Features |
|---------|--------|----------|
| Todo App | 1-2 | Full CRUD with localStorage, filter by status |
| Weather Dashboard | 3 | API integration, search, loading/error states |
| Blog CMS | 4 | Rich text editor, user authentication simulation |
| E-commerce Frontend | 5 | Product catalog, shopping cart, checkout flow |
| Full Stack App | 6 | REST API, authentication, testing, CI/CD |

---

## Quick Reference: Exercise File Locations

```
Exercises/
├── Phase1/
│   ├── 1-variables.js      # Variables & Data Types
│   ├── 1-variables.md      # Reference guide
│   ├── 2-control-flow.js   # Control Flow
│   ├── 2-control-flow.md
│   ├── 3-functions.js      # Functions
│   ├── 3-functions.md
│   ├── 4-arrays-objects.js # Arrays & Objects
│   ├── 4-arrays-objects.md
│   ├── 5-strings.js        # String Manipulation
│   └── 5-strings.md
├── Phase2/
│   ├── 1-closures.js       # Closures & Scope
│   ├── 1-closures.md
│   ├── 2-dom.js            # DOM Manipulation
│   ├── 2-dom.md
│   ├── 3-events.js         # Events
│   ├── 3-events.md
│   ├── 4-es6-features.js   # ES6+ Features
│   ├── 4-es6-features.md
│   ├── 5-array-methods.js # Array Methods
│   ├── 5-array-methods.md
│   ├── 6-error-handling.js # Error Handling
│   ├── 6-error-handling.md
│   ├── 7-async-await.js   # Async JavaScript
│   └── 7-async-await.md
├── Phase3/
├── Phase4/
├── Phase5/
└── Phase6/
```
