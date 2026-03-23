# npm & Build Tools

## npm Basics

### Initialize Project
```bash
npm init -y                    # Create package.json with defaults
npm init                       # Interactive setup
npm install <package>          # Install package
npm install <package> --save   # Save to dependencies
npm install <package> --save-dev  # Save to devDependencies
npm install                    # Install all from package.json
npm install <package>@version  # Install specific version
```

### Common Commands
```bash
npm update                     # Update packages
npm uninstall <package>        # Remove package
npm list                       # List installed packages
npm list --depth=0            # List top-level only
npm outdated                   # Check for updates
npm search <term>              # Search packages
npm info <package>             # Package details
```

### package.json Scripts
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack --mode production",
    "lint": "eslint src/"
  }
}
```

```bash
npm run start
npm run dev
npm test
```

---

## npx

```bash
npx create-react-app my-app     # Create app without global install
npx eslint .                    # Run local eslint
npx jest --coverage             # Run local jest
npx serve .                     # Serve current directory
```

---

## Vite

### Setup
```bash
npm create vite@latest my-app -- --template vanilla
cd my-app
npm install
npm run dev
```

### vite.config.js
```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
```

### Features
- Fast HMR (Hot Module Replacement)
- Native ESM
- TypeScript support out of box
- CSS modules, PostCSS
- Asset handling

---

## Webpack (Alternative)

### Setup
```bash
npm install webpack webpack-cli webpack-dev-server --save-dev
```

### webpack.config.js
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    static: './dist',
    port: 3000
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
};
```

---

## Common Build Tasks

### Transpiling
```javascript
// babel.config.json
{
  "presets": ["@babel/preset-env"]
}
```

### Linting
```javascript
// .eslintrc.json
{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  }
}
```

### Testing Setup
```bash
npm install jest --save-dev
```

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

---

## Dependency Management

### Semantic Versioning
```
major.minor.patch
1.2.3
^1.2.3   # Caret: update minor and patch
~1.2.3   # Tilde: update patch only
1.2.3    # Exact version
```

### Lock Files
- `package-lock.json` - locks exact versions
- Commit to version control
- Run `npm ci` for CI/CD (clean install)

---

## Development vs Production

```javascript
// Process environment
const isDev = process.env.NODE_ENV !== 'production';

// Different configs
const config = isDev ? devConfig : prodConfig;

// .env files
// .env.development
// .env.production
// .env.local (gitignored)
```

### Load env in Vite
```bash
npm install dotenv --save-dev
```

```javascript
// vite.config.js
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

console.log(import.meta.env.VITE_API_URL);
```
