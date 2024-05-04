
import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

  const isLoggedIn = localStorage.getItem('token');

  return (
    <>
      <header
        className={`header-nav nav-homepage-style main-menu   `}
      >
        <nav className="posr ">
          <div className=" posr menu_bdrt1 p-0 ">
            <div className="row align-items-center justify-content-between p-0">
              <div className="col-md-12">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos" style={{ marginLeft: '90px' }}>
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

                  <div className="d-flex gap-3  " style={{ marginRight: '90px' }}>
                    <div className="border-circle">
                      <img className="" width={23} height={23} src="/images/test.svg" alt="Test Image" />
                    </div>
                    <div className="border-circle">

                      <img width={23} height={23} src="/images/world.svg" />
                    </div>
                    <div className="border-circle">

                      <div>
                        {isLoggedIn ? (
                          <Link className="list-item" href="/profile">
                            <img width={30} height={30} src="/images/user.svg" alt="User" />
                          </Link>
                        ) : (
                          <Link className="list-item" href="/auth/login">
                            <img width={30} height={30} src="/images/user.svg" alt="User" />
                          </Link>
                        )}
                      </div>



                    </div>



                  </div>
                  {/* End Main Menu */}
                </div>
              </div>



            </div>

          </div>
        </nav>
      </header>

    </>
  );
};

export default Header;
