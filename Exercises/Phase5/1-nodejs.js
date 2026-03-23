/**
 * Exercise: Node.js Basics
 * Time: 90 minutes
 * 
 * Complete the following tasks:
 * 
 * 1. File System Operations
 *    - Read a file using fs module
 *    - Write to a file
 *    - Append to a file
 *    - Handle errors
 * 
 * 2. HTTP Server
 *    - Create a simple HTTP server
 *    - Handle different routes (/, /about, /json)
 *    - Return appropriate responses
 * 
 * 3. Command-Line Tool
 *    - Create a CLI tool that accepts arguments
 *    - Process and output data
 *    - Handle flags and options
 */

'use strict';

// Node.js modules (built-in, no install needed)
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

// === TASK 1: File System Operations ===
async function fileOperations() {
  const filePath = path.join(__dirname, 'test.txt');
  const content = 'Hello, Node.js!\n';
  
  // Write file
  // Your code here
  // fs.writeFileSync or fs.promises.writeFile
  
  // Read file
  // Your code here
  // fs.readFileSync or fs.promises.readFile
  
  // Append to file
  // Your code here
  
  // Delete file
  // Your code here
  
  // Copy file
  // Your code here
  
  console.log('File operations completed');
}


// === TASK 2: HTTP Server ===
function createServer() {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Your code here
    // Handle routes:
    // / -> "Welcome to my server!"
    // /about -> "About page"
    // /json -> Return JSON { message: "Hello", timestamp: Date.now() }
    // 404 -> "Page not found"
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server response');
  });
  
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
  
  return server;
}


// === TASK 3: Command-Line Tool ===
function parseArguments() {
  // Simulate: node cli.js greet --name John --uppercase
  const args = process.argv.slice(2);
  const flags = {};
  
  // Your code here
  // Parse: --flag value or --flag
  // Expected result: { command: 'greet', name: 'John', uppercase: true }
  
  // Example parsing:
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const flag = args[i].slice(2);
      if (args[i + 1] && !args[i + 1].startsWith('--')) {
        flags[flag] = args[i + 1];
        i++;
      } else {
        flags[flag] = true;
      }
    } else if (!flags.command) {
      flags.command = args[i];
    }
  }
  
  return flags;
}

function runCLI() {
  const flags = parseArguments();
  
  // Your code here
  // If command is 'greet':
  // - Output "Hello, {name}!" (uppercase if --uppercase flag)
  
  console.log('Parsed flags:', flags);
  
  if (flags.command === 'greet') {
    let greeting = `Hello, ${flags.name || 'World'}!`;
    if (flags.uppercase) {
      greeting = greeting.toUpperCase();
    }
    console.log(greeting);
  }
}


// Run tests
console.log('=== Task 1: File Operations ===');
fileOperations().then(() => {
  console.log('\n=== Task 2: HTTP Server ===');
  console.log('Run: node Exercises/Phase5/1-nodejs.js to start server');
  
  console.log('\n=== Task 3: CLI Tool ===');
  runCLI();
});
