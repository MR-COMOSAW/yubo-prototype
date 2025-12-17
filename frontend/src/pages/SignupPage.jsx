import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://yubo-backend.onrender.com';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signup`, { name, email, password });
      alert('Signup successful!');
      navigate('/swipe');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
