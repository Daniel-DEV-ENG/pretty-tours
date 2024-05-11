"use client"

import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
  Services
} from "@/data/navItems";
import Link from "next/link";
import "../../style/global.css"
import { useState } from "react";

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleActive = () => {
      return "menuActive";
  };
  const handleClick = (e) => {
    setActiveItem(e.target.innerText);
  };
  

  return (


    <ul className="ace-responsive-menu ">
<li className={`hov`} onClick={handleClick}>
  <Link   className="list-item" href="/" >
    <span>
      Home
    </span>
  </Link>
  <div  className={`line`}></div>
</li>


   

      <li className="visible_list dropitem">
        <Link className="list-item" href="#">
          <span className={  "title menuActive" }>
          Services
          </span>
          <span className="arrow"></span>
        </Link>
        <ul className="sub-menu">
          {Services.map((item, index) => (
            <li key={index}>
              <Link className={`${handleActive(item.href)}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className="hov">
        <Link className="list-item" href="/ToursUk">
          <span className={"title menuActive" }>
          Explore
          </span>
        </Link>
          <div className="line"></div>
      </li>
      <li className=" hov">
        <Link className="list-item" href="/about">
          <span className={"title menuActive"}>
          About us
          </span>
        </Link>
        <div className="line"></div>

      </li>
    </ul>

 


  );
};

export default MainMenu;
