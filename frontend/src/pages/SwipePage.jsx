import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_URL = 'https://yubo-backend.onrender.com';

export default function SwipePage() {
  const [profiles, setProfiles] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/profiles`)
      .then(res => setProfiles(res.data))
      .catch(err => console.log(err));
  }, []);

  const like = () => setIndex(i => i + 1);
  const skip = () => setIndex(i => i + 1);

  if (!profiles.length) return <div>Loading...</div>;
  if (index >= profiles.length) return <div>No more profiles</div>;

  const profile = profiles[index];

  return (
    <div>
      <h2>{profile.name}, {profile.age}</h2>
      <p>{profile.bio}</p>
      <button onClick={skip}>Skip</button>
      <button onClick={like}>Like</button>
    </div>
  );
}
