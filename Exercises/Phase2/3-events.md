# Events

## Event Basics

Events are actions that happen in the browser (clicks, keypresses, etc.) that JavaScript can respond to.

```javascript
element.addEventListener('eventType', handler);
element.removeEventListener('eventType', handler);
```

## Event Handler Options

```javascript
// Function reference
function handleClick() { console.log('Clicked!'); }
element.addEventListener('click', handleClick);
element.removeEventListener('click', handleClick); // Must be same function

// Inline function
element.addEventListener('click', () => console.log('Clicked!'));

// addEventListener options
element.addEventListener('click', handler, {
  once: true,           // Only fires once
  capture: false,       // Capture phase vs bubble phase
  passive: false        // Never calls preventDefault
});
```

## The Event Object

```javascript
element.addEventListener('click', (event) => {
  event.type;           // 'click'
  event.target;         // Element that was clicked
  event.currentTarget;  // Element with listener attached
  event.timestamp;      // Time event was created
  event.defaultPrevented; // Was preventDefault called?
});
```

## Mouse Events

```javascript
element.addEventListener('click', (e) => { });       // Single click
element.addEventListener('dblclick', (e) => { });   // Double click
element.addEventListener('mousedown', (e) => { });  // Mouse button pressed
element.addEventListener('mouseup', (e) => { });    // Mouse button released
element.addEventListener('mousemove', (e) => { });   // Mouse moved
element.addEventListener('mouseenter', (e) => { }); // Mouse enters element
element.addEventListener('mouseleave', (e) => { }); // Mouse leaves element
element.addEventListener('mouseover', (e) => { });  // Mouse enters (bubbles)
element.addEventListener('mouseout', (e) => { });   // Mouse leaves (bubbles)

// Mouse position
e.clientX;  // Relative to viewport
e.clientY;
e.pageX;    // Relative to document
e.pageY;
e.offsetX;  // Relative to element
e.offsetY;
e.button;    // 0=left, 1=middle, 2=right
```

## Keyboard Events

```javascript
document.addEventListener('keydown', (e) => { });   // Key pressed
document.addEventListener('keyup', (e) => { });    // Key released
document.addEventListener('keypress', (e) => { });  // Character typed (deprecated)

// Key properties
e.key;       // 'a', 'Enter', 'ArrowUp', etc.
e.code;      // 'KeyA', 'Enter', 'ArrowUp', etc.
e.keyCode;   // Deprecated, use e.key instead
e.ctrlKey;   // Was Ctrl pressed?
e.shiftKey;  // Was Shift pressed?
e.altKey;    // Was Alt pressed?
e.metaKey;   // Was Cmd/Meta pressed?
```

## Form Events

```javascript
form.addEventListener('submit', (e) => { 
  e.preventDefault(); // Prevent form submission
});

input.addEventListener('input', (e) => { 
  // Fires on every keystroke
  console.log(e.target.value);
});

input.addEventListener('change', (e) => { 
  // Fires when input loses focus after value changed
});

input.addEventListener('focus', (e) => { });
input.addEventListener('blur', (e) => { });
```

## Event Propagation

Events bubble up through the DOM tree:

```javascript
// child -> parent -> ... -> document

// Stop propagation
element.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop bubbling
});

// Stop all handling of this event
element.addEventListener('click', (e) => {
  e.stopImmediatePropagation(); // Stop and prevent other listeners
});
```

### Capture Phase
Events also travel down (capture phase) before bubbling up:

```javascript
element.addEventListener('click', handler, true); // capture: true
```

Order: window -> ... -> target -> ... -> window

## Event Delegation

Attach one listener to parent instead of many to children:

```javascript
// Bad: listener on each item
items.forEach(item => {
  item.addEventListener('click', handleClick);
});

// Good: single listener on parent
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    handleClick(e.target);
  }
});
```

## Preventing Default Behavior

```javascript
// Prevent link navigation
link.addEventListener('click', (e) => {
  e.preventDefault();
  // Custom behavior
});

// Prevent form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form data manually
});

// Prevent right-click
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
```

## Custom Events

```javascript
// Create and dispatch
const event = new CustomEvent('myEvent', {
  detail: { data: 'some data' }
});
element.dispatchEvent(event);

// Listen for it
element.addEventListener('myEvent', (e) => {
  console.log(e.detail.data); // 'some data'
});
```

## Touch Events (Mobile)

```javascript
element.addEventListener('touchstart', (e) => {
  e.touches;        // All touch points
  e.changedTouches; // Touches that changed
  e.touches[0].clientX; // Touch position
});

element.addEventListener('touchmove', (e) => { });
element.addEventListener('touchend', (e) => { });
```

## Window Events

```javascript
window.addEventListener('load', () => { });           // Page fully loaded
window.addEventListener('DOMContentLoaded', () => { }); // DOM ready
window.addEventListener('resize', () => { });         // Window resized
window.addEventListener('scroll', () => { });         // Page scrolled
window.addEventListener('beforeunload', (e) => { });  // Before leaving page
```
