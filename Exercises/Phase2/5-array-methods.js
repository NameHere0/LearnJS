/**
 * Exercise: Array Methods (map, filter, reduce)
 * Time: 75 minutes
 * 
 * Complete the following tasks using map, filter, and reduce:
 * 
 * Given data:
 */
const products = [
  { name: 'Laptop', price: 999, category: 'electronics', inStock: true },
  { name: 'Shirt', price: 29, category: 'clothing', inStock: true },
  { name: 'Phone', price: 699, category: 'electronics', inStock: false },
  { name: 'Pants', price: 49, category: 'clothing', inStock: true },
  { name: 'Tablet', price: 449, category: 'electronics', inStock: true },
  { name: 'Hat', price: 19, category: 'clothing', inStock: false }
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words = ['hello', 'world', 'javascript', 'is', 'awesome'];

'use strict';

// === TASK 1: Using map ===
// 1a. Double all numbers in the array
const doubled = numbers.map(/* your code */);

console.log('Doubled:', doubled);  // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 1b. Get array of product names (uppercase)
const productNames = products.map(/* your code */);

console.log('Product names:', productNames);

// 1c. Make each word uppercase with exclamation mark
const excitedWords = words.map(/* your code */);

console.log('Excited words:', excitedWords);


// === TASK 2: Using filter ===
// 2a. Filter even numbers
const evens = numbers.filter(/* your code */);

console.log('Evens:', evens);  // [2, 4, 6, 8, 10]

// 2b. Filter products that are in stock
const inStockProducts = products.filter(/* your code */);

console.log('In stock:', inStockProducts);

// 2c. Filter products under $100
const affordableProducts = products.filter(/* your code */);

console.log('Under $100:', affordableProducts);


// === TASK 3: Using reduce ===
// 3a. Calculate sum of all numbers
const sum = numbers.reduce(/* your code */);

console.log('Sum:', sum);  // 55

// 3b. Calculate average of numbers
const average = numbers.reduce(/* your code */);

console.log('Average:', average);  // 5.5

// 3c. Find longest word in array using reduce
const longestWord = words.reduce(/* your code */);

console.log('Longest word:', longestWord);


// === TASK 4: Chaining Methods ===
// 4a. Get names of in-stock electronics
const inStockElectronicsNames = products
  .filter(/* your code */)
  .map(/* your code */);

console.log('In stock electronics:', inStockElectronicsNames);

// 4b. Calculate total value of in-stock items
const totalValue = products
  .filter(/* your code */)
  .reduce(/* your code */);

console.log('Total value: $' + totalValue);

// 4c. Get lengths of words, then sum them
const totalChars = words
  .map(/* your code */)
  .reduce(/* your code */);

console.log('Total characters:', totalChars);


// === BONUS: Complex reduce ===
// Group products by category
const groupedByCategory = products.reduce((acc, product) => {
  // Your code here - add product to appropriate category
  return acc;
}, {});

console.log('Grouped by category:', groupedByCategory);
