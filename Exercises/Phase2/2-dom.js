/**
 * Exercise: DOM Manipulation
 * Time: 75 minutes
 * 
 * Complete the following tasks using this HTML structure:
 * 
 * <!DOCTYPE html>
 * <html>
 * <head><title>DOM Exercise</title></head>
 * <body>
 *   <div id="container">
 *     <h1 id="title">Hello</h1>
 *     <ul id="list">
 *       <li class="item">Item 1</li>
 *       <li class="item">Item 2</li>
 *     </ul>
 *   </div>
 *   <button id="btn">Click Me</button>
 * </body>
 * </html>
 * 
 * 1. Element Selection & Modification
 *    - Select the title element and change its text
 *    - Change the title's color to blue
 *    - Select all elements with class "item" and log their text
 * 
 * 2. Create & Append Elements
 *    - Create a new <li> element with text "Item 3"
 *    - Add a class "item" to it
 *    - Append it to the list
 * 
 * 3. Simple Todo List
 *    - Create a todo list where you can:
 *      - Add new items by clicking a button
 *      - Remove items by clicking on them
 *      - Toggle a "completed" class
 */

'use strict';

// Run this in browser console or include in HTML file

// === TASK 1: Element Selection & Modification ===
function elementManipulation() {
  // Select elements
  // const title = ;  // Get element with id="title"
  // const items = ;  // Get all elements with class="item"
  
  // Change title text and style
  // Your code here
  
  // Log all item texts
  // Your code here
}


// === TASK 2: Create & Append Elements ===
function createAndAppend() {
  const list = document.getElementById('list');
  
  // Create new li element
  // const newItem = ;
  
  // Set text and class
  // Your code here
  
  // Append to list
  // Your code here
}


// === TASK 3: Simple Todo List ===
function createTodoList() {
  const container = document.getElementById('container');
  
  // Create input, button, and ul for todos
  // const input = document.createElement('input');
  // const addBtn = document.createElement('button');
  // const todoList = document.createElement('ul');
  
  // Your code here - add functionality:
  // 1. Click button adds new todo item
  // 2. Click on item toggles "completed" class
  // 3. Double-click removes the item
}


// Export functions for testing
if (typeof module !== 'undefined') {
  module.exports = { elementManipulation, createAndAppend, createTodoList };
}
