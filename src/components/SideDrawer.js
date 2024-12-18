import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

const SideDrawer = ({ isOpen, onClose, user }) => {
    const [orders, setOrders] = useState([]);
    const [isLogg] = useState(Cookies.get('token'));
    const [appoinments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/dress/getDress`, {
                    headers: {
                        Authorization: `${isLogg}`
                    }
                });
                setOrders(response.data.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        const fetchAppoinments = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/dress/getbook`, {
                    headers: {
                        Authorization: `${isLogg}`
                    }
                });

                if (response.status === 200) {
                    setAppointments(response.data.data);
                } else {
                    console.log("Failed to fetch appointment data");

                }
            } catch (error) {
                console.log(error);

            }
        }

        if (isOpen) {
            fetchOrders();
            fetchAppoinments();
        }
    }, [isOpen, isLogg]);

    const handleLogout = () => {
        Cookies.remove('token');
        window.location.reload();
    };

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end">
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-6">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                        <div className="w-12 h-12 text-gray-400 flex items-center justify-center text-5xl font-bold">
                            {/* {user.username.charAt(0)} */}
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.username}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="text-sm font-semibold text-gray-600 mb-2">Account Details</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <span className="text-gray-500">Username:</span>
                                <span className="ml-2 font-medium">{user.username}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-gray-500">Email:</span>
                                <span className="ml-2 font-medium">{user.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-gray-600">Your Orders</h3>
                            <span className="bg-[#c8a165] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {orders.length} Orders
                            </span>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {orders.map((order, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                                    <AccordionTrigger className="px-4 py-2 hover:bg-gray-50">
                                        <div className="flex items-center space-x-3 w-full">
                                            <img
                                                src={order.productImage}
                                                alt={order.productName}
                                                className="w-12 h-12 object-cover rounded-md"
                                            />
                                            <div className="flex-1 text-left">
                                                <p className="font-medium text-gray-800">{order.productName}</p>
                                                <p className="text-sm text-gray-500">₹{order.price}</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-4 py-2 bg-gray-50">
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Tailor:</span>
                                                <span className="font-medium">{order.shopName}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Shop Address:</span>
                                                <span className="font-medium">{order.shopAddress}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Contact:</span>
                                                <span className="font-medium">{order.shopMobile}</span>
                                            </div>
                                            <div className="mt-2 pt-2 border-t">
                                                <p className="text-sm font-semibold text-gray-600">Measurements:</p>
                                                <div className="grid grid-cols-3 gap-2 mt-1">
                                                    <div className="text-center p-2 bg-white rounded">
                                                        <p className="text-xs text-gray-500">Bust</p>
                                                        <p className="font-medium">{order.measurements.bust}"</p>
                                                    </div>
                                                    <div className="text-center p-2 bg-white rounded">
                                                        <p className="text-xs text-gray-500">Waist</p>
                                                        <p className="font-medium">{order.measurements.waist}"</p>
                                                    </div>
                                                    <div className="text-center p-2 bg-white rounded">
                                                        <p className="text-xs text-gray-500">Hip</p>
                                                        <p className="font-medium">{order.measurements.hip}"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-sm font-semibold text-gray-600">Your Appointments</h3>
                                        <span className="bg-[#c8a165] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                                            {appoinments.length}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <Accordion type="single" collapsible className="w-full space-y-2">
                                        {appoinments.map((appointment, index) => (
                                            <AccordionItem key={index} value={`appointment-${index}`} className="border rounded-lg shadow-md">
                                                <AccordionTrigger className="px-4 py-2 hover:bg-gray-100">
                                                    <div className="flex items-center space-x-3 w-full">
                                                        <div className="flex-1 text-left">
                                                            <p className="font-semibold text-gray-800">Appointment with {appointment.storeName}</p>
                                                            <p className="text-sm text-gray-500">Date: {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
                                                        </div>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="px-4 py-2 bg-gray-100">
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">Tailor Name:</span>
                                                            <span className="font-medium">{appointment.storeName}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">Date:</span>
                                                            <span className="font-medium">{new Date(appointment.appointmentDate).toLocaleDateString()}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">Address:</span>
                                                            <span className="font-medium">{appointment.storeAddress}</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-600">Mobile Number:</span>
                                                            <span className="font-medium">{appointment.storeMobileNumber}</span>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <button onClick={handleLogout} className="bg-[#c8a165] text-white px-4 py-2 rounded">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer; 