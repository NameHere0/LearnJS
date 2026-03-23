/**
 * Exercise: Testing
 * Time: 90 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Unit Tests for Utility Functions
 *    - Test add, subtract, multiply, divide
 *    - Test string utility functions
 *    - Test array manipulation functions
 * 
 * 2. Testing React Components
 *    - Test button click
 *    - Test form input and submission
 *    - Test component renders correctly
 * 
 * 3. Mocking API Calls
 *    - Mock fetch
 *    - Test successful fetch
 *    - Test error handling
 */

'use strict';

// === TASK 1: Unit Tests ===
// Run with: npm test (after installing jest)

// Basic unit test structure
const testExamples = `
describe('Math utilities', () => {
  function add(a, b) { return a + b; }
  function subtract(a, b) { return a - b; }
  function multiply(a, b) { return a * b; }
  function divide(a, b) { return a / b; }
  
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });
  
  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });
  
  test('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
  });
  
  test('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
  });
  
  test('throws on divide by zero', () => {
    expect(() => divide(1, 0)).toThrow();
  });
});
`;


// === TASK 2: Async Tests ===
const asyncTests = `
describe('API calls', () => {
  test('fetches user successfully', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 1, name: 'John' })
    });
    
    const user = await fetchUser(1);
    expect(user.name).toBe('John');
  });
  
  test('handles fetch error', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 404
    });
    
    await expect(fetchUser(999)).rejects.toThrow('User not found');
  });
});
`;


// === TASK 3: React Testing Library ===
const reactTests = `
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

describe('Button', () => {
  test('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
`;


console.log('=== Testing Exercise Reference ===');
console.log('\n--- Task 1: Unit Tests ---');
console.log(testExamples);

console.log('\n--- Task 2: Async Tests ---');
console.log(asyncTests);

console.log('\n--- Task 3: React Tests ---');
console.log(reactTests);

console.log('\nNote: Run tests with npm test after setting up Jest/Vitest');
