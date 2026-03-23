# Generators & Iterators

## Generators

Functions that can pause and resume execution, yielding multiple values.

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
gen.next();  // { value: 1, done: false }
gen.next();  // { value: 2, done: false }
gen.next();  // { value: 3, done: false }
gen.next();  // { value: undefined, done: true }
```

### Syntax
```javascript
function* name() { yield value; }
function* name() { yield* iterable; }  // Delegate
```

---

## Iterator Protocol

Objects with a `next()` method that returns `{ value, done }`:

```javascript
const iterator = {
  current: 0,
  next() {
    this.current++;
    if (this.current <= 5) {
      return { value: this.current, done: false };
    }
    return { value: undefined, done: true };
  }
};
```

### Using Iterators
```javascript
iterator.next();  // { value: 1, done: false }
iterator.next();  // { value: 2, done: false }
// ...
iterator.next();  // { value: undefined, done: true }
```

---

## Iterable Protocol

Objects that implement `Symbol.iterator`:

```javascript
const range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num);  // 1, 2, 3, 4, 5
}
```

---

## Built-in Iterables

```javascript
// Array
const arr = [1, 2, 3];
for (const item of arr) { }

// String
for (const char of 'hello') { }

// Map
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) { }

// Set
const set = new Set([1, 2, 3]);
for (const item of set) { }

// Arguments object (not iterable by default)
function args() {
  for (const arg of arguments) { }
}
```

---

## Generator Functions

### Basic
```javascript
function* countTo3() {
  yield 1;
  yield 2;
  yield 3;
}

for (const num of countTo3()) {
  console.log(num);
}
```

### With Parameters
```javascript
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of generateSequence(1, 5)) {
  console.log(num);  // 1, 2, 3, 4, 5
}
```

### Fibonacci
```javascript
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
```

### Infinite Sequences
```javascript
function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idGen = generateId();
idGen.next().value;  // 1
idGen.next().value;  // 2
```

---

## Generator Methods

### next(value)
```javascript
function* gen() {
  const result = yield 1;
  console.log(result);  // 'received'
}

const g = gen();
g.next();      // { value: 1, done: false }
g.next('received');  // Continues, logs 'received'
```

### throw(error)
```javascript
function* gen() {
  try {
    yield 1;
  } catch (e) {
    console.log('Error:', e);
  }
}

const g = gen();
g.next();
g.throw(new Error('Oops'));  // Throws into generator
```

### return(value)
```javascript
function* gen() {
  yield 1;
  yield 2;
}

const g = gen();
g.next();          // { value: 1, done: false }
g.return('done');   // { value: 'done', done: true }
g.next();           // { value: undefined, done: true }
```

---

## yield*

Delegate to another iterable:

```javascript
function* inner() {
  yield 1;
  yield 2;
}

function* outer() {
  yield 0;
  yield* inner();  // Delegates to inner()
  yield 3;
}

[...outer()];  // [0, 1, 2, 3]
```

---

## Practical Examples

### Paginated API
```javascript
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();
    if (data.length === 0) return;
    yield data;
    page++;
  }
}

for await (const page of fetchPages('/api/posts')) {
  console.log(page);
  if (page.length < 10) break;
}
```

### Custom Range
```javascript
function* range(start, end, step = 1) {
  for (let i = start; i <= end; i += step) {
    yield i;
  }
}

[...range(0, 10, 2)];  // [0, 2, 4, 6, 8, 10]
```
