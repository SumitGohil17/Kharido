import React, { useState, useEffect } from 'react'
import { useCard } from '../context/CartContext'
import AddCartToogle from './AddCartToogle';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLogin } from '../context/LoginContext';
import { useNavigate } from 'react-router';
import PaymentButton from './PaymentButton';

function Cart({ close }) {
    const [cart, setCartData] = useState([]);
    const { isLog, isLogged } = useLogin();
    const [isLogg, setIsLogg] = useState(Cookies.get('token'));
    const [loading, setLoading] = useState(true);
    const [showOrderSummary, setShowOrderSummary] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/card/getCard`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${isLogg}`
                }
            });
            if (response.status === 200) {
                const data = response.data.cartItems;
                setCartData(data);
            } else {
                console.error('Failed to fetch cart data');
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (productId) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BACKEND_API}/api/card/removeCard/${productId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${isLogg}`
                }
            });
            if (response.status === 200) {
                fetchCart(); 
                window.location.reload();
            }
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    const toggleOrderSummary = () => {
        setShowOrderSummary(!showOrderSummary);
    };

    const handleClick = (id) => {
        navigate(`/Men/product/${id}`);
        window.location.reload();
    }

    const totalAmount = cart.reduce((total, product) => total + (product.final_price * product.quantity), 0);

    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="pointer-events-auto w-screen max-w-md">
                            {!isLog ? (
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" onClick={close} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <h1 className="flex items-center justify-center text-2xl">Please Login to see your cart</h1>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between border-b border-gray-200 pb-4">
                                            <h2 className="text-2xl font-bold text-gray-900" id="slide-over-title">Your Shopping Cart</h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button type="button" onClick={close} className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 transition-colors duration-200">
                                                    <span className="absolute -inset-0.5"></span>
                                                    <span className="sr-only">Close panel</span>
                                                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">
                                                {loading ? (
                                                    <div className="flex justify-center items-center h-40">
                                                        <svg className="animate-spin h-10 w-10 text-[#c8a165]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    </div>
                                                ) : cart.length === 0 ? (
                                                    <div className="text-center py-12">
                                                        <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                                        </svg>
                                                        <p className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</p>
                                                        <p className="mt-2 text-gray-500">Start adding items to your cart!</p>
                                                    </div>
                                                ) : (
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cart.map((product, index) => {
                                                            const totalprice = product.final_price * product.quantity;
                                                            return (
                                                                <li key={index} className="flex py-6 hover:bg-gray-50 rounded-lg transition duration-150 p-4" onClick={() => handleClick(product.product_id)}>
                                                                    <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                                                                        <img src={product.image} className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300" />
                                                                    </div>

                                                                    <div className="ml-6 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between">
                                                                                <h3 className="text-lg font-medium text-gray-900 hover:text-[#c8a165] transition-colors">
                                                                                    <a >{product.title}</a>
                                                                                </h3>
                                                                                <p className="ml-4 text-lg font-semibold text-[#c8a165]">₹{totalprice.toLocaleString()}</p>
                                                                            </div>
                                                                            <p className="mt-2 text-sm text-gray-600">Premium Quality</p>
                                                                            <div className="mt-2">
                                                                                <AddCartToogle quantity={product.quantity} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-600 font-medium">Quantity: {product.quantity}</p>

                                                                            <div className="flex">
                                                                                <button 
                                                                                    type="button" 
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        removeFromCart(product.product_id);
                                                                                    }}
                                                                                    className="flex items-center text-red-500 hover:text-red-700 font-medium transition-colors"
                                                                                >
                                                                                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                                    </svg>
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fixed bottom-0 right-0 w-full max-w-md bg-white border-t border-gray-200 shadow-lg">
                                        <button
                                            onClick={toggleOrderSummary}
                                            className="w-full p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <span className="font-bold text-gray-900">Order Summary</span>
                                            <svg
                                                className={`w-6 h-6 transform transition-transform ${showOrderSummary ? '' : 'rotate-180'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {showOrderSummary && (
                                            <div className="p-4 space-y-4 bg-white">
                                                <div className="flex justify-between text-base">
                                                    <p className="text-gray-700">Total Items:</p>
                                                    <p className="font-bold">{cart.length}</p>
                                                </div>
                                                <div className="flex justify-between text-base">
                                                    <p className="text-gray-700">Total Amount:</p>
                                                    <p className="font-bold text-[#c8a165]">
                                                        ₹{totalAmount.toLocaleString()}
                                                    </p>
                                                </div>
                                                <PaymentButton amount={totalAmount}/>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart