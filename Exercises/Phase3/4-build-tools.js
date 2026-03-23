/**
 * Exercise: npm & Build Tools
 * Time: 75 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. Initialize Project
 *    - Run: npm init -y
 *    - Edit package.json fields (name, version, description)
 *    - Add scripts (start, test)
 * 
 * 2. Install and Use Packages
 *    - Install lodash and chalk
 *    - Use lodash for array operations
 *    - Use chalk for colored console output
 * 
 * 3. Set Up Vite
 *    - Create a simple HTML page
 *    - Configure Vite
 *    - Add a script that uses modern JS features
 * 
 * Note: Some tasks require terminal commands, not just code
 */

'use strict';

// === TASK 1: Package.json Configuration ===
// Terminal commands:
// 1. npm init -y
// 2. Edit package.json with:
//    - name: "my-javascript-project"
//    - version: "1.0.0"
//    - description: "A sample project"
//    - Add scripts: { "start": "node index.js" }

const packageJson = {
  // This is what your package.json should look like after editing:
  name: 'my-javascript-project',
  version: '1.0.0',
  description: 'A sample project',
  main: 'index.js',
  scripts: {
    start: 'node index.js',
    dev: 'node --watch index.js',
    test: 'echo "No tests yet"'
  },
  keywords: [],
  author: '',
  license: 'ISC'
};


// === TASK 2: Using npm Packages ===
// Terminal commands:
// 1. npm install lodash chalk
// 2. npm install --save-dev nodemon

// Your code using lodash and chalk:
function demonstratePackages() {
  // Import lodash (after npm install)
  // const _ = require('lodash');
  
  // Use lodash array methods
  const numbers = [1, 2, 3, 4, 5];
  // console.log('Chunked:', _.chunk(numbers, 2));
  // console.log('Shuffled:', _.shuffle(numbers));
  // console.log('Sum:', _.sum(numbers));
  
  // Use chalk (after npm install)
  // const chalk = require('chalk');
  // console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
  // console.log(chalk.green.bold('Success!'));
  // console.log(chalk.red.underline('Error:'));
  
  console.log('Install lodash and chalk to see output');
}


// === TASK 3: Vite Setup (Conceptual) ===
// Terminal commands:
// 1. npm create vite@latest my-app -- --template vanilla
// 2. cd my-app
// 3. npm install
// 4. npm run dev

const viteConfig = {
  // vite.config.js
  code: `import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})`
};


// === TASK 4: ESM vs CJS ===
// Demonstrate both module systems

// CommonJS (Node.js default)
const cjsExample = `
const fs = require('fs');
const path = require('path');

module.exports = { add: (a, b) => a + b };
`;

// ES Modules
const esmExample = `
import fs from 'fs';
import path from 'path';

export const add = (a, b) => a + b;
export default Calculator;
`;

function moduleDemo() {
  console.log('=== CommonJS ===');
  console.log(cjsExample);
  
  console.log('\n=== ES Modules ===');
  console.log(esmExample);
  
  console.log('\nNote: Run terminal commands manually for npm exercises');
}

moduleDemo();
