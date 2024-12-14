import React from 'react';
import Cookies from 'js-cookie';

const SideDrawer = ({ isOpen, onClose, user }) => {
    const handleLogout = () => {
        Cookies.remove('token');
        window.location.reload();
      };    
    return (
        <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                            {/* {user.username.charAt(0} */}
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
                    
                    <button onClick={handleLogout} className="bg-[#c8a165] text-white px-4 py-2 rounded">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer; 