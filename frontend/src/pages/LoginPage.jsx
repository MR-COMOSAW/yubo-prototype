import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const BACKEND_URL='https://yubo-prototype.onrender.com';
export default function LoginPage(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleLogin=async()=>{try{await axios.post(`${BACKEND_URL}/api/auth/login`,{email,password});alert('Login successful!');navigate('/swipe');}catch(err){alert('Login failed');}};
  return <div className="container"><h1>Login</h1><input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><button onClick={handleLogin}>Login</button><p>Don't have an account? <Link to="/signup">Sign Up</Link></p></div>;
}