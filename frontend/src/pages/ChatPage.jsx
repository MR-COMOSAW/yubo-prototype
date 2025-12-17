import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = 'https://yubo-backend.onrender.com';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/chat`)
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
  }, []);

  const sendMessage = async () => {
    if (!text) return;
    try {
      const res = await axios.post(`${BACKEND_URL}/api/chat`, { text });
      setMessages(prev => [...prev, res.data]);
      setText('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', padding: '5px' }}>
        {messages.map((m, i) => (
          <p key={i}><strong>{m.user}:</strong> {m.text}</p>
        ))}
      </div>
      <input type="text" value={text} onChange={e => setText(e.target
