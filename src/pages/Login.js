import React, { useState } from 'react'

import { useLogin } from '../context/LoginContext'

function Login() {
    const { setShowLogin, isLoggedIn , setIsLoggedIn } = useLogin();

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://kharidoo-backend.vercel.app/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    credentials: 'include'
                },
                body: JSON.stringify({ username, password })
            });
            
            if (response.ok) {
                const data = await response.json();
                alert('Login successfully');
                localStorage.setItem("token", data.token);
                console.log(localStorage.getItem("token", data.token));
                setShowLogin(false);
                setIsLoggedIn(true);
                
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
            
            const response = await fetch('https://kharidoo-backend.vercel.app/register', {
                method: 'POST',
                Credentials:"include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            
            if (response.ok) {
                alert('register successfully');
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
    useEffect(() => {
        if (isLoggedIn) {
            // show user profile, watchlist, bag list
            setShowLogin(false);   // hide login button
            // ... other logic ...
        }
    }, [isLoggedIn]);
    return (
        <div>
            <div className="absolute  flex justify-center items-center bg-opacity-50 z-1">
                <div className="w-full max-w-xs">

                    {register ? (<div className="mt-4">
                        <form method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                            {/* Register form fields */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>

                            <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRegister} >
                                Register
                            </button>
                        </div>
                        </form>
                    </div>) : (<form method='POST' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} >
                        <div className=" absolute flex w-3 h-3 mr-[10px] right-0" onClick={() => setShowLogin(false)}>
                            {/* Close Icon SVG or an image */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                                Sign In
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <div>
                            <p className="text-center text-gray-500 text-xs">Don't have an account? <a className="text-blue-500 underline" onClick={handleRegister}>Create Account</a></p>
                        </div>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2023 Myntra Clone. All rights reserved.
                        </p>
                    </form>)}

                </div>
            </div>
        </div>
    )
}

export default Login