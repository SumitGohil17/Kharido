// components/Header.js

import { ShoppingCart, User, Search } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white py-4 border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-6">
          <img src="/logo.svg" alt="RadEI" className="h-10" />
          <nav className="hidden md:flex space-x-4 text-sm">
            <a href="#" className="hover:text-yellow-600">Home</a>
            <a href="#" className="hover:text-yellow-600">Shop</a>
            <a href="#" className="hover:text-yellow-600">About Us</a>
            <a href="#" className="hover:text-yellow-600">Pages</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search..." className="border rounded-full px-4 py-1 w-64" />
            <Search className="absolute right-4 top-2 h-5 w-5 text-gray-400" />
          </div>
          <ShoppingCart className="h-6 w-6 text-gray-600" />
          <User className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </header>
  );
}

export default Header;
