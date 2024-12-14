import React from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';


function NavBar() {

  return (
    <div id="NavBar" className="!w-[210px] bg-white hidden sm:flex sm:w-[20%]">

      <div className="flex flex-wrap flex-col ml-5 place-items-start content-between w-[200px] ">
        <div class="header" className="  m-2 w-[65px]">
          <img
            class="logo"
            src="/images/shopping-bags-svgrepo-com.svg"
            width="65px"
            alt=""
          />
        </div>
        <div id="sidebar" className="mt-[45px] w-full">
          <ul className="list-none w-full">
            <NavLink to='/'>
              <li className="flex place-items-center mt-[10px] cursor-pointer hover:bg-[#D1E9F6] transition duration-75 ease-in-out rounded-md px-2 py-1">
                <img
                  className="w-[30px] h-[30px] z-1"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold z-1">
                  Home
                </span>
              </li>
            </NavLink>
            <NavLink to="/Men"><li
              className="flex place-items-center mt-[10px] cursor-pointer hover:bg-[#D1E9F6] transition duration-75 ease-in-out rounded-md px-2 py-1"
            >
              <img
                className="w-[30px] h-[30px]"
                src="/icons8-search.svg"
                alt="Search"
              />
              <span className="ml-[10px] font-Podkova font-semibold">
                Men
              </span>
            </li>
            </NavLink>
            <NavLink to='/Women'>
              <li className="flex place-items-center mt-[10px] cursor-pointer hover:bg-[#D1E9F6] transition duration-75 ease-in-out rounded-md px-2 py-1">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/shirt.png"
                  alt="Clothes"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Women
                </span>
                
              </li>
            </NavLink>
            <NavLink to='/Kids'>
              <li className="flex place-items-center mt-[10px] cursor-pointer hover:bg-[#D1E9F6] transition duration-75 ease-in-out rounded-md px-2 py-1">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Kids
                </span>
              </li>
            </NavLink>
            <NavLink to='/Beauty'>
              <li className="flex place-items-center mt-[10px] cursor-pointer hover:bg-[#D1E9F6] transition duration-75 ease-in-out rounded-md px-2 py-1">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Beauty
                </span>
              </li>
            </NavLink>
            <NavLink to='/dress/dress Material'>
              <li className="flex place-items-center mt-[10px] cursor-pointer hover:bg-[#D1E9F6] transition duration-75 ease-in-out rounded-md px-2 py-1">
                <img
                  className="w-[30px] h-[30px]"
                  src="/images/homeIcon.png"
                  alt="Home"
                />
                <span className="ml-[10px] font-Podkova font-semibold">
                  Dress Material
                </span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default NavBar