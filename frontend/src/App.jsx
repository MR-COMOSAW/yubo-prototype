import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import SwipePage from './pages/SwipePage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
export default function App(){ return (<BrowserRouter><Routes>
<Route path='/' element={<LoginPage/>}/>
<Route path='/signup' element={<SignupPage/>}/>
<Route path='/swipe' element={<SwipePage/>}/>
<Route path='/chat' element={<ChatPage/>}/>
<Route path='/profile' element={<ProfilePage/>}/>
</Routes></BrowserRouter>); }