import React, {useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useLogin } from '../context/LoginContext';

const navigate = useNavigate();

export const Logout = ()=> {
    const { LogoutUser } = useLogin();
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser])
    return (
        navigate("/")
    )
}
