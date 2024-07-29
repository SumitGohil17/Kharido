import axios from "axios";
import Cookies from "js-cookie";

const API_URL = 'https://kharidoo-backend.vercel.app';

export const register =  async (username , password) => {
    return axios.post(`${API_URL}/register` , {username, password});
}

export const login = async (username , password) => {
    try{
    const response = await axios.post(`${API_URL}/login` , {username, password}, {withCredentials : true});
    if(response.ok){
        Cookies.set('token', response.data.token);
        return response.data
    } 
  } catch (error) {
    console.log(error);
  }
}

export const getProtectedData = async () => {
    return axios.get(`${API_URL}/protected-route`, { withCredentials: true });
}; 