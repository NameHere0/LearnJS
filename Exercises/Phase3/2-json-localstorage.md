# JSON & Local Storage

## JSON

### Parsing JSON
```javascript
// Parse JSON string to object
const obj = JSON.parse('{"name": "John", "age": 30}');

// Handle errors
try {
  const data = JSON.parse(jsonString);
} catch (e) {
  console.error('Invalid JSON:', e.message);
}

// Safe parse function
function safeJsonParse(str, defaultValue = null) {
  try {
    return JSON.parse(str);
  } catch {
    return defaultValue;
  }
}
```

### Stringify to JSON
```javascript
const json = JSON.stringify({ name: 'John', age: 30 });
// '{"name":"John","age":30}'

// Pretty print
const pretty = JSON.stringify({ name: 'John' }, null, 2);
// {
//   "name": "John"
// }

// Filter properties
const filtered = JSON.stringify(obj, ['name', 'age']);

// Custom replacer
const custom = JSON.stringify({ date: new Date() }, (key, value) => {
  if (value instanceof Date) return value.toISOString();
  return value;
});
```

---

## Local Storage

### Basic Operations
```javascript
// Set item
localStorage.setItem('name', 'John');
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));

// Get item
const name = localStorage.getItem('name');
const user = JSON.parse(localStorage.getItem('user'));

// Remove item
localStorage.removeItem('name');

// Clear all
localStorage.clear();

// Check if key exists
localStorage.getItem('name') !== null;
```

### Common Patterns

```javascript
// Save array
localStorage.setItem('colors', JSON.stringify(['red', 'green']));
const colors = JSON.parse(localStorage.getItem('colors'));

// Save with expiry
function setWithExpiry(key, value, ttlSeconds) {
  const item = {
    value,
    expiry: Date.now() + ttlSeconds * 1000
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const item = JSON.parse(localStorage.getItem(key));
  if (!item) return null;
  
  if (Date.now() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
```

### Storage Events
```javascript
// Fires when another tab/window changes storage
window.addEventListener('storage', (e) => {
  console.log('Key changed:', e.key);
  console.log('Old value:', e.oldValue);
  console.log('New value:', e.newValue);
});
```

---

## Session Storage

```javascript
// Same API as localStorage but cleared on tab close
sessionStorage.setItem('tempData', 'something');
sessionStorage.getItem('tempData');
sessionStorage.removeItem('tempData');
```

---

## Dark Mode Pattern

```javascript
const ThemeManager = {
  STORAGE_KEY: 'theme',
  
  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const theme = saved || 'light';
    this.applyTheme(theme);
  },
  
  toggle() {
    const current = this.getTheme();
    const next = current === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  },
  
  getTheme() {
    return localStorage.getItem(this.STORAGE_KEY) || 'light';
  },
  
  setTheme(theme) {
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.applyTheme(theme);
  },
  
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Or toggle class
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }
};

// CSS variables for theming
// :root {
//   --bg-color: #ffffff;
//   --text-color: #000000;
// }
// [data-theme="dark"] {
//   --bg-color: #1a1a1a;
//   --text-color: #ffffff;
// }
```

---

## Storage Limits & Notes

```javascript
// Storage limit: ~5-10 MB per origin
localStorage.setItem('x', '...'); // QuotaExceededError if full

// Check if storage is available
function isStorageAvailable(type) {
  try {
    const storage = window[type];
    const test = '__storage_test__';
    storage.setItem(test, test);
    storage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

isStorageAvailable('localStorage');  // true/false
```

### Alternatives for Large Data
```javascript
// IndexedDB for large structured data
// Cookies for small data that needs to be sent to server
// SessionStorage for tab-specific data
```
