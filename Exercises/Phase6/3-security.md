# Security Best Practices

## XSS (Cross-Site Scripting)

### Prevention
```javascript
// Escape HTML characters
function escapeHtml(str) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  return str.replace(/[&<>"'`]/g, char => map[char]);
}

// Safe DOM rendering
element.textContent = userInput;  // ✅ Safe
element.innerHTML = userInput;    // ❌ Dangerous

// For React (automatic escaping)
return <div>{userInput}</div>;    // ✅ Safe
return <div dangerouslySetInnerHTML={{__html: userInput}} />;  // ⚠️ Dangerous
```

---

## Input Validation

```javascript
// Email validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// URL validation (safe URLs only)
function isSafeUrl(url) {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

// SQL Injection prevention (if building SQL)
function escapeSQL(str) {
  return str.replace(/['"\\]/g, '\\$&');
}

// Use parameterized queries instead of string concatenation
```

---

## CSRF (Cross-Site Request Forgery)

```javascript
// Use SameSite cookies
document.cookie = 'session=xyz; SameSite=Strict';

// Verify origin
function verifyOrigin(req) {
  const origin = req.headers.origin;
  return origin === 'https://your-domain.com';
}

// Use anti-CSRF tokens
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}
```

---

## Rate Limiting

```javascript
class RateLimiter {
  constructor(maxRequests = 100, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }
  
  isAllowed(identifier) {
    const now = Date.now();
    const record = this.requests.get(identifier) || [];
    
    // Remove old requests
    const validRequests = record.filter(
      time => now - time < this.windowMs
    );
    
    if (validRequests.length >= this.maxRequests) {
      this.requests.set(identifier, validRequests);
      return { allowed: false, remaining: 0 };
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return { 
      allowed: true, 
      remaining: this.maxRequests - validRequests.length 
    };
  }
}
```

---

## HTTPS

```javascript
// Force HTTPS
if (location.protocol !== 'https:') {
  location.replace(`https://${location.host}${location.pathname}`);
}

// Secure cookies
document.cookie = 'session=xyz; Secure; HttpOnly; SameSite=Strict';
```

---

## Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'nonce-random123';">
```

---

## Secrets Management

```javascript
// ❌ Never hardcode secrets
const apiKey = 'sk-1234567890abcdef';  // ❌

// ✅ Use environment variables
const apiKey = process.env.API_KEY;

// ✅ Use .env files (gitignore them)
API_KEY=sk-1234567890abcdef

// In Node.js:
require('dotenv').config();
const apiKey = process.env.API_KEY;

// In browser (Vite):
const apiKey = import.meta.env.VITE_API_KEY;
```

---

## Dependency Security

```bash
# Check for vulnerabilities
npm audit
npm audit fix

# Use lockfile
npm ci  # Clean install from lockfile
```

---

## Common Security Checklist

1. ✅ Validate and sanitize ALL input
2. ✅ Escape output appropriately
3. ✅ Use HTTPS everywhere
4. ✅ Set secure cookie flags
5. ✅ Implement rate limiting
6. ✅ Use Content Security Policy
7. ✅ Keep dependencies updated
8. ✅ Never expose secrets
9. ✅ Use parameterized queries
10. ✅ Log security events

---

## Helmet.js (Express Security)

```javascript
const helmet = require('helmet');
app.use(helmet());

// Specific headers
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted-cdn.com']
  }
}));
```
