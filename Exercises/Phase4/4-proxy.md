# Proxy & Reflect

## Proxy

Proxy allows intercepting and customizing operations on objects.

```javascript
const proxy = new Proxy(target, handler);
```

- `target`: The original object to wrap
- `handler`: Object with "traps" that intercept operations

---

## Proxy Traps

### get - Property Read
```javascript
const proxy = new Proxy(obj, {
  get(target, prop, receiver) {
    console.log(`Reading ${prop}`);
    return Reflect.get(target, prop, receiver);
  }
});
```

### set - Property Write
```javascript
const proxy = new Proxy(obj, {
  set(target, prop, value, receiver) {
    console.log(`Writing ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
});
```

### has - 'in' Operator
```javascript
const proxy = new Proxy(obj, {
  has(target, prop) {
    console.log(`Checking ${prop}`);
    return Reflect.has(target, prop);
  }
});

'key' in proxy;  // Triggers has trap
```

### deleteProperty - delete Operator
```javascript
const proxy = new Proxy(obj, {
  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}`);
    return Reflect.deleteProperty(target, prop);
  }
});

delete proxy.key;  // Triggers deleteProperty trap
```

### ownKeys - Object.keys, etc.
```javascript
const proxy = new Proxy(obj, {
  ownKeys(target) {
    console.log('Getting all keys');
    return Reflect.ownKeys(target);
  }
});

Object.keys(proxy);  // Triggers ownKeys
```

### apply - Function Calls
```javascript
const fn = new Proxy(originalFn, {
  apply(target, thisArg, args) {
    console.log(`Calling with args: ${args}`);
    return Reflect.apply(target, thisArg, args);
  }
});
```

### construct - new Operator
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log(`Creating Person with ${args}`);
    return Reflect.construct(target, args);
  }
});

new PersonProxy('John');  // Triggers construct trap
```

---

## Common Use Cases

### Validation
```javascript
const validator = {
  set(obj, prop, value) {
    if (prop === 'age') {
      if (typeof value !== 'number') {
        throw new TypeError('Age must be a number');
      }
      if (value < 0 || value > 150) {
        throw new RangeError('Invalid age');
      }
    }
    obj[prop] = value;
    return true;
  }
};

const user = new Proxy({}, validator);
user.age = 30;              // OK
user.age = 'thirty';        // TypeError
user.age = 200;            // RangeError
```

### Reactive Objects
```javascript
function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value) {
      const oldValue = target[prop];
      target[prop] = value;
      onChange(prop, oldValue, value);
      return true;
    }
  });
}

const state = reactive({ count: 0 }, (prop, old, new_) => {
  console.log(`${prop}: ${old} -> ${new_}`);
});

state.count = 1;  // Logs: count: 0 -> 1
state.count = 2;  // Logs: count: 1 -> 2
```

### Private Properties
```javascript
const privateData = new WeakMap();

class MyClass {
  constructor(secret) {
    privateData.set(this, { secret });
  }
}

return new Proxy(new MyClass('hidden'), {
  get(target, prop) {
    if (prop === 'secret') {
      return privateData.get(target).secret;
    }
    return target[prop];
  }
});
```

---

## Reflect

Static methods that mirror Proxy traps:

```javascript
Reflect.get(target, prop, receiver)
Reflect.set(target, prop, value, receiver)
Reflect.has(target, prop)
Reflect.deleteProperty(target, prop)
Reflect.ownKeys(target)
Reflect.apply(target, thisArg, args)
Reflect.construct(target, args)
```

### Why Reflect?
- Provides default behavior for Proxy traps
- More consistent API than direct operations
- Can replace Object methods

```javascript
// Instead of:
Object.keys(obj);
obj.hasOwnProperty(prop);

// Use:
Reflect.ownKeys(obj);
Reflect.has(obj, prop);
```

---

## Practical Example: Memoization

```javascript
function memoize(fn) {
  const cache = new Map();
  
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = Reflect.apply(target, thisArg, args);
      cache.set(key, result);
      return result;
    }
  });
}

const slowAdd = memoize((a, b) => {
  // Expensive calculation
  return a + b;
});
```

---

## Revocable Proxy

```javascript
const { proxy, revoke } = Proxy.revocable(target, handler);

proxy.name = 'John';  // Works
revoke();
proxy.name = 'Jane';  // TypeError: Cannot perform operation on revoked proxy
```
