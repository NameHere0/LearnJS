# Control Flow

## If/Else Statements

```javascript
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if first condition is false, second is true
} else {
  // runs if all conditions are false
}
```

**Ternary Operator:**
```javascript
const status = age >= 18 ? 'adult' : 'minor';
```

## Switch Statement

```javascript
switch (value) {
  case 1:
    // runs if value === 1
    break;
  case 2:
  case 3:
    // runs if value === 2 or value === 3
    break;
  default:
    // runs if no case matches
}
```

## Loops

### For Loop
```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// Loop through array
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### While Loop
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Do-While Loop
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Runs at least once, even if condition is false initially
```

### For...of Loop (arrays)
```javascript
const arr = ['a', 'b', 'c'];
for (const item of arr) {
  console.log(item);
}
```

### For...in Loop (objects)
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}
```

### forEach Method
```javascript
const arr = ['a', 'b', 'c'];
arr.forEach((item, index) => {
  console.log(index, item);
});
```

## Loop Control

### Break
```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;  // exits the loop entirely
  console.log(i);
}
```

### Continue
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;  // skips to next iteration
  console.log(i);  // 0, 1, 3, 4
}
```

## Comparison Operators

```javascript
==   // Loose equality (type coercion)
===  // Strict equality (no type coercion)
!=   // Loose inequality
!==  // Strict inequality
>    // Greater than
<    // Less than
>=   // Greater than or equal
<=   // Less than or equal
```

**Always use `===` and `!==` to avoid unexpected type coercion.**

## Logical Operators

```javascript
&&   // AND
||   // OR
!    // NOT

// Short-circuit evaluation
const name = userInput || 'Guest';  // Uses 'Guest' if userInput is falsy
```
