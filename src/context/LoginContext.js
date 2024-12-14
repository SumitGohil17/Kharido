import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import reducer from '../reducer/productReducer'
import { type } from '@testing-library/user-event/dist/cjs/utility/type.js';
const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));
  // const [islog , setIslog] = useState( !!Cookies.get('token'))
  const [username, setUsername] = useState('');
  const [isLogged, setisLogged] = useState(Cookies.get('token'));
  const [user, setUser] = useState('')
  const [products, setProducts] = useState([]);

  const initialstate = {
    singleProduct: [{}]
  }

  const [state, dispatch] = useReducer(reducer, initialstate)

  const Storetoken = (serverToken) => {
    return Cookies.set("token", serverToken, { expires: 20 })
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

  const userAuthentication = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/auth/getUser`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${isLogged}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.userData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  let Api = `${process.env.REACT_APP_PRODUCT_API}/api/name?nameType=Men`;

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

  const getSingleProduct = async (url) => {
    try {
      let res = await axios.get(url);
      let product = await res.data;
      console.log('Product Data:', product);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product })
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userAuthentication()
    fetchApiData(Api);
  }, []);

  return (
    <LoginContext.Provider value={{ ...state, getSingleProduct, isLog, products, user, Storetoken, isLoggedIn, showLogin, showLogin, setShowLogin, username, setUsername, LogoutUser }}>
      {children}
    </LoginContext.Provider>
  );
};