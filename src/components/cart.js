import React, { useState, useEffect } from 'react'
import { useCard } from '../context/CartContext'
import AddCartToogle from './AddCartToogle';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLogin } from '../context/LoginContext';

function Cart({ close }) {
    // const { cart, removeItem, setIncrease, setDeacrease } = useCard();

    const [ cart, setCartData ] = useState([]);
    const { isLog, isLogged } = useLogin();
    const [isLogg, setIsLogg] = useState(Cookies.get('token'));
    const [loading, setLoading] = useState(true);
    // const totalSum = cart.reduce((acc, product) => acc + (product.totalprice), 0);

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

    return (
        <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="pointer-events-auto w-screen max-w-md">
                            {!isLog ? (
                                <div className='class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl"'>
                                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" onClick={close} class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                    <span class="absolute -inset-0.5"></span>
                                                    <span class="sr-only">Close panel</span>
                                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <h1 className="flex items-center justify-center  text-2xl">Please Login to see your cart</h1>
                                    </div>
                                </div>
                            ) : (
                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" onClick={close} class="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                                                    <span class="absolute -inset-0.5"></span>
                                                    <span class="sr-only">Close panel</span>
                                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="mt-8">
                                            <div class="flow-root">
                                                {loading ? (
                                                    <div className="flex justify-center items-center h-40">
                                                        <svg className="animate-spin h-8 w-8 text-[#c8a165]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    </div>
                                                ) : cart.length === 0 ? (
                                                    <div className="text-center py-8">
                                                        <p className="text-gray-500">Your cart is empty</p>
                                                    </div>
                                                ) : (
                                                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                        {cart.map((product, index) => {
                                                            const totalprice = product.final_price * product.quantity;
                                                            return (
                                                                <li key={index} class="flex py-6">
                                                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img src={product.image} class="h-full w-full object-cover object-center" />
                                                                    </div>

                                                                    <div class="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a href="#">{product.title}</a>
                                                                                </h3>
                                                                                <p class="ml-4">₹{totalprice.toLocaleString()}</p>
                                                                            </div>
                                                                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                                                            <AddCartToogle quantity={product.quantity} />
                                                                        </div>
                                                                        <div class="flex flex-1 items-end justify-between text-sm">
                                                                            <p class="text-gray-500">Qty {product.quantity}</p>

                                                                            <div class="flex">
                                                                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
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

                                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>₹250000</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div class="mt-6">
                                            <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                        </div>
                                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button type="button" onClick={close} class="font-medium text-indigo-600 hover:text-indigo-500">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
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