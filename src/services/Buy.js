import React, { useState } from 'react';
import axios from 'axios';

function Buy({ product }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleBuyClick = () => {
    setIsFormOpen(true);
  };

  const handleOtpSend = async () => {
    // Logic to send OTP
    const response = await axios.post('http://localhost:5000/api/payment/generate-otp', {mobileNumber: phone});
    console.log(response);
    
    setIsOtpSent(true);
    alert('OTP sent to your phone number');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to verify OTP and process the order
    if (otp === '1234') { // Replace '1234' with the actual OTP sent to the user's phone
      // Process the order
      const orderData = {
        product: product,
        address: address,
        email: email,
        phone: phone
      };
      
      // Make an API call to place the order
      fetch('/api/placeOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Order placed:', data);
          // Additional logic after successful order placement
          alert('Order placed successfully!');
        })
        .catch(error => {
          console.error('Error placing order:', error);
          // Handle error scenario
        });
        
    } else {
      alert('Invalid OTP. Please try again.');
    }
    
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <div>
      <button onClick={handleBuyClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Buy
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg p-4">
          <h3 className="text-lg font-bold mb-4">Order Details for {product}</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2">Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Phone Number:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            {isOtpSent ? (
              <div>
                <label className="block mb-2">Enter OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>
            ) : (
              <button type="button" onClick={handleOtpSend} className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                Send OTP
              </button>
            )}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
              Place Order
            </button>
          </form>
          <button onClick={() => setIsFormOpen(false)} className="mt-4 text-red-500">Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Buy;