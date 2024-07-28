import React, {useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useLogin } from '../context/LoginContext';



export const Logout = ()=> {
    
    const navigate = useNavigate();
    const { LogoutUser } = useLogin();
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])
    return (
        navigate("/")
    )
}
