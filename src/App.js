import React, { createContext, useEffect, useState } from 'react';
import Multiform from './components/Multiform';
import './App.css';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const USER = JSON.parse(sessionStorage.getItem('user'));
    if (USER) {
      setLoggedInUser(USER);
    }
  }, [])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Multiform />
    </UserContext.Provider>
  );
};

export default App;