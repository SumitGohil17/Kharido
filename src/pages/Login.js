import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { useLogin } from '../context/LoginContext'

function Login() {
    const { isLog , Storetoken, setIslog,showLogin, setLogin, setShowLogin, isLoggedIn , setIsLoggedIn } = useLogin();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [register, setRegister] = useState(false);

    const [userLogin , setUserLogin] = useState({
        email : "",
        password : ""
    })

    const [userRegister , setUserRegister] = useState({
        username : "",
        email : "",
        phone : "",
        password: ""
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserLogin({...userLogin , [name] : value})
    
    }

    const handleChangeRegister = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUserRegister({...userRegister , [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(userLogin)
            });
            
            if (response.ok) {
                const data = await response.json();
                Storetoken(data.token);
                alert('Login successfully');
                setUserLogin({
                    email : "",
                    password : ""
                })
                setShowLogin(false);
                window.location.reload();
                
            } else {
                alert("login fails");
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch');
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegister(!register);

        try {
            
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/auth/register`, {
                method: 'POST',
                Credentials:"include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userRegister)
            });
            const data = await response.json();
            
            if (response.ok) {
                alert('register successfully');
                setUserRegister({
                    username : "",
                    email : "",
                    phone : "",
                    password: ""
                })
                setShowLogin(true);
                setRegister(false);
               
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch');
        }
    }
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-xl w-[400px] relative">
                    <div className="absolute top-4 right-4">
                        <button onClick={() => setShowLogin(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {register ? (
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
                            <form onSubmit={handleRegister} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        value={userRegister.username}
                                        onChange={handleChangeRegister}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8a165] focus:border-[#c8a165]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={userRegister.email}
                                        onChange={handleChangeRegister}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8a165] focus:border-[#c8a165]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input 
                                        type="text"
                                        name="phone"
                                        value={userRegister.phone}
                                        onChange={handleChangeRegister}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8a165] focus:border-[#c8a165]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        value={userRegister.password}
                                        onChange={handleChangeRegister}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8a165] focus:border-[#c8a165]"
                                        required
                                    />
                                </div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#c8a165] hover:bg-[#b38f56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c8a165]">
                                    Register
                                </button>
                                <p className="text-center text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <button onClick={handleRegister} className="font-medium text-[#c8a165] hover:text-[#b38f56]">
                                        Sign in
                                    </button>
                                </p>
                            </form>
                        </div>
                    ) : (
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={userLogin.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8a165] focus:border-[#c8a165]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        value={userLogin.password}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#c8a165] focus:border-[#c8a165]"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="h-4 w-4 text-[#c8a165] focus:ring-[#c8a165] border-gray-300 rounded" />
                                        <label className="ml-2 block text-sm text-gray-900">Remember me</label>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-[#c8a165] hover:text-[#b38f56]">
                                        Forgot password?
                                    </a>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#c8a165] hover:bg-[#b38f56] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c8a165]">
                                    Sign in
                                </button>
                                <p className="text-center text-sm text-gray-600">
                                    Don't have an account?{" "}
                                    <button onClick={handleRegister} className="font-medium text-[#c8a165] hover:text-[#b38f56]">
                                        Create Account
                                    </button>
                                </p>
                            </form>
                            <p className="mt-6 text-center text-xs text-gray-500">
                                &copy;2023 Myntra Clone. All rights reserved.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login