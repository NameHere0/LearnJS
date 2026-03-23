# Performance Optimization

## Measuring Performance

### performance.now()
```javascript
const start = performance.now();

// Your code here
const result = expensiveOperation();

const duration = performance.now() - start;
console.log(`Took ${duration.toFixed(2)}ms`);
```

### performance.mark (for profiling)
```javascript
performance.mark('start-task');
// ... code ...
performance.mark('end-task');

performance.measure('task duration', 'start-task', 'end-task');
```

---

## Memoization

```javascript
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const memoizedFib = memoize(function fib(n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});
```

---

## Array Optimization

### Common patterns:

```javascript
// ❌ Slow: Nested loops O(n²)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) { /* found */ }
  }
}

// ✅ Fast: Use Set for O(1) lookup O(n)
const set = new Set(arr);
for (const item of arr) {
  if (set.has(target - item)) { /* found */ }
}
```

### Avoid unnecessary operations:
```javascript
// ❌ Bad: Multiple array iterations
const sum = arr.reduce((a, b) => a + b, 0);
const max = Math.max(...arr);

// ✅ Good: Single pass
let sum = 0, max = -Infinity;
for (const num of arr) {
  sum += num;
  if (num > max) max = num;
}
```

---

## DOM Optimization

```javascript
// ❌ Bad: Multiple reflows
element.style.width = '100px';
element.style.height = '100px';
element.style.color = 'red';

// ✅ Good: CSS class
element.classList.add('expanded');

// ❌ Bad: Query in loop
for (let i = 0; i < 100; i++) {
  document.querySelector('.item');  // Query every iteration
}

// ✅ Good: Cache query
const items = document.querySelectorAll('.item');
for (const item of items) { /* ... */ }
```

### Document fragments:
```javascript
// ❌ Bad: Multiple reflows
for (const item of items) {
  container.appendChild(createElement(item));
}

// ✅ Good: One reflow
const fragment = document.createDocumentFragment();
for (const item of items) {
  fragment.appendChild(createElement(item));
}
container.appendChild(fragment);
```

---

## Debouncing & Throttling

```javascript
// Debounce: Delay execution until after wait period
function debounce(fn, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Throttle: Execute at most once per interval
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
const debouncedSearch = debounce(search, 300);
const throttledScroll = throttle(handleScroll, 100);
```

---

## Lazy Loading

```javascript
// Images
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// Code splitting
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

---

## Web Vitals

```javascript
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  console.log(`${name}: ${delta.toFixed(2)}`);
}

getCLS(sendToAnalytics);  // Cumulative Layout Shift
getFID(sendToAnalytics);  // First Input Delay
getLCP(sendToAnalytics);  // Largest Contentful Paint
```

---

## Common Performance Tips

```javascript
// 1. Use Map/Set instead of Object for frequent operations
// 2. Avoid creating objects in loops
// 3. Use typed arrays for numerical data
// 4. Use event delegation
// 5. Batch DOM operations
// 6. Use CSS transforms instead of layout properties
// 7. Avoid synchronous XHR
// 8. Use requestAnimationFrame for animations
```

---

## Profiling in Browser DevTools

1. Open DevTools (F12)
2. Go to Performance tab
3. Click Record
4. Perform actions
5. Analyze flame chart
6. Look for:
   - Long tasks (red)
   - Unnecessary repaints
   - Large layout shifts
