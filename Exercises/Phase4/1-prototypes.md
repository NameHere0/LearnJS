# Prototypes & Inheritance

## Prototype Basics

Every object has a prototype, which is another object. Properties/methods on the prototype are accessible on the object.

```javascript
const arr = [1, 2, 3];

arr.__proto__ === Array.prototype;  // true
arr.__proto__.__proto__ === Object.prototype;  // true
arr.__proto__.__proto__.__proto__;  // null (end of chain)
```

### Object.getPrototypeOf
```javascript
Object.getPrototypeOf(arr) === Array.prototype;  // true
```

---

## Prototype Chain

```javascript
const parent = { a: 1 };
const child = Object.create(parent);  // child.__proto__ = parent
child.b = 2;

console.log(child.a);  // 1 (inherited from parent)
console.log(child.b);  // 2 (own property)
```

---

## Classes (ES6)

```javascript
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  makeSound() {
    return `${this.name} says ${this.sound}!`;
  }
  
  static create(name, sound) {
    return new Animal(name, sound);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof');  // Call parent constructor
    this.breed = breed;
  }
  
  makeSound() {
    return super.makeSound() + ' Woof!';  // Call parent method
  }
  
  fetch() {
    return `${this.name} fetches the ball!`;
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
dog.makeSound();  // "Buddy says Woof! Woof! Woof!"
dog.fetch();      // "Buddy fetches the ball!"
Dog.create('Generic', 'Meow');  // Static method
```

---

## Prototype Methods

### Adding to Array Prototype
```javascript
Array.prototype.secondLast = function() {
  if (this.length < 2) return undefined;
  return this[this.length - 2];
};

[1, 2, 3].secondLast();  // 2
```

### Why Prototype Methods?
```javascript
// ✅ Good: Shared, memory efficient
class Array {
  map() { /* shared implementation */ }
}

// ❌ Bad: Each instance has own copy
const arr = [1, 2];
arr.map = function() { /* own copy */ };
```

---

## Classical vs Prototypal Inheritance

### Classical (Class-based)
```javascript
class Parent {
  constructor() { this.x = 1; }
  parentMethod() { return this.x; }
}

class Child extends Parent {
  constructor() {
    super();
    this.y = 2;
  }
  childMethod() { return this.y; }
}
```

### Prototypal (Prototype-based)
```javascript
const parent = {
  x: 1,
  parentMethod() { return this.x; }
};

const child = Object.create(parent);
child.y = 2;
child.childMethod = function() { return this.y; };

// child inherits parentMethod automatically
```

---

## Object Creation Patterns

```javascript
// 1. Object literal
const obj = { a: 1 };

// 2. Object.create (explicit prototype)
const child = Object.create(parent);

// 3. Constructor function
function Animal(name) {
  this.name = name;
}
Animal.prototype.makeSound = function() { return '...'; };

// 4. Class (ES6 syntactic sugar over constructor)
class Animal {
  constructor(name) { this.name = name; }
}
```

---

## instanceof

```javascript
dog instanceof Dog;          // true
dog instanceof Animal;        // true
dog instanceof Object;        // true
dog instanceof Array;         // false
```

---

## hasOwnProperty

```javascript
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;

child.hasOwnProperty('a');  // false (inherited)
child.hasOwnProperty('b');  // true (own)
```

---

## Practical Example

```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.off(event, callback);  // Return unsubscribe function
  }
  
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...args));
    }
  }
  
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

class UserService extends EventEmitter {
  constructor() {
    super();
    this.users = [];
  }
  
  addUser(name) {
    this.users.push(name);
    this.emit('userAdded', name);
  }
}

const service = new UserService();
service.on('userAdded', (name) => console.log(`${name} was added`));
service.addUser('John');  // Logs: John was added
```
