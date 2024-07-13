import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/userSlice';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserSearch;