"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style main-menu  ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40 ">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={103}
                        height={100}
                        src="/images/logo-home.svg"
                        alt="Header Logo"
                      />
                    </Link>
                
                  </div>
                  {/* End Logo */}
                    <div className="nav-li ">

                  <MainMenu />

                    </div>

                    <div className="d-flex gap-3 ">
          <img width={30} height={30} src="/images/test.svg"/>
          <img width={30} height={30} src="/images/test.svg"/>
          <img width={30} height={30} src="/images/test.svg"/>

  </div>
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}

      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
   
      {/* Sidebar Panel End */}
    </>
  );
};

export default Header;
