/**
 * Exercise: Control Flow
 * Time: 45 minutes
 *
 * Complete the following tasks:
 *
 * 1. Number Classifier
 *    - Write a function classifyNumber(num)
 *    - Return "positive" if > 0, "negative" if < 0, "zero" if === 0
 *
 * 2. FizzBuzz
 *    - Write a function fizzBuzz(n) that returns:
 *      - "Fizz" for multiples of 3
 *      - "Buzz" for multiples of 5
 *      - "FizzBuzz" for multiples of both 3 and 5
 *      - The number as a string otherwise
 *
 * 3. Skip Loop
 *    - Write a loop that prints numbers 1 to 100
 *    - Skip (don't print) numbers that are multiples of 7
 */

"use strict";

// === TASK 1: Number Classifier ===
function classifyNumber(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

// === TASK 2: FizzBuzz ===
function fizzBuzz(n) {
  let out = "";

  if (n % 3 === 0) out += "Fizz";
  if (n % 5 === 0) out += "Buzz";

  return out || String(n);
}

// === TASK 3: Skip Multiples of 7 ===
function printWithSkip() {
  for (let i = 0; i < 100; i++) {
    if (i % 7 != 0) console.log(i);
  }
}

// Test your functions
console.log(classifyNumber(5)); // "positive"
console.log(classifyNumber(-3)); // "negative"
console.log(classifyNumber(0)); // "zero"

console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(9)); // "Fizz"
console.log(fizzBuzz(10)); // "Buzz"
console.log(fizzBuzz(11)); // "11"

printWithSkip();

// COMPLETED
