/**
 * Exercise: TypeScript Fundamentals
 * Time: 90 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Interfaces and Types
 *    - Define User, Product, Order interfaces
 *    - Use optional and readonly properties
 *    - Create type aliases
 * 
 * 2. Generics
 *    - Create generic function identity<T>
 *    - Create generic class Queue<T>
 *    - Use constraints with extends
 * 
 * 3. Complex Type Patterns
 *    - Union types and type guards
 *    - Mapped types
 *    - Utility types (Partial, Required, Pick, Omit)
 */

'use strict';

// This is TypeScript syntax - run with tsc or in a TypeScript environment

// === TASK 1: Interfaces and Types ===

// Basic User interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;           // Optional property
  readonly createdAt: Date; // Cannot be modified after creation
}

// Product interface
// Your code here - define Product with id, name, price, category, and optional tags

// Order interface with nested types
// Your code here - define OrderItem and Order

// Type alias for status
// Your code here - type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered'


// === TASK 2: Generics ===

// Generic identity function
// Your code here - function identity<T>(value: T): T

// Generic class Queue
// Your code here - class Queue<T> with enqueue, dequeue, peek, isEmpty

// Generic with constraint
// Your code here - function getLength<T extends { length: number }>(item: T): number


// === TASK 3: Complex Types ===

// Union types
type StringOrNumber = string | number;
type Callback = () => void;
type UserOrAdmin = User | { role: 'admin'; permissions: string[] };

// Type guard functions
function isUser(obj: unknown): obj is User {
  // Your code here - check if obj has required User properties
}

// Mapped types
// Your code here - type Optional<T> makes all properties optional
// Your code here - type Readonly<T> makes all properties readonly (use Readonly<T>)

// Utility types usage
// Your code here - type UpdateUser = Partial<User>
// Your code here - type UserPreview = Pick<User, 'id' | 'name'>
// Your code here - type PublicUser = Omit<User, 'createdAt'>


// === Test Code (TypeScript) ===
// Uncomment in TypeScript environment:

/*
// Task 1
const user: User = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  createdAt: new Date()
};

const product: Product = {
  id: 1,
  name: 'Laptop',
  price: 999.99,
  category: 'electronics'
};

// Task 2
const num = identity(42);
const str = identity('hello');
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();  // 1

console.log(getLength([1, 2, 3]));  // 3
console.log(getLength('hello'));     // 5

// Task 3
function processItem(item: StringOrNumber): string {
  if (typeof item === 'string') {
    return item.toUpperCase();
  }
  return item.toFixed(2);
}
*/

console.log('TypeScript exercise - run with tsc for full type checking');
