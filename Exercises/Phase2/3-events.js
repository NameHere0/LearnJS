/**
 * Exercise: Events
 * Time: 60 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Click Counter Button
 *    - Create a button that displays the number of times clicked
 *    - Button text should update to "Clicked: X times"
 * 
 * 2. Event Delegation
 *    - Create a list with 5 items
 *    - Use event delegation to handle clicks on any list item
 *    - When clicked, log which item was clicked (by index or text)
 * 
 * 3. Image Gallery
 *    - Create a simple gallery with:
 *      - Main image display area
 *      - Thumbnail images below
 *      - Clicking thumbnail changes main image
 *      - Add active class to selected thumbnail
 */

'use strict';

// === TASK 1: Click Counter Button ===
function createClickCounter() {
  // Create button element
  // const button = document.createElement('button');
  // button.textContent = 'Clicked: 0 times';
  
  // Add click event listener that increments counter
  // Your code here
  
  // document.body.appendChild(button);
  
  return button;
}


// === TASK 2: Event Delegation ===
function createDelegatedList() {
  const container = document.createElement('div');
  const list = document.createElement('ul');
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  
  // Create list items
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.dataset.index = index;
    list.appendChild(li);
  });
  
  // Add single click listener to parent (ul)
  // Log which item was clicked
  // Your code here
  
  container.appendChild(list);
  // document.body.appendChild(container);
  
  return container;
}


// === TASK 3: Image Gallery ===
function createImageGallery() {
  const container = document.createElement('div');
  
  const images = [
    'https://picsum.photos/400/300?random=1',
    'https://picsum.photos/400/300?random=2',
    'https://picsum.photos/400/300?random=3'
  ];
  
  // Main image display
  // const mainImage = document.createElement('img');
  // mainImage.src = images[0];
  // mainImage.alt = 'Main gallery image';
  // mainImage.id = 'main-image';
  
  // Thumbnail container
  // const thumbnailContainer = document.createElement('div');
  
  // Create thumbnails
  // Your code here:
  // 1. Create thumbnails for each image
  // 2. Clicking thumbnail updates mainImage.src
  // 3. Add/remove 'active' class on thumbnail
  
  container.appendChild(/* mainImage */);
  container.appendChild(/* thumbnailContainer */);
  
  return container;
}


// Export for Node.js testing
if (typeof module !== 'undefined') {
  module.exports = { createClickCounter, createDelegatedList, createImageGallery };
}
