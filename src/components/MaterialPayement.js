import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { Button } from './ui/button';

function MaterialPayemnet({ amount, selected, measurementDetails,setMeasurementDetails, title, images, product_id }) {

    const [isLogg, setIsLogg] = useState(Cookies.get('token'));

    const handlePayment = async (e) => {
        e.preventDefault();


        const totalamount = parseInt(amount) + 400;
        try {
            try {
                const data = {
                    shopName: selected.name,
                    shopAddress: selected.address,
                    shopMobile: selected.phone,
                    measurements: {
                        waist: parseInt(measurementDetails.waist),
                        bust: parseInt(measurementDetails.bust),
                        hip: parseInt(measurementDetails.hips)
                    },
                    productId: product_id,
                    productName: title,
                    productImage: images,
                    price: amount
                }
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/dress/addDress`, data, {
                    headers: {
                        Authorization: `${isLogg}`,
                        'Content-Type': 'application/json'
                    }
                });
                if (response.data.success) {
                    alert("Order placed successfully");
                    setMeasurementDetails({
                        waist: '',
                        bust: '',
                        hips: '',
                    });
                } 
            } catch (error) {
                console.error('Error placing order:', error);
                alert('Error placing order: ' + error.message);
            }


            const orderResponse = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/payment/create-order`, { amount: totalamount });
            const { orderId } = orderResponse.data;

            const options = {
                key: 'rzp_test_AyMdIWw0Bommab',
                amount: totalamount * 100,
                currency: "INR",
                name: "Kharidoo",
                description: `Material Cost: ₹${parseInt(amount)} + Stitching Charges: ₹400`,
                orderId: orderId,
                handler: async (response) => {
                    const paymentData = {
                        orderId,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    const result = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/payment/verify-payment`, paymentData);
                    if (result.data.success) {
                        alert('Payment successful!');
                    } else {
                        alert('Payment verification failed. Please try again.');
                    }

                },
                prefill: {
                    name: "Customer Name",
                    email: "customer.email@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Customer address",
                },
                theme: {
                    color: "#F37254",
                },

            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Error creating payment order:', error);
            alert('There was an error creating the payment order. Please try again.');
        }
    }

    return (
        <div onClick={handlePayment}>
            <Button className='border-2 border-[#c8a165] bg-white text-black hover:bg-[#c8a165] hover:text-white'>Pay (₹{parseInt(amount) + 400})</Button>
        </div>
    )
}

export default MaterialPayemnet