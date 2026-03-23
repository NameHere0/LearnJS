/**
 * Exercise: String Manipulation
 * Time: 45 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Reverse a String
 *    - Write a function reverseString(str)
 *    - Do NOT use the built-in reverse() method
 *    - "hello" should return "olleh"
 * 
 * 2. Count Vowels
 *    - Write a function countVowels(sentence)
 *    - Count and return the number of vowels (a, e, i, o, u)
 *    - Handle both uppercase and lowercase
 *    - "Hello World" should return 3
 * 
 * 3. Palindrome Checker
 *    - Write a function isPalindrome(str)
 *    - Return true if the string is a palindrome
 *    - Ignore case and non-alphanumeric characters
 *    - "A man, a plan, a canal: Panama" should return true
 *    - "race a car" should return false
 */

'use strict';

// === TASK 1: Reverse String (without .reverse()) ===
function reverseString(str) {
  // Your code here
}


// === TASK 2: Count Vowels ===
function countVowels(sentence) {
  // Your code here
}


// === TASK 3: Palindrome Checker ===
function isPalindrome(str) {
  // Your code here
}


// Test your functions
console.log("=== Reverse String ===");
console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString(""));            // ""

console.log("\n=== Count Vowels ===");
console.log(countVowels("Hello World"));           // 3
console.log(countVowels("The quick brown fox"));   // 5
console.log(countVowels("rhythm"));                 // 0

console.log("\n=== Palindrome Checker ===");
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
console.log(isPalindrome("race a car"));                       // false
console.log(isPalindrome("Was it a car or a cat I saw?"));    // true
console.log(isPalindrome("hello"));                           // false
