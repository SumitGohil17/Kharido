import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin , isLoggedIn, setIsLoggedIn, username, setUsername }}>
      {children}
    </LoginContext.Provider>
  );
};