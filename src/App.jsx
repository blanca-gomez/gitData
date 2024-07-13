import React from 'react';
import UserSearch from './components/userSearch';
import UserDetails from './components/userDetails';
import './index.css'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <UserSearch />
      <UserDetails />
    </div>
  );
};

export default App;