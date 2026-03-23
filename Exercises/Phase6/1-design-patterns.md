# Design Patterns

## Singleton

Ensures only one instance exists.

```javascript
class Singleton {
  static instance;
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.data = [];
  }
  
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log(s1 === s2);  // true
```

---

## Observer (Pub/Sub)

One-to-many dependency where changes notify observers.

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(`${this.name} received:`, data);
  }
}

const subject = new Subject();
const obs1 = new Observer('Obs1');
const obs2 = new Observer('Obs2');

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify('Hello!');
```

---

## Factory

Creates objects without specifying exact class.

```javascript
class Dog {
  speak() { return 'Woof!'; }
}

class Cat {
  speak() { return 'Meow!'; }
}

class AnimalFactory {
  static create(type) {
    switch (type) {
      case 'dog': return new Dog();
      case 'cat': return new Cat();
      default: throw new Error('Unknown type');
    }
  }
}

const animal = AnimalFactory.create('dog');
```

---

## Module

Encapsulates private state.

```javascript
const Counter = (function() {
  let count = 0;
  
  return {
    increment() { count++; },
    decrement() { count--; },
    getCount() { return count; }
  };
})();

Counter.increment();
Counter.increment();
console.log(Counter.getCount());  // 2
```

---

## Decorator

Adds behavior dynamically.

```javascript
function withLogging(fn) {
  return function(...args) {
    console.log(`Calling ${fn.name}`);
    return fn.apply(this, args);
  };
}

function add(a, b) { return a + b; }
const loggedAdd = withLogging(add);
loggedAdd(1, 2);
```

---

## Strategy

Interchangeable algorithms.

```javascript
class PaymentStrategy {
  pay(amount) {
    throw new Error('Not implemented');
  }
}

class CreditCard extends PaymentStrategy {
  pay(amount) { console.log(`Paid ${amount} with credit card`); }
}

class PayPal extends PaymentStrategy {
  pay(amount) { console.log(`Paid ${amount} with PayPal`); }
}

class Order {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }
  
  checkout(amount) {
    this.paymentMethod.pay(amount);
  }
}

const order = new Order(new CreditCard());
order.checkout(100);
```

---

## Adapter

Makes incompatible interfaces work together.

```javascript
class OldAPI {
  getUser(id) { return { firstName: 'John', lastName: 'Doe' }; }
}

class NewAPI {
  getUser(id) { return { name: 'John Doe', age: 30 }; }
}

class Adapter {
  constructor(api) {
    this.api = api;
  }
  
  getUser(id) {
    const data = this.api.getUser(id);
    if (data.name) return data;  // Already new format
    return { name: `${data.firstName} ${data.lastName}` };
  }
}

const adapter = new Adapter(new OldAPI());
adapter.getUser(1);  // { name: 'John Doe' }
```

---

## State

Object changes behavior when state changes.

```javascript
class StateMachine {
  constructor() {
    this.state = 'idle';
    this.states = {
      idle: {
        start: () => { this.state = 'running'; }
      },
      running: {
        pause: () => { this.state = 'paused'; },
        stop: () => { this.state = 'idle'; }
      },
      paused: {
        resume: () => { this.state = 'running'; },
        stop: () => { this.state = 'idle'; }
      }
    };
  }
  
  transition(action) {
    const actions = this.states[this.state];
    if (actions[action]) {
      actions[action]();
    }
  }
}
```

---

## Builder

Constructs complex objects step by step.

```javascript
class Builder {
  constructor() {
    this.reset();
  }
  
  reset() { this.product = {}; }
  
  setName(name) { this.product.name = name; return this; }
  setAge(age) { this.product.age = age; return this; }
  setEmail(email) { this.product.email = email; return this; }
  
  build() {
    const result = this.product;
    this.reset();
    return result;
  }
}

const user = new Builder()
  .setName('John')
  .setAge(30)
  .setEmail('john@example.com')
  .build();
```
