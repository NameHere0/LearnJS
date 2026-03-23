# DOM Manipulation

## Selecting Elements

### Single Elements
```javascript
document.getElementById('id');           // By ID (returns single element)
document.querySelector('.class');        // First match (CSS selector)
document.querySelector('#id');           // By ID
document.querySelector('div.container'); // Complex selector
```

### Multiple Elements
```javascript
document.getElementsByClassName('class'); // HTMLCollection (live)
document.getElementsByTagName('div');    // HTMLCollection (live)
document.querySelectorAll('.class');     // NodeList (static)
document.querySelectorAll('li:nth-child(odd)');
```

### Traversal
```javascript
element.parentNode;           // Parent
element.children;             // Child elements
element.childNodes;           // All child nodes (including text)
element.firstElementChild;     // First element child
element.lastElementChild;      // Last element child
element.nextElementSibling;    // Next sibling
element.previousElementSibling; // Previous sibling
```

## Reading & Modifying Content

```javascript
element.textContent;           // Text content (including hidden)
element.innerText;             // Visible text (respects CSS)
element.innerHTML;            // HTML content
element.outerHTML;            // Element with its own tags

// Setting
element.textContent = 'New text';
element.innerHTML = '<strong>Bold</strong>';
```

## Attributes

```javascript
// Reading
element.getAttribute('href');
element.id;
element.className;            // All classes as string
element.classList;            // DOMTokenList for manipulation

// Setting
element.setAttribute('href', 'https://example.com');
element.id = 'newId';
element.setAttribute('disabled', '');

// Classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('active');
element.classList.contains('active');
```

## Styles

```javascript
element.style.color = 'red';           // Inline style
element.style.backgroundColor = 'blue'; // Use camelCase

// Get computed style
window.getComputedStyle(element).color;

// Common style properties
element.style.display = 'none';
element.style.visibility = 'hidden';
element.style.opacity = 0.5;
```

## Creating & Adding Elements

```javascript
// Create element
const div = document.createElement('div');
const text = document.createTextNode('Hello');

// Add content/properties
div.textContent = 'Content';
div.className = 'container';
div.id = 'myDiv';

// Add to DOM
parentElement.appendChild(div);        // At end
parentElement.prepend(div);           // At beginning
parentElement.insertBefore(div, refElement);  // Before reference
parentElement.insertAdjacentHTML('beforeend', '<span>Hi</span>');
```

### Insertion Positions
```javascript
element.insertAdjacentHTML('beforebegin', '<p>Before</p>');
element.insertAdjacentHTML('afterbegin', '<p>First</p>');
element.insertAdjacentHTML('beforeend', '<p>Last</p>');
element.insertAdjacentHTML('afterend', '<p>After</p>');
```

## Removing Elements

```javascript
element.remove();                // Remove from DOM
parentElement.removeChild(child); // Remove child
element.innerHTML = '';           // Remove all children
```

## Events

### Adding Event Listeners
```javascript
element.addEventListener('click', function(event) {
  console.log('Clicked!', event);
});

// Arrow function
element.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});

// Named function
element.addEventListener('click', handleClick);

// Remove listener
element.removeEventListener('click', handleClick);
```

### Event Object Properties
```javascript
event.target;           // Element that triggered event
event.currentTarget;    // Element with listener attached
event.type;             // Event type ('click')
event.preventDefault(); // Cancel default behavior
event.stopPropagation(); // Stop event bubbling
```

### Common Events
```javascript
// Mouse
'click', 'dblclick', 'mouseenter', 'mouseleave', 'mousemove'

// Keyboard
'keydown', 'keyup', 'keypress'

// Form
'submit', 'input', 'change', 'focus', 'blur'

// Document
'DOMContentLoaded', 'load', 'resize', 'scroll'
```

### Event Delegation
```javascript
// Instead of adding listeners to each child
parentElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    console.log('Clicked:', e.target.textContent);
  }
});
```

## Data Attributes

```javascript
// HTML: <div data-id="123" data-name="test">

element.dataset.id;    // '123' (camelCase for multi-word)
element.dataset.name;  // 'test'

element.dataset.userId = '456';  // Sets data-user-id="456"
```

## Forms

```javascript
const form = document.querySelector('form');

// Get form data
const formData = new FormData(form);
const data = Object.fromEntries(formData);

// Input values
input.value;
input.valueAsNumber;
input.valueAsDate;

// Validation
input.checkValidity();
input.validity.valid;
input.setCustomValidity('Error message');
```
