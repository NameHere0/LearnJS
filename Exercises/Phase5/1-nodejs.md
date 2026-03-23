# Node.js Basics

## Core Modules

```javascript
const fs = require('fs');           // File system
const path = require('path');       // Path manipulation
const http = require('http');        // HTTP server
const https = require('https');     // HTTPS server
const url = require('url');         // URL parsing
const querystring = require('querystring');  // Query string
const os = require('os');          // OS info
const crypto = require('crypto');   // Cryptography
const events = require('events');   // Event emitter
const util = require('util');       // Utilities
```

---

## File System (fs)

### Sync (blocking)
```javascript
const fs = require('fs');

fs.writeFileSync('file.txt', 'Hello');
const content = fs.readFileSync('file.txt', 'utf8');
fs.appendFileSync('file.txt', ' World');
fs.unlinkSync('file.txt');
```

### Async (non-blocking)
```javascript
const fs = require('fs').promises;

await fs.writeFile('file.txt', 'Hello');
const content = await fs.readFile('file.txt', 'utf8');
await fs.appendFile('file.txt', ' World');
await fs.unlink('file.txt');
```

### More fs methods
```javascript
fs.existsSync('path');                    // Check if exists
fs.mkdirSync('dir');                      // Create directory
fs.rmdirSync('dir');                      // Remove directory
fs.readdirSync('dir');                     // List directory
fs.copyFileSync('src', 'dest');           // Copy file
fs.renameSync('old', 'new');              // Rename/move
fs.statSync('file');                      // Get stats
```

---

## Path Module

```javascript
const path = require('path');

path.join('a', 'b', 'c');              // 'a/b/c'
path.resolve('a', 'b');                 // Absolute path
path.dirname('/a/b/c.txt');            // '/a/b'
path.basename('/a/b/c.txt');           // 'c.txt'
path.basename('/a/b/c.txt', '.txt');   // 'c'
path.extname('/a/b/c.txt');            // '.txt'
path.parse('/a/b/c.txt');              // { root, dir, base, ext, name }
```

---

## HTTP Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // req = IncomingMessage
  // res = ServerResponse
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running');
});
```

### Request Object
```javascript
req.method;          // GET, POST, etc.
req.url;             // /path?query
req.headers;         // { host, user-agent, ... }
req.on('data', chunk => {});  // For POST body
```

### Response Object
```javascript
res.writeHead(200, { 'Content-Type': 'application/json' });
res.statusCode = 404;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Not Found</h1>');
```

---

## URL Module

```javascript
const url = require('url');

const parsed = url.parse('http://example.com/path?foo=bar', true);
parsed.hostname;    // 'example.com'
parsed.pathname;    // '/path'
parsed.query;       // { foo: 'bar' }
parsed.search;      // '?foo=bar'
```

---

## Process

```javascript
process.argv;              // Command line arguments
process.env;               // Environment variables
process.cwd();             // Current working directory
process.exit(0);           // Exit with code
process.pid;               // Process ID
process.platform;           // 'darwin', 'linux', 'win32'
process.version;            // Node version

process.on('exit', code => {});       // Clean up
process.on('uncaughtException', err => {});  // Error handling
```

---

## Command Line Arguments

```bash
node app.js --flag value --verbose
```

```javascript
process.argv.slice(2);  // ['--flag', 'value', '--verbose']

// Better: use minimist or yargs
const args = require('minimist')(process.argv.slice(2));
// { flag: 'value', verbose: true }
```

---

## Streams

```javascript
// Readable stream
const readStream = fs.createReadStream('file.txt');
readStream.on('data', chunk => { });
readStream.on('end', () => { });

// Writable stream
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello');
writeStream.end();

// Piping
readStream.pipe(writeStream);
```

---

## Events

```javascript
const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('event', { time: Date.now() });
    }, 1000);
  }
}

const emitter = new MyEmitter();
emitter.on('event', data => console.log(data));
emitter.once('event', data => { });  // One-time listener
emitter.off('event', listener);       // Remove listener
```

---

## Buffers

```javascript
const buf = Buffer.from('Hello');
buf.toString('utf8');           // 'Hello'
buf.toString('hex');             // '48656c6c6f'
Buffer.from('48656c6c6f', 'hex');

Buffer.alloc(10);                // Create buffer
Buffer.from([1, 2, 3]);         // From array
Buffer.concat([buf1, buf2]);     // Concatenate
```

---

## Modules

```javascript
// Export
module.exports = { add, multiply };
// or
exports.add = add;

// Import
const { add } = require('./module');
```

---

## npm Scripts

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  }
}
```

```bash
npm run start
npm test
```
