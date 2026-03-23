# Regular Expressions

## Basics

```javascript
const pattern = /pattern/flags;
const pattern = new RegExp('pattern', 'flags');
```

### Flags
```javascript
/i   // Case insensitive
/g   // Global (find all matches)
//m   // Multiline
/s   // Dotall (. matches newlines)
//u   // Unicode
/y   // Sticky
```

---

## Character Classes

```javascript
.        // Any character except newline
\d       // Digit [0-9]
\D       // Not a digit [^0-9]
\w       // Word character [A-Za-z0-9_]
\W       // Not a word character
\s       // Whitespace
\S       // Not whitespace
[abc]    // Any of a, b, or c
[^abc]   // Not a, b, or c
[a-z]    // Range: a to z
[A-Z0-9] // Multiple ranges
```

---

## Quantifiers

```javascript
*        // 0 or more
+        // 1 or more
?        // 0 or 1
{3}      // Exactly 3
{3,}     // 3 or more
{3,5}    // 3 to 5
*?       // 0 or more (lazy)
+?       // 1 or more (lazy)
??       // 0 or 1 (lazy)
```

---

## Anchors

```javascript
^        // Start of string (or line with /m)
$        // End of string (or line with /m)
\b       // Word boundary
\B       // Not word boundary
(?=x)    // Positive lookahead
(?!x)    // Negative lookahead
(?<=x)   // Positive lookbehind
(?<!x)   // Negative lookbehind
```

---

## Groups

```javascript
(abc)           // Capture group
(?:abc)         // Non-capturing group
\n              // Backreference to group n
(?<name>abc)    // Named capture group
```

---

## Common Patterns

### Email
```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### URL
```javascript
/https?:\/\/[^\s/$.?#].[^\s]*/
```

### Phone (US)
```javascript
/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/
```

### Date (YYYY-MM-DD)
```javascript
/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
```

### Time (HH:MM:SS)
```javascript
/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
```

### Password (8+ chars, 1 upper, 1 lower, 1 number)
```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
```

### Hex Color
```javascript
/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
```

### IPv4 Address
```javascript
/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/
```

---

## Methods

### String Methods
```javascript
'string'.match(/pattern/);      // Match results or null
'string'.matchAll(/pattern/);   // Iterator of matches
'string'.search(/pattern/);     // Index of match or -1
'string'.replace(/pattern/, 'replacement');
'string'.replaceAll(/pattern/, 'replacement');
'string'.split(/pattern/);
```

### RegExp Methods
```javascript
/pattern/.test('string');       // true or false
/pattern/.exec('string');       // Match info or null
```

---

## Examples

### Finding
```javascript
'Hello World'.match(/o/);        // ['o']
'Hello World'.match(/o/g);       // ['o', 'o']
'Hello World'.match(/o/gi);       // ['o', 'o', 'O']
```

### Replacing
```javascript
'Hello World'.replace(/World/, 'JavaScript');  // 'Hello JavaScript'
'Hello World'.replace(/\w+/g, 'X');            // 'XXXX XXXX'

// With capture groups
'John Doe'.replace(/(\w+) (\w+)/, '$2 $1');    // 'Doe John'

// With function
'32°C 45°C'.replace(/\d+/g, (match) => 
  `${Math.round((match * 9/5) + 32)}°F`
);  // '89.6°F 113°F'
```

### Extracting
```javascript
const text = 'Call 123-456-7890 or 098-765-4321';
const phones = text.match(/\d{3}-\d{3}-\d{4}/g);
// ['123-456-7890', '098-765-4321']
```

### Validation
```javascript
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### Lookahead/Lookbehind
```javascript
// Positive lookahead: 'x' followed by 'y' (not including 'y')
'xy'.match(/x(?=y)/);  // ['x']

// Negative lookahead: 'x' not followed by 'y'
'xz'.match(/x(?!y)/);  // ['x']

// Positive lookbehind: 'y' preceded by 'x' (not including 'x')
'xy'.match(/(?<=x)y/);  // ['y']
```

### Named Groups
```javascript
const date = '2024-01-15';
const { year, month, day } = date.match(
  /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
).groups;
// { year: '2024', month: '01', day: '15' }
```

---

## Common Mistakes

```javascript
// ❌ Greedy vs Lazy
'12345'.match(/\d+/);     // ['12345'] (greedy)
'12345'.match(/\d+?/);    // ['1'] (lazy)

// ✅ Correct quantifier for optional parts
/\d+-?\d+/;               // With or without hyphen
/\d+(?:-\d+)?/;           // Hyphenated or not

// ✅ Escape special characters
/\?/;                     // Match ?
/\[/;                     // Match [
/\\n/;                    // Match \n
```
