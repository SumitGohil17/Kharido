import React from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';


function NavBar() {

  const navigate = useNavigate();
  return (

    <div id="NavBar" className="w-[180px]  bg-white hidden sm:block ">
      <div className="flex flex-wrap flex-col ml-5 place-items-start content-between w-[90px] ">
        <div class="header" className="m-2 w-[65px]">
          <img
            class="logo"
            src="./shopping-bags-svgrepo-com.svg"
            width="65px"
            alt=""
          />
        </div>
        <div id="sidebar" className="mt-[45px]">
          <ul className="list-none">
            <li className="flex place-items-center mt-[10px] ">
              <img
                className="w-[30px] h-[30px]"
                src="/images/homeIcon.png"
                alt="Home"
              />
              <span className="ml-[10px] font-Podkova font-semibold">
                Home
              </span>
            </li>
            <NavLink to="/Men"><li
              className="flex place-items-center mt-[10px] cursor-pointer"
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
            <li className="flex place-items-center mt-[10px] cursor-pointer">
              <img
                className="w-[30px] h-[30px]"
                src="../images/shirt.png"
                alt="Clothes"
              />
              <span className="ml-[10px] font-Podkova font-semibold">
                Women
              </span>
            </li>
            <li className="flex place-items-center mt-[10px] cursor-pointer">
              <img
                className="w-[30px] h-[30px]"
                src="/images/homeIcon.png"
                alt="Home"
              />
              <span className="ml-[10px] font-Podkova font-semibold">
                Home & Living
              </span>
            </li>
            <li className="flex place-items-center mt-[10px] cursor-pointer">
              <img
                className="w-[30px] h-[30px]"
                src="/images/homeIcon.png"
                alt="Home"
              />
              <span className="ml-[10px] font-Podkova font-semibold">
                Kids
              </span>
            </li>
            <li className="flex place-items-center mt-[10px] cursor-pointer">
              <img
                className="w-[30px] h-[30px]"
                src="/images/homeIcon.png"
                alt="Home"
              />
              <span className="ml-[10px] font-Podkova font-semibold">
                Beauty
              </span>
            </li>
            
          </ul>
        </div>
      </div>
    </div>

  )
}

export default NavBar