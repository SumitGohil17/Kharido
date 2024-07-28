import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [token , setToken] = useState(localStorage.getItem("token"))
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState('');

  // let isLoggedIn = !!token;

  const LogoutUser = () => {
    setIsLoggedIn(" ");
    localStorage.removeItem("token");
  }

  return (
    <LoginContext.Provider value={{isLoggedIn, showLogin, setShowLogin , username, setUsername , LogoutUser }}>
      {children}
    </LoginContext.Provider>
  );
};