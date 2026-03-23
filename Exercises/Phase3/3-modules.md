# JavaScript Modules

## ES Modules (Modern)

### Exporting

```javascript
// Named exports (can have multiple)
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export const multiply = (a, b) => a * b;

// Export at the end
const name = 'John';
const age = 30;
export { name, age };

// Re-export
export { helper } from './other.js';

// Default export (one per file)
export default class Calculator {
  add(a, b) { return a + b; }
}
```

### Importing

```javascript
// Import named exports
import { PI, add, multiply } from './math.js';

// Rename during import
import { add as sum } from './math.js';

// Import default export
import Calculator from './calculator.js';
import MyCalc from './calculator.js';  // Any name works

// Import all as namespace
import * as math from './math.js';
math.PI;  // 3.14159
math.add(1, 2);  // 3

// Combine default and named
import Calculator, { PI } from './calculator.js';

// Dynamic import
const module = await import('./module.js');
module.default;    // Default export
module.namedExport;  // Named export
```

### In HTML
```html
<script type="module" src="main.js"></script>
```

### Requirements
```html
<!-- CORS requires server for ES modules -->
<!-- Can use: npx serve, python -m http.server, VS Code Live Server -->
```

---

## CommonJS (Node.js)

### Exporting
```javascript
// Export object (mutations affect what others see)
module.exports = {
  add: (a, b) => a + b,
  PI: 3.14159
};

// Export individual items
exports.multiply = (a, b) => a * b;

// Export class
class Calculator {}
module.exports = Calculator;
```

### Importing
```javascript
const math = require('./math.js');
math.add(1, 2);  // 3
```

---

## Module Patterns

### IIFE with Revealing Module
```javascript
const Counter = (function() {
  let count = 0;
  
  function increment() { count++; }
  function getCount() { return count; }
  
  return {
    increment,
    getCount
  };
})();

Counter.increment();
Counter.getCount();  // 1
```

### Namespace Pattern
```javascript
const App = {
  utils: {},
  services: {},
  models: {},
  init() { /* ... */ }
};

App.utils.formatDate = function() { /* ... */ };
```

---

## Dynamic Imports

```javascript
// Lazy load heavy module
async function loadHeavyModule() {
  const { heavyFunction } = await import('./heavy.js');
  return heavyFunction();
}

// Conditional import
async function getFeature() {
  if (condition) {
    const { FeatureA } = await import('./featureA.js');
    return new FeatureA();
  } else {
    const { FeatureB } = await import('./featureB.js');
    return new FeatureB();
  }
}
```

---

## Import Maps (Modern)

```html
<script type="importmap">
{
  "imports": {
    "lodash": "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.js",
    "react": "https://esm.sh/react@18"
  }
}
</script>

<script type="module">
  import _ from 'lodash';
  import React from 'react';
</script>
```

---

## Best Practices

```javascript
// ✅ Good: Named imports (clear what you're using)
import { useState, useEffect } from 'react';

// ✅ Good: Alias for long names
import { VeryLongComponentName as ShortName } from './components.js';

// ❌ Bad: Import * (namespace pollution)
import * as React from 'react';
React.useState();  // Confusing

// ✅ Good: Barrel exports (index.js)
export { Button } from './Button.js';
export { Card } from './Card.js';
export { Input } from './Input.js';

// Then elsewhere:
import { Button, Card, Input } from './components';
```
