import React from 'react'
import {  Star, Heart, Truck, RotateCcw, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';


function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#c8a165] to-[#b38c50] text-white pt-12 pb-6 mt-auto">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-serif mb-4">Kharidoo</h3>
              <p className="text-sm text-gray-200 mb-4">
                Discover the finest collection of Cloths and accessories. Each piece tells a unique story of elegance and craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Our Collections</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Blog & News</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Gift Cards</a></li>
                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm">Mumbai, Maharashtra</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">kharidoo@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-serif mb-4">Newsletter</h3>
              <p className="text-sm text-gray-200 mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2"
                />
                <button className="bg-white text-[#c8a165] px-4 rounded-r-lg hover:bg-gray-100 transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-200 mb-4 md:mb-0">
                © {new Date().getFullYear()} Your Brand. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-gray-200 hover:text-white transition-colors">Shipping Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer