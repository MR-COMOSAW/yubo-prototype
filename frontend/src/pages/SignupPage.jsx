import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const BACKEND_URL='https://yubo-prototype.onrender.com';
export default function SignupPage(){
  const [name,setName]=useState('');const [email,setEmail]=useState('');const [password,setPassword]=useState('');const navigate=useNavigate();
  const handleSignup=async()=>{try{await axios.post(`${BACKEND_URL}/api/auth/signup`,{name,email,password});alert('Signup successful!');navigate('/swipe');}catch(err){alert('Signup failed');}};
  return <div className="container"><h1>Sign Up</h1><input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/><input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/><input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/><button onClick={handleSignup}>Sign Up</button><p>Already have an account? <Link to="/login">Login</Link></p></div>;
}