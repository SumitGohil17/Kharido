import React, { useState } from 'react'
import Login from '../pages/Login';
import { useLogin } from '../context/LoginContext';
import { NavLink } from 'react-router-dom';

function NavSideMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginPage, setLoginPage] = useState(false);
  const { isLoggedIn, username, setShowLogin } = useLogin();

  const toggleLoginPage = () => {
    setLoginPage(!showLoginPage);
  }



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="container sticky top-0 2xl:w-[100%] xl:w-[100%] lg:w-[100%] mx-auto max-w-[100%] h-[50px] bg-[#fff] sm:ml-[5px] contenthide z-10 ">
      <div className='flex 2xl:grid xl:grid grid-cols-2 lg:flex h-full mx-6 right-0 '>
        {/* <div className=" w-[30px] h-[30px] mt-1 items-center cursor-pointer sm:hidden" onClick={toggleMenu}>
          <div className="w-[30px] h-[5px] bg-black rounded-[6px] mb-1"></div>
          <div className="w-[30px] h-[5px] bg-black rounded-[6px] mb-1"></div>
          <div className="w-[30px] h-[5px] bg-black rounded-[6px]"></div>
        </div>
        {isMenuOpen && (
          <div className='absolute top-[50px] left-0 bg-white shadow-md'>
            <ul className='flex flex-col items-start p-4'>
              <li className='my-2'>Home</li>
              <li className='my-2'>About</li>
              <li className='my-2'>Services</li>
              <li className='my-2'>Contact</li>
            </ul>
          </div>
        )} */}
        <div className="w-[30px] h-[30px] mt-1 items-center cursor-pointer sm:hidden" onClick={toggleMenu}>
          <div className={`w-[30px] h-[5px] border border-black rounded-[6px] mb-1 transform transition duration-300 ease ${isMenuOpen ? 'rotate-45  translate-y-2.5' : ''}`}></div>
          <div className={`w-[30px] h-[5px] border border-black rounded-[6px] mb-1 ${isMenuOpen ? ' opacity-0' : ' '}`}></div>
          <div className={`w-[30px] h-[5px] border border-black rounded-[6px] transform transition duration-300 ease ${isMenuOpen ? '-rotate-45  -translate-y-2.5' : ''}`}></div>
        </div>
        {isMenuOpen && (
          <div className='absolute top-[50px] left-0 bg-white shadow-md w-full transition-all duration-[2s] ease-in-out sm:w-auto'>
            <ul className='flex flex-col items-start p-4'>
              <li className='my-2'>Home</li>
              <li className='my-2'>About</li>
              <li className='my-2'>Services</li>
              <li className='my-2'>Contact</li>
            </ul>
          </div>
        )}
        <div className=' h-full justify-center items-center '>
          <ul className=' absolute flex float-right  h-full  text-[#282c3f] tracking-[.3px] sent right-0 items-center'>
            <li className='mr-6'>
              <div className="flex items-center my-[10px] bg-[#EEEEEE] rounded-[5px]">
                <svg
                  class="w-5 h-5 text-gray-500 ml-4 md:block hidden"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <input
                  class="w-full bg-[#EEEEEE] py-2 px-4 leading-tight focus:outline-none md:block hidden "
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </li>
            {isLoggedIn ? (
             <>
             <button className="bg-slate-300 rounded-[5px] w-[40px] h-[30px] mr-4" onClick={() => setShowLogin(true)}>Login</button>
           </> 
            ) : (
              <>

              <li
                className="w-max top-0 mb-1 font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1 block md:hidden "
              >
                <div className="md:hidden block">
                  <span className='text-lg block '><img src="./icons8-search.svg" alt="" className="w-[30px] h-[30px]" /></span>

                </div>
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1'

              >
                <h1 className=' text-center pr-[4px] text-xs relative'> <span className='text-lg flex justify-center'><img src="./images/profile.png" alt="" className="w-[30px] h-[30px] justify-center" /></span> <span className='flex justify-center'>{username}</span> </h1>
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

                <h1 className='text-xs pr-[4px] text-center relative'> <span className='text-lg flex justify-center'><img src="./images/heart.png" alt="" className="w-[30px] h-[30px] justify-center" /></span > <span className='flex justify-center'>Wishlist</span></h1>
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

                <h1 className='pr-[4px] text-xs text-center relative'><span className='text-lg flex justify-center'><img src="./images/shopping-bag.png" alt="" className="w-[30px] h-[30px] justify-center" /></span> <span className='flex justify-center'>Bag</span></h1>
              </li>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >
                  <NavLink to="/logout">Logout</NavLink>
              </li>
              
            </>
            )

            }
            {setShowLogin && <Login />}
            {/* <li
              className="w-max top-0 mb-1 font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1 block md:hidden "
            >
              <div className="md:hidden block">
                <span className='text-lg block '><img src="./icons8-search.svg" alt="" className="w-[30px] h-[30px]" /></span>

              </div>
            </li>
            <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1'

            >
              <h1 className=' text-center pr-[4px] text-xs relative'> <span className='text-lg flex justify-center'><img src="./images/profile.png" alt="" className="w-[30px] h-[30px] justify-center" /></span> <span className='flex justify-center'>Profile</span> </h1>
            </li>
            <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

              <h1 className='text-xs pr-[4px] text-center relative'> <span className='text-lg flex justify-center'><img src="./images/heart.png" alt="" className="w-[30px] h-[30px] justify-center" /></span > <span className='flex justify-center'>Wishlist</span></h1>
            </li>
            <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

              <h1 className='pr-[4px] text-xs text-center relative'><span className='text-lg flex justify-center'><img src="./images/shopping-bag.png" alt="" className="w-[30px] h-[30px] justify-center" /></span> <span className='flex justify-center'>Bag</span></h1>
            </li> */}
          </ul>
        </div>

      </div>

    </div>

  )
}

export default NavSideMenu