/**
 * Exercise: Design Patterns
 * Time: 90 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Singleton Pattern
 *    - Create Singleton class (only one instance)
 *    - Prevent multiple instances
 *    - Global access point
 * 
 * 2. Observer Pattern
 *    - Create Subject class with observers
 *    - Add/remove observers
 *    - Notify observers on changes
 * 
 * 3. Factory Pattern
 *    - Create factory function/class
 *    - Create different object types
 *    - Handle object creation
 */

'use strict';

// === TASK 1: Singleton Pattern ===
class Singleton {
  // Your code here
  // 1. Private static instance
  // 2. Private constructor
  // 3. Static getInstance method
}

class Database extends Singleton {
  constructor() {
    // Your code here - prevent direct construction
  }
  
  query(sql) {
    return `Executing: ${sql}`;
  }
}


// === TASK 2: Observer Pattern ===
class Subject {
  constructor() {
    // Your code here
    // 1. Array of observers
    // 2. addObserver(observer) method
    // 3. removeObserver(observer) method
    // 4. notify(data) method - call all observers
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


// === TASK 3: Factory Pattern ===
class Dog {
  constructor(name) {
    this.type = 'dog';
    this.name = name;
  }
  
  speak() {
    return `${this.name} says Woof!`;
  }
}

class Cat {
  constructor(name) {
    this.type = 'cat';
    this.name = name;
  }
  
  speak() {
    return `${this.name} says Meow!`;
  }
}

class AnimalFactory {
  static create(type, name) {
    // Your code here
    // Return appropriate animal based on type
    // Handle unknown types
  }
}


// Test your code
console.log('=== Task 1: Singleton ===');
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log('Same instance:', db1 === db2);
console.log(db1.query('SELECT * FROM users'));

// Try to create directly (should fail or return same instance)
const db3 = new Database(); // What happens?
console.log('db1 === db3:', db1 === db3);

console.log('\n=== Task 2: Observer ===');
const subject = new Subject();
const obs1 = new Observer('Observer 1');
const obs2 = new Observer('Observer 2');

subject.addObserver(obs1);
subject.addObserver(obs2);
subject.notify({ message: 'First notification' });

subject.removeObserver(obs1);
subject.notify({ message: 'Second notification' });

console.log('\n=== Task 3: Factory ===');
const dog = AnimalFactory.create('dog', 'Buddy');
const cat = AnimalFactory.create('cat', 'Whiskers');
const unknown = AnimalFactory.create('bird', 'Tweety');

console.log(dog.speak());
console.log(cat.speak());
console.log(unknown.speak ? unknown.speak() : unknown);
