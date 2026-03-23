/**
 * Exercise: Prototypes & Inheritance
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Class and Inheritance
 *    - Create Animal class with name, sound properties
 *    - Create Dog class that extends Animal
 *    - Add bark() method to Dog
 *    - Override makeSound() in Dog
 * 
 * 2. Prototype Methods
 *    - Add a method to Array prototype: .secondLast()
 *    - Returns second-to-last element
 *    - [1,2,3].secondLast() returns 2
 * 
 * 3. Prototype Chain
 *    - Demonstrate how __proto__ works
 *    - Show inheritance chain
 */

'use strict';

// === TASK 1: Class and Inheritance ===
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  makeSound() {
    return `${this.name} says ${this.sound}!`;
  }
}

class Dog extends Animal {
  constructor(name) {
    // Your code here - call super with appropriate arguments
  }
  
  bark() {
    return `${this.name} barks loudly!`;
  }
  
  makeSound() {
    // Your code here - override and use parent's behavior
  }
}


// === TASK 2: Array Prototype Method ===
// Add secondLast() method to Array prototype
// Your code here

// Usage: [1, 2, 3].secondLast() should return 2
// [1].secondLast() should return undefined


// === TASK 3: Prototype Chain ===
function demonstratePrototypeChain() {
  const arr = [1, 2, 3];
  
  // Show prototype chain
  // Your code here
  
  console.log('Array prototype:', Object.getPrototypeOf(arr));
  console.log('Array methods exist on:', Object.getOwnPropertyNames(Array.prototype).slice(0, 10));
  
  // Create object and show its chain
  const obj = { a: 1 };
  console.log('Object prototype:', Object.getPrototypeOf(obj));
  console.log('Object prototype of prototype:', Object.getPrototypeOf(Object.getPrototypeOf(obj)));
}


// Test your code
console.log('=== Task 1: Inheritance ===');
const dog = new Dog('Buddy', 'Woof');
console.log(dog.makeSound());   // Buddy says Woof! Woof! (overridden)
console.log(dog.bark());        // Buddy barks loudly!

const animal = new Animal('Generic', '...');
console.log(animal.makeSound()); // Generic says ...!

console.log('\n=== Task 2: Array Prototype ===');
console.log([1, 2, 3].secondLast());  // 2
console.log(['a', 'b', 'c'].secondLast());  // 'b'
console.log([1].secondLast());        // undefined

console.log('\n=== Task 3: Prototype Chain ===');
demonstratePrototypeChain();
