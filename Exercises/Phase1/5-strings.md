# String Methods & Manipulation

## Creating Strings

```javascript
const str1 = "Hello";
const str2 = 'World';
const str3 = `Hello ${name}`;  // Template literal
```

## Common String Methods

### Length & Access
```javascript
"hello".length;           // 5
"hello"[0];               // 'h'
"hello".charAt(0);        // 'h'
"hello".charCodeAt(0);    // 104 (Unicode)
```

### Finding
```javascript
"hello".indexOf('l');     // 2 (first occurrence)
"hello".lastIndexOf('l'); // 3 (last occurrence)
"hello".includes('ell');  // true
"hello".startsWith('hel'); // true
"hello".endsWith('llo');   // true
```

### Extracting
```javascript
"hello".substring(1, 4);  // 'ell' (index 1 to 3)
"hello".slice(1, 4);      // 'ell'
"hello".slice(-2);        // 'lo' (last 2 characters)
"hello".slice(1);         // 'ello' (from index 1 to end)
```

### Modifying
```javascript
"hello".toUpperCase();    // 'HELLO'
"hello".toLowerCase();    // 'hello'
"  hello  ".trim();       // 'hello' (remove whitespace)
"  hello  ".trimStart();  // 'hello  '
"  hello  ".trimEnd();    // '  hello'
```

### Replacing
```javascript
"hello".replace('l', 'x');     // 'hexlo' (first match only)
"hello".replace(/l/g, 'x');    // 'hexxo' (all matches)
"hello".replaceAll('l', 'x');  // 'hexxo' (all matches)
```

### Splitting & Joining
```javascript
"hello".split('');        // ['h', 'e', 'l', 'l', 'o']
"hello".split('l');       // ['he', 'o']
"a-b-c".split('-');        // ['a', 'b', 'c']

['a', 'b', 'c'].join('-'); // 'a-b-c'
```

### Padding
```javascript
"5".padStart(3, '0');     // '005'
"5".padEnd(3, '0');       // '500'
```

### Repeating
```javascript
"ha".repeat(3);           // 'hahaha'
```

---

## Template Literals

```javascript
const name = 'John';
const age = 30;

// Basic interpolation
`Hello, ${name}`;              // 'Hello, John'

// Expressions
`Age in 10 years: ${age + 10}`;  // 'Age in 10 years: 40'

// Multi-line
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

---

## Reverse a String

```javascript
// Method 1: Split, reverse, join
const reverse1 = str => str.split('').reverse().join('');

// Method 2: Manual loop
const reverse2 = str => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// Method 3: Spread with reduce
const reverse3 = str => [...str].reduce((acc, char) => char + acc, '');
```

---

## Palindrome Check

```javascript
// Remove non-alphanumeric and check
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
```

---

## Count Vowels

```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// Alternative: regex
function countVowelsRegex(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```
