/**
 * Exercise: React Basics
 * Time: 120 minutes
 * 
 * Complete the following tasks:
 * 
 * Note: These are conceptual exercises. Implement in a React environment.
 * 
 * 1. Counter Component with useState
 *    - Create Counter component
 *    - Increment, decrement, reset buttons
 *    - Display count
 * 
 * 2. Form with Controlled Inputs
 *    - Create login form
 *    - Email and password fields
 *    - Validation and submission
 * 
 * 3. Data Fetching with useEffect
 *    - Fetch posts from API
 *    - Display loading state
 *    - Handle errors
 * 
 * 4. React Router Setup
 *    - Define routes for Home, About, Users
 *    - Navigation component
 *    - URL parameters
 */

'use strict';

// These are React code examples - implement in a React environment

// === TASK 1: Counter Component ===
const CounterCode = `
// Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
`;

// === TASK 2: Form Component ===
const FormCode = `
// LoginForm.jsx
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) {
      newErrors.email = 'Invalid email';
    }
    if (password.length < 6) {
      newErrors.password = 'Password too short';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Submit:', { email, password });
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span>{errors.email}</span>}
      
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <span>{errors.password}</span>}
      
      <button type="submit">Login</button>
    </form>
  );
}
`;

// === TASK 3: Data Fetching ===
const DataFetchCode = `
// PostsList.jsx
import { useState, useEffect } from 'react';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
`;

// === TASK 4: React Router ===
const RouterCode = `
// App.jsx with React Router v6
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function User() {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
}

function Users() {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          <Link to={\`/users/\${u.id}\`}>{u.name}</Link>
        </li>
      ))}
    </ul>
  );
}

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
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
`;

console.log('=== React Exercise Reference ===');
console.log('\n--- Task 1: Counter ---');
console.log(CounterCode);

console.log('\n--- Task 2: Form ---');
console.log(FormCode);

console.log('\n--- Task 3: Data Fetching ---');
console.log(DataFetchCode);

console.log('\n--- Task 4: Router ---');
console.log(RouterCode);
