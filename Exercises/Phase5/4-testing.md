# Testing with Jest

## Setup

```bash
npm install --save-dev jest
```

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverage: true
};
```

---

## Basic Tests

```javascript
const { add, subtract } = require('./math');

describe('Math functions', () => {
  test('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  test('subtracts numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
```

---

## Matchers

### Equality
```javascript
expect(value).toBe(5);           // === (primitive)
expect(value).toEqual(obj);      // Deep equality
expect(value).toStrictEqual(obj); // Exact match
expect(value).not.toBe(0);
```

### Truthiness
```javascript
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();
```

### Numbers
```javascript
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3);
expect(value).toBeLessThan(3);
expect(value).toBeLessThanOrEqual(3);
expect(value).toBeCloseTo(0.3, 5);  // Floating point
```

### Strings
```javascript
expect(str).toMatch(/regex/);
expect(str).toContain('hello');
expect(str).toHaveLength(5);
```

### Arrays
```javascript
expect(arr).toContain(5);
expect(arr).toHaveLength(3);
expect(arr).toEqual(expect.arrayContaining([1, 2]));
```

### Objects
```javascript
expect(obj).toHaveProperty('name');
expect(obj).toHaveProperty('name', 'John');
expect(obj).toMatchObject({ name: 'John' });
```

### Exceptions
```javascript
expect(() => throwError()).toThrow();
expect(() => throwError()).toThrow('specific message');
expect(() => throwError()).toThrow(Error);
```

---

## Setup & Teardown

```javascript
beforeEach(() => { /* run before each test */ });
afterEach(() => { /* run after each test */ });
beforeAll(() => { /* run once before all */ });
afterAll(() => { /* run once after all */ });

beforeEach(() => {
  jest.clearAllMocks();  // Reset mocks
});
```

---

## Async Testing

```javascript
test('fetches data', async () => {
  const data = await fetchData();
  expect(data).toEqual({ id: 1 });
});

test('handles error', async () => {
  await expect(fetchData()).rejects.toThrow('Error');
});

test('resolves to users', () => {
  return expect(fetchUsers()).resolves.toEqual([{ id: 1 }]);
});
```

---

## Mocking

### Functions
```javascript
const mockFn = jest.fn();
mockFn.mockReturnValue(5);
mockFn.mockResolvedValue(5);
mockFn.mockRejectedValue(new Error('Error'));

mockFn('arg1', 'arg2');
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
expect(mockFn).toHaveBeenCalledTimes(1);
```

### Modules
```javascript
jest.mock('./module', () => ({
  fetchData: jest.fn()
}));

import { fetchData } from './module';
```

### Fetch
```javascript
global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: () => Promise.resolve({ id: 1 })
});

// Or with specific responses
global.fetch = jest.fn()
  .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ id: 1 }) })
  .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ id: 2 }) });
```

---

## Spies

```javascript
const obj = {
  method: () => 'original'
};

jest.spyOn(obj, 'method').mockImplementation(() => 'mocked');
expect(obj.method()).toBe('mocked');
obj.method.mockRestore();  // Restore original
```

---

## React Testing

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('handles click', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Click</Button>);
  
  fireEvent.click(screen.getByText('Click'));
  expect(onClick).toHaveBeenCalled();
});
```

### Query Methods
```javascript
screen.getByText('text');           // Find one
screen.getAllByText('text');        // Find all
screen.queryByText('text');         // Null if not found
screen.findByText('text');          // Async, waits

screen.getByRole('button', { name: 'Submit' });
screen.getByLabelText('Email');
screen.getByPlaceholderText('Enter email');
screen.getByTestId('unique-id');
```

---

## Vitest (Modern Jest alternative)

```bash
npm install --save-dev vitest
```

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
```

```javascript
import { describe, it, expect } from 'vitest';

describe('math', () => {
  it('adds', () => {
    expect(1 + 1).toBe(2);
  });
});
```
