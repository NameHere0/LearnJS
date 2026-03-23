# Array Methods: map, filter, reduce

## map()

Creates a new array by transforming each element.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8, 10]

// Transform objects
const users = [{name: 'John', age: 30}, {name: 'Jane', age: 25}];
const names = users.map(user => user.name);  // ['John', 'Jane']

// Return new structure
const userCards = users.map(user => ({
  title: user.name,
  subtitle: `Age: ${user.age}`
}));  // [{title: 'John', subtitle: 'Age: 30'}, ...]
```

**When to use:** When you need to transform each element.

---

## filter()

Creates a new array with elements that pass a test.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers
const evens = numbers.filter(n => n % 2 === 0);  // [2, 4, 6]

// Filter objects
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 449, inStock: true }
];

const available = products.filter(p => p.inStock);
const affordable = products.filter(p => p.price < 500);
```

**When to use:** When you need to select a subset of elements.

---

## reduce()

Reduces an array to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);  // 15

// acc = accumulator (accumulated result)
// curr = current element
// 0 = initial value
```

### Common reduce patterns:

```javascript
// Find max
const max = numbers.reduce((acc, curr) => 
  curr > acc ? curr : acc, 
  numbers[0]
);

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});  // {apple: 3, banana: 2, orange: 1}

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => [...acc, ...curr], []);  // [1,2,3,4,5,6]

// Group by property
const users = [
  { name: 'John', role: 'admin' },
  { name: 'Jane', role: 'user' },
  { name: 'Bob', role: 'admin' }
];
const byRole = users.reduce((acc, user) => {
  if (!acc[user.role]) acc[user.role] = [];
  acc[user.role].push(user);
  return acc;
}, {});  // {admin: [...], user: [...]}
```

---

## Chaining Methods

```javascript
const products = [
  { name: 'Laptop', price: 999, category: 'electronics', inStock: true },
  { name: 'Shirt', price: 29, category: 'clothing', inStock: true },
  { name: 'Phone', price: 699, category: 'electronics', inStock: false }
];

// Get names of in-stock electronics
const names = products
  .filter(p => p.inStock && p.category === 'electronics')
  .map(p => p.name);  // ['Laptop']

// Calculate total price of in-stock items
const total = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);  // 1028

// Chain all three
const result = products
  .filter(p => p.price > 100)
  .map(p => p.name.toUpperCase())
  .sort();
```

---

## Other Essential Array Methods

### forEach()
```javascript
// Like map but doesn't return anything
numbers.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});
```

### find() & findIndex()
```javascript
// find: returns first matching element
const user = users.find(u => u.id === 1);

// findIndex: returns index of first match
const index = users.findIndex(u => u.id === 1);
```

### some() & every()
```javascript
// some: returns true if ANY element passes
const hasInStock = products.some(p => p.inStock);

// every: returns true if ALL elements pass
const allInStock = products.every(p => p.inStock);
```

### includes()
```javascript
// Check if array contains value
const hasApple = fruits.includes('apple');
```

### flat() & flatMap()
```javascript
// Flatten nested arrays
[[1, 2], [3, 4]].flat();  // [1, 2, 3, 4]

// flatMap: map then flatten
[[1, 2], [3, 4]].flatMap(arr => arr.map(n => n * 2));  // [2, 4, 6, 8]
```

### sort()
```javascript
// Sort strings
['banana', 'apple', 'cherry'].sort();  // ['apple', 'banana', 'cherry']

// Sort numbers (ascending)
[3, 1, 4, 1, 5].sort((a, b) => a - b);  // [1, 1, 3, 4, 5]

// Sort numbers (descending)
[3, 1, 4, 1, 5].sort((a, b) => b - a);  // [5, 4, 3, 1, 1]
```

### Practical Example - Data Transformation
```javascript
const orders = [
  { id: 1, items: [{ price: 10 }, { price: 20 }], status: 'completed' },
  { id: 2, items: [{ price: 15 }], status: 'pending' },
  { id: 3, items: [{ price: 25 }, { price: 15 }], status: 'completed' }
];

// Get total revenue from completed orders
const revenue = orders
  .filter(o => o.status === 'completed')
  .flatMap(o => o.items)
  .reduce((sum, item) => sum + item.price, 0);  // 70
```
