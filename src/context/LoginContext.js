import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [token , setToken] = useState(localStorage.getItem("token"))
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
  // const [islog , setIslog] = useState( !!Cookies.get('token'))
  const [username, setUsername] = useState('');

  const [isLogged , setisLogged] = useState(Cookies.get("token"))

  const Storetoken = (serverToken) => {
    return Cookies.set("token", serverToken , {expires: 2/1440})
}


  let isLog = !!isLogged;

  // useEffect(() => {
  //   const token = Cookies.get('token');
  //   if (token) {
  //     setIslog(true);
  //   }
  // },[])

//   const setLogin = (show) => {
//     setIslog(show);
// };

  const LogoutUser = () => {
    setIsLoggedIn(" ");
    localStorage.removeItem("token");
  }

  return (
    <LoginContext.Provider value={{isLog , Storetoken,   isLoggedIn, showLogin,showLogin, setShowLogin , username, setUsername , LogoutUser }}>
      {children}
    </LoginContext.Provider>
  );
};