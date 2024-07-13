import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const { user, status, error } = useSelector((state) => state.user);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    user && (
      <div className='card'>
        <img src={user.avatar_url} alt={user.login} className='logo'/>
        <h2>{user.name}</h2>
        <p>Username: {user.login}</p>
        <p>Followers: {user.followers}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    )
  );
};

export default UserDetails;