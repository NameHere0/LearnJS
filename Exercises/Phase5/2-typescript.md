# TypeScript Fundamentals

## TypeScript vs JavaScript

TypeScript = JavaScript + Static Types + Extra Features

```bash
npm install -g typescript
tsc --version
```

### Compile
```bash
tsc file.ts           # Compile to file.js
tsc --init            # Create tsconfig.json
tsc                   # Compile all
tsc --watch           # Watch mode
```

---

## Basic Types

```typescript
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let nums: number[] = [1, 2, 3];
let strings: Array<string> = ['a', 'b'];

// Tuple
let tuple: [string, number] = ['hello', 42];

// Enum
enum Status { Pending, Active, Done }
const status: Status = Status.Active;

// Any (avoid when possible)
let anything: any = 42;

// Unknown (type-safe any)
let unknown: unknown = 42;
if (typeof unknown === 'number') {
  console.log(unknown.toFixed(2));
}

// Void
function log(): void {
  console.log('no return value');
}

// Never (never returns)
function throwError(): never {
  throw new Error('error');
}
```

---

## Interfaces

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;           // Optional
  readonly createdAt: Date;  // Readonly
  greet(): string;        // Method
}

// Extending interfaces
interface Admin extends User {
  permissions: string[];
}

// Interface with index signature
interface StringMap {
  [key: string]: string;
}
```

---

## Types

```typescript
// Type alias
type ID = string | number;
type Callback = () => void;

// Union type
type StringOrNumber = string | number;

// Intersection type
type Employee = User & { employeeId: number };

// Literal type
type Direction = 'north' | 'south' | 'east' | 'west';
```

---

## Generics

```typescript
// Generic function
function identity<T>(value: T): T {
  return value;
}

identity<number>(42);  // T = number
identity('hello');      // T = string

// Generic interface
interface Box<T> {
  value: T;
}

// Generic class
class Queue<T> {
  private items: T[] = [];
  
  enqueue(item: T): void {
    this.items.push(item);
  }
  
  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(1);
```

### Constraints
```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength('hello');     // OK
getLength([1, 2, 3]);  // OK
getLength({ length: 5 }); // OK
getLength(42);          // Error
```

---

## Utility Types

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;     // All optional
type RequiredUser = Required<User>;   // All required
type ReadonlyUser = Readonly<User>;   // All readonly
type UserPreview = Pick<User, 'id' | 'name'>;  // Select fields
type UserWithoutEmail = Omit<User, 'email'>;    // Exclude fields

type UserOrNull = User | null;
type UserOrUndefined = User | undefined;
type MaybeUser = User | null | undefined;
```

### More Utilities
```typescript
type Keys = keyof User;              // 'id' | 'name' | 'email'
type Values = User[Keyof User];      // number | string

// Record
type UserMap = Record<string, User>;

// Extract & Exclude
type A = string | number | boolean;
type B = string | boolean;
type OnlyString = Extract<A, B>;     // string | boolean
type NotBoolean = Exclude<A, B>;    // string
```

---

## Type Guards

```typescript
// typeof
function pad(padding: number | string) {
  if (typeof padding === 'number') {
    // padding is number here
    return ' '.repeat(padding) + 'x';
  }
  // padding is string here
  return padding + 'x';
}

// instanceof
class Dog { bark() {} }
class Cat { meow() {} }

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom guard
interface Fish { swim: () => void; }
interface Bird { fly: () => void; }

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
```

---

## Functions

```typescript
// Function types
type Fn = (a: number, b: number) => number;
const add: Fn = (x, y) => x + y;

// Optional parameters
function greet(name: string, greeting?: string) {
  return `${greeting || 'Hello'}, ${name}`;
}

// Default parameters
function greet(name: string, greeting = 'Hello') { }

// Rest parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Overloads
function reverse(x: string): string;
function reverse(x: number[]): number[];
function reverse(x: string | number[]) {
  // Implementation
}
```

---

## Classes

```typescript
class Person {
  readonly id: number;
  private name: string;
  protected age: number;
  
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  
  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(id: number, name: string, age: number, public grade: string) {
    super(id, name, age);
  }
}

interface Serializable {
  serialize(): string;
}

class User implements Serializable {
  serialize(): string {
    return JSON.stringify(this);
  }
}
```

---

## Declaration Files

```typescript
// .d.ts files provide type information for JS libraries

// math.d.ts
declare function add(a: number, b: number): number;
declare const PI: number;

// global.d.ts
declare namespace MyLib {
  function greet(name: string): string;
  class Helper { }
}
```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
