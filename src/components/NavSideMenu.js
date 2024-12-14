import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Cookies from 'js-cookie';
import { useLogin } from '../context/LoginContext';
import { NavLink } from 'react-router-dom';
import Cart, { CartLengthContext } from './cart';
import { ShoppingCart, User, Search, ChevronDown, Star, Heart, Truck, RotateCcw } from 'lucide-react';
import SideDrawer from './SideDrawer';

function NavSideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginPage, setLoginPage] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { isLog, user, setIslog, setLogin, showLogin, isLoggedIn, username, setShowLogin } = useLogin();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const toggleLoginPage = () => {
    setLoginPage(!showLoginPage);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const response = await fetch(`${process.env.REACT_APP_PRODUCT_API}/api/search?query=${query}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error searching:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="sticky  right-0 top-0 2xl:w-[100%]  xl:w-[100%] lg:w-[100%] mx-auto w-[100%] bg-[#fff] contenthide z-10 ">
      <header className="bg-white py-4 px-6 flex items-center justify-between">
        <div className='w-[30px] h-[30px] mt-1 items-center cursor-pointer sm:hidden' onClick={toggleMenu}>
          <div className={`w-[30px] h-[5px] border border-black rounded-[6px] mb-1 transform transition duration-300 ease ${isMenuOpen ? 'rotate-45  translate-y-2.5' : ''}`}></div>
          <div className={`w-[30px] h-[5px] border border-black rounded-[6px] mb-1 ${isMenuOpen ? ' opacity-0' : ' '}`}></div>
          <div className={`w-[30px] h-[5px] border border-black rounded-[6px] transform transition duration-300 ease ${isMenuOpen ? '-rotate-45  -translate-y-2.5' : ''}`}></div>
        </div>
        {isMenuOpen && (
          <div className='absolute top-[50px] left-0 bg-white shadow-md w-full transition-all duration-[2s] ease-in-out sm:w-auto'>
            <ul className='flex flex-col items-start p-4'>
              <NavLink to='/' onClick={handleNavLinkClick}><li className='my-2'>Home</li></NavLink>
              <NavLink to='/Men' onClick={handleNavLinkClick}> <li className='my-2'>Men</li></NavLink>
              <NavLink to='/Women' onClick={handleNavLinkClick}> <li className='my-2' >Women</li></NavLink>
              <NavLink to='/dress/dress Material' onClick={handleNavLinkClick}> <li className='my-2' >Dress Material</li></NavLink>
            </ul>
          </div>
        )}

        <nav className=" items-center space-x-6 hidden sm:flex">
          <NavLink to='/'><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></NavLink>
          <NavLink to='/Men'><a href="#" className="text-gray-700 hover:text-gray-900">Men</a></NavLink>
          <NavLink to='/Women'> <a href="#" className="text-gray-700 hover:text-gray-900">Women</a></NavLink>
          <NavLink to='/dress/dress Material'><a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
            Dress material
          </a></NavLink>
        </nav>
        <div className=" flex text-2xl font-serif cursor-pointer" onClick={() => navigate('/')}>
          <span className="text-2xl font-serif tracking-wide hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 40"
              width="300"
              height="40"
            >
              <g transform="scale(0.5)">
                {/* Shopping Cart Icon */}
                <path
                  d="M30 70 L50 70 L65 30 L20 30 L15 20 L0 20 M40 80 A5 5 0 1 0 40 70 A5 5 0 1 0 40 80 "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <text x="80" y="60" fontSize="40" fontFamily="Arial, sans-serif" fontWeight="bold">
                  khari
                </text>

                <text x="180" y="60" fontSize="45" fontFamily="Arial, sans-serif" fill="#e0bd8a">
                  doo
                </text>

                <path
                  d="M180 65 Q205 75 230 65"
                  fill="none"
                  stroke="#c8a165"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </span>
        </div >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 40"
          width="100"
          height="40"
          className='flex sm:hidden'
        >

          <g transform="scale(0.4)">
            <path
              d="M30 70 L50 70 L65 30 L20 30 L15 20 L0 20 M40 80 A5 5 0 1 0 40 70 A5 5 0 1 0 40 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />

            <text x="28" y="60" fontSize="30" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#c8a165" >
              K
            </text>
          </g>
        </svg>
        <div>

        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <svg
              className="w-5 h-5 text-gray-500 ml-4 md:hidden block cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            {showMobileSearch && (
              <div className="absolute top-10 -right-[115px] w-screen bg-white p-4 shadow-lg md:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a165]"
                    onBlur={() => {
                      setTimeout(() => {
                        setShowMobileSearch(false);
                      }, 200);
                    }}
                  />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                {searchResults.length > 0 && (
                  <div className="mt-2 max-h-[60vh] overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          navigate(`/products/${result.breadcrumbs[1].name}/${result.breadcrumbs[2].name}`);
                          setSearchResults([]);
                          setSearchQuery('');
                          setShowMobileSearch(false);
                          window.location.reload();
                        }}
                      >
                        <div className="flex items-center p-3 hover:bg-gray-50">
                          <img src={result.images[0]} alt={result.title} className="w-16 h-16 object-cover rounded-lg" />
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{result.title}</h4>
                            <p className="mt-1 text-xs text-gray-500 line-clamp-2">{result.product_description}</p>
                            <div className="mt-1 flex items-center">
                              <span className="text-sm font-medium text-[#c8a165]">₹{result.final_price}</span>
                              {result.inital_price && (
                                <span className="ml-2 text-xs text-gray-500 line-through">₹{result.inital_price}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className='relative hidden md:block'>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-8 pr-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a165] focus:border-transparent"
                onBlur={() => {
                  setTimeout(() => {
                    setSearchResults([]);
                  }, 200);
                }}
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              {searchResults.length > 0 && (
                <div className="absolute z-50 w-[320px] h-[200px] mt-1 bg-white border border-gray-300 rounded-md shadow-lg overflow-y-scroll">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate(`/products/${result.breadcrumbs[1].name}/${result.breadcrumbs[2].name}`);
                        setSearchResults([]);
                        setSearchQuery('');
                        window.location.reload();
                      }}
                    >
                      <div className="flex items-center p-3 hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex-shrink-0">
                          <img src={result.images[0]} alt={result.title} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-1">{result.title}</h4>
                          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{result.product_description || 'No description available'}</p>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm font-medium text-[#c8a165]">₹{result.final_price}</span>
                            {result.inital_price && (
                              <span className="ml-2 text-xs text-gray-500 line-through">₹{result.inital_price}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {isLog ? (
            <>
              <div className="relative">
                <div onClick={() => setIsCartVisible(true)} className="cursor-pointer">
                  <ShoppingCart className="h-5 w-5 text-gray-700" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
                </div>
                {isCartVisible && <Cart close={() => setIsCartVisible(false)} />}
              </div>
              <div className="relative">
                <button onClick={toggleDrawer} className="p-2">
                  <User className="h-6 w-6 text-gray-700" />
                </button>
                <span className="absolute text-black text-xs h-4 w-4 flex items-center justify-center">{user.username}</span>
              </div>
              <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} user={user} /> {/* Render the SideDrawer */}
            </>
          ) : (
            <button onClick={() => setShowLogin(true)} className="bg-[#c8a165] text-white px-4 py-2 rounded">Login</button>
          )}
          {showLogin && <Login />}
        </div>
      </header>
    </div>

  )
}

export default NavSideMenu