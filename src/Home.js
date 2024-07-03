import React from "react";
import "./home.css";

function Home() {
  return (
    <div className=" flex flex-col content-between">
      <div class="header" className="m-2 w-full">
        <img
          class="logo"
          src="./shopping-bags-svgrepo-com.svg"
          width="65px"
          alt=""
        />
      </div>

      <div className="flex flex-wrap flex-col ml-2 place-items-start mt-[80px] space-y-1.5 ">

        <div id="sidebar">
          <ul>
            <li>
                <img src="/icons8-home.svg" alt="Home" />
                <span>Home</span>
            </li>
            <li>
            
                <img src="/icons8-search.svg" alt="Search" />
                <span>Search</span>

            </li>
            <li>
                <img src="images/icons8-t-shirt-64.png" alt="Clothes" />
                <span>Clothes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
