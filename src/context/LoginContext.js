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

  const [isLogged , setisLogged] = useState(Cookies.get('token'));
  const [user , setUser] = useState('')
  const [products, setProducts] = useState([]);

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

  const userAuthentication = async ()=> {
    try{
    const response = await fetch('https://kharidoo-backend.vercel.app/api/auth/getUser' , {
      method : 'GET',
      headers : {
        Authorization : `Bearer ${isLogged}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      setUser(data.userData)
    }
  }catch(error) {
    console.log(error)
  }
  }

  let Api = "https://practice2-rho.vercel.app/api/name?nameType=Men";

  const fetchApiData = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userAuthentication()
    fetchApiData(Api);
  }, []);

  return (
    <LoginContext.Provider value={{isLog , products, user,  Storetoken,   isLoggedIn, showLogin,showLogin, setShowLogin , username, setUsername , LogoutUser }}>
      {children}
    </LoginContext.Provider>
  );
};