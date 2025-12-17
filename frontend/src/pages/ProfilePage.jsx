import React,{useEffect,useState} from 'react';
import axios from 'axios';
const BACKEND_URL='https://yubo-prototype.onrender.com';
export default function ProfilePage(){const [profile,setProfile]=useState(null);useEffect(()=>{axios.get(`${BACKEND_URL}/api/profiles/me`).then(res=>setProfile(res.data)).catch(err=>console.log(err));},[]);if(!profile)return <div>Loading...</div>;return <div className="container"><h1>{profile.name}'s Profile</h1><p>Email: {profile.email}</p><p>Age: {profile.age||'N/A'}</p><p>Bio: {profile.bio||'No bio yet'}</p></div>;}