# AGENTS.md - JavaScript Learning Repository

## Project Overview
This is a JavaScript learning exercise repository organized into 6 phases, covering fundamentals through advanced concepts. Each exercise consists of a `.js` file with coding tasks and a corresponding `.md` reference file.

```
Exercises/
├── Phase1/  (Variables, Control Flow, Functions, Arrays, Strings)
├── Phase2/  (Closures, DOM, Events, ES6+, Array Methods, Error Handling, Async)
├── Phase3/  (Fetch API, JSON/LocalStorage, Modules, npm/Build Tools)
├── Phase4/  (Prototypes, this, Generators, Proxy, Regex)
├── Phase5/  (Node.js, TypeScript, React, Testing)
├── Phase6/  (Design Patterns, Performance, Security)
```

---

## Running Exercises

### Execute a Single Exercise File
```bash
node Exercises/Phase2/6-error-handling.js
```

### Execute All Files in a Phase
```bash
# Run each exercise sequentially
node Exercises/Phase1/1-variables.js
node Exercises/Phase1/2-control-flow.js
```

---

## Code Style Guidelines

### General Conventions
- **Always use `'use strict'`** at the top of every JavaScript file
- Use modern ES6+ syntax (arrow functions, destructuring, template literals)
- Keep functions focused and modular
- Use meaningful variable and function names

### Naming Conventions
- Variables/functions: `camelCase` (e.g., `createCounter`, `userName`)
- Classes: `PascalCase` (e.g., `ValidationError`, `UserService`)
- Constants: `UPPER_SNAKE_CASE` for true constants (e.g., `MAX_RETRIES`)
- File names: `kebab-case` (e.g., `error-handling.js`, `my-module.js`)

### Comments and Documentation
- Use JSDoc-style comments for exercise files:
  ```javascript
  /**
   * Exercise: Error Handling
   * Time: 45 minutes
   *
   * Complete the following tasks:
   * 1. Basic try/catch...
   */
  ```
- Comment complex logic with brief explanations
- Use `// === SECTION NAME ===` for exercise task markers

### Import/Export
- Use ES modules (`import`/`export`) for Phase 3+
- Prefer named exports for utilities
- Use default exports for single-purpose modules

### Formatting
- Use 2 spaces for indentation
- Max line length: 100 characters
- Use semicolons consistently
- Use single quotes for strings (except in template literals)

### Types
- Use JSDoc annotations for type hints when beneficial
- Prefer `const` over `let`, avoid `var` (except in var-specific exercises)
- Use meaningful type names: `number`, `string`, `boolean`, `object`, `array`

### Error Handling
- Use `try/catch/finally` for synchronous error handling
- Use `try/catch` inside async functions with `await`
- Create custom error classes extending `Error` for validation:
  ```javascript
  class ValidationError extends Error {
    constructor(message, field) {
      super(message);
      this.name = 'ValidationError';
      this.field = field;
    }
  }
  ```
- Always include meaningful error messages

### Console Output
- Use `console.log()` for exercise output verification
- Add contextual labels: `console.log("=== Counter Test ===")`

---

## Working with Exercises

### Exercise File Structure
Each exercise file follows this pattern:
1. Header comment with exercise name, time estimate, and tasks
2. `'use strict'` declaration
3. Task sections marked with `// === TASK NAME ===`
4. Test code at the bottom (not part of the exercise to complete)

### Completing Exercises
- Fill in code where indicated by `// Your code here` or `// ...`
- Test solutions by running the file with Node.js
- Reference the corresponding `.md` file for concept explanations

### Phase Progression
- Complete exercises in order within each phase
- Phase 1 is foundational - master before moving to Phase 2
- Later phases build on earlier concepts

---

## Notes
- No build tools (webpack, Vite) configured for most exercises
- No linter/formatter (ESLint, Prettier) - follow manual conventions above
- No automated test framework - use manual console output testing
- DOM exercises may require browser environment