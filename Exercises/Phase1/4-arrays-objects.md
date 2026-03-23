# Arrays & Objects

## Arrays

### Creating Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 3);
```

### Accessing Elements
```javascript
const fruits = ['apple', 'banana', 'orange'];
fruits[0];              // 'apple'
fruits[fruits.length - 1];  // 'orange' (last item)
```

### Modifying Arrays

```javascript
const arr = [1, 2, 3];

// Add elements
arr.push(4);           // End: [1, 2, 3, 4]
arr.unshift(0);        // Beginning: [0, 1, 2, 3, 4]

// Remove elements
arr.pop();             // Remove end: returns 4, arr is [1, 2, 3]
arr.shift();           // Remove beginning: returns 0, arr is [1, 2, 3]

// Insert/remove at index
arr.splice(1, 1);      // Remove 1 element at index 1
arr.splice(1, 0, 'a'); // Insert 'a' at index 1 (no removal)

// Combine arrays
const merged = arr1.concat(arr2);
const spread = [...arr1, ...arr2];

// Slice (copy portion)
arr.slice(1, 3);       // Elements from index 1 to 2
arr.slice(1);          // Elements from index 1 to end
```

### Array Properties & Methods

```javascript
const arr = [1, 2, 3];

arr.length;            // 3
arr.includes(2);        // true
arr.indexOf(2);        // 1
arr.lastIndexOf(2);     // 1
arr.join('-');         // "1-2-3"
arr.reverse();         // [3, 2, 1]
arr.sort();            // Sort as strings by default
arr.sort((a, b) => a - b);  // Sort as numbers
```

---

## Objects

### Creating Objects
```javascript
const obj1 = { name: 'John', age: 30 };
const obj2 = new Object();
const obj3 = Object.create({});
```

### Accessing Properties

```javascript
const person = { name: 'John', age: 30, address: { city: 'NYC' } };

// Dot notation
person.name;              // 'John'

// Bracket notation
person['name'];           // 'John'

// Nested access
person.address.city;      // 'NYC'
person['address']['city']; // 'NYC'
```

### Modifying Objects

```javascript
const obj = { a: 1 };

// Add/update properties
obj.b = 2;
obj['c'] = 3;

// Delete properties
delete obj.a;

// Check if property exists
'name' in person;          // true
person.hasOwnProperty('name');  // true
```

### Object Methods

```javascript
Object.keys(obj);        // ['a', 'b', 'c']
Object.values(obj);      // [1, 2, 3]
Object.entries(obj);     // [['a', 1], ['b', 2], ['c', 3]]

Object.assign({}, obj);   // Shallow copy
Object.freeze(obj);      // Prevent modifications
Object.seal(obj);        // Prevent adding/removing properties
```

### Object Shorthand

```javascript
const name = 'John';
const age = 30;

// Shorthand property names
const person = { name, age };  // Same as { name: name, age: age }

// Shorthand methods
const calculator = {
  value: 0,
  add(n) { this.value += n; },
  subtract(n) { this.value -= n; }
};

// Computed property names
const key = 'dynamicKey';
const obj = { [key]: 'value' };
```

### Object Spread & Copy

```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };           // Shallow copy
const merged = { ...original, c: 3 };    // Merge with new properties
const override = { ...original, a: 10 }; // Override property
```

---

## Arrays of Objects

```javascript
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
];

// Access
users[0].name;              // 'John'

// Modify
users[0].age = 31;

// Add to array
users.push({ name: 'Bob', age: 35 });
```

### Destructuring

```javascript
const [first, second] = [1, 2, 3];      // first=1, second=2
const { name, age } = { name: 'John', age: 30 };  // name='John', age=30

// With renaming
const { name: userName } = { name: 'John' };  // userName='John'

// With defaults
const { city = 'Unknown' } = { name: 'John' };  // city='Unknown'

// Nested
const { address: { city } } = { address: { city: 'NYC' } };  // city='NYC'
```
