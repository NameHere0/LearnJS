# React Fundamentals

## Setup

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

---

## JSX

```jsx
// Basic JSX
const element = <h1>Hello, world!</h1>;

// Expressions in JSX
const name = 'John';
const element = <p>Hello, {name}!</p>;

// Attributes
const element = <div className="container" id="main" />;

// Self-closing
const element = <img src="url" alt="desc" />;

// Fragments
const element = (
  <>
    <p>First</p>
    <p>Second</p>
  </>
);
```

---

## Components

```jsx
// Function component
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Arrow function component
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;

// Using component
<Welcome name="John" age={30} />
```

---

## useState

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(c => c - 1)}>Subtract</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Object state
const [user, setUser] = useState({ name: '', email: '' });
setUser(prev => ({ ...prev, name: 'John' }));
```

---

## useEffect

```jsx
import { useState, useEffect } from 'react';

function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/data');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);  // Empty array = run once on mount
  
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;
  
  return <div>{JSON.stringify(data)}</div>;
}

// Cleanup
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);
```

---

## useRef

```jsx
import { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  return <input ref={inputRef} />;
}

// Track previous value
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();
  
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  
  return (
    <div>
      <p>Now: {count}, Before: {prevCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Add</button>
    </div>
  );
}
```

---

## Custom Hooks

```jsx
// useLocalStorage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed');
        return res.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading, error };
}
```

---

## React Router v6

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <p>User ID: {id}</p>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}
```

---

## Conditional Rendering

```jsx
// Ternary
{isLoggedIn ? <Dashboard /> : <Login />}

// && (render if true)
{showMessage && <Message />}

// Switch
{status === 'loading' && <Loader />}
{status === 'error' && <Error />}
{status === 'success' && <Data />}
```

---

## Lists and Keys

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
```

---

## Forms

```jsx
function Form() {
  const [values, setValues] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <span>{errors.name}</span>}
      
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## Context

```jsx
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Main />
    </ThemeContext.Provider>
  );
}

function Main() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div className={theme}>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
```
