import { Heart, ShieldChevron } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

export default function Navbar() {
  /* getting user token from user data context  */

  const { userToken, logOut, userRole } = useContext(UserContext);
  function toggleNav() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  }

  useEffect(function () {
    window.onscroll = function () {
      if (window.scrollY > 20) {
        document.querySelector("nav").style.boxShadow =
          "0px 4px 10px rgba(0, 0, 0, 0.05)";
      } else {
        document.querySelector("nav").style.boxShadow = "0 0";
      }
    };
  }, []);
  return (
    <>
      <nav className="bg-white border-gray-200 sticky z-50 top-0">
        <div className=" py-px bg-gray-100 flex justify-center items-center c-primary">
          <p>نسخة تجريبية</p>
          <span className=" mx-2 fa-solid fa-terminal"></span>
        </div>
        <div className="container mx-auto ">
          <div className=" flex flex-wrap items-center justify-between mx-auto  max-w-screen-xl  p-4">
            <Link to="/" className="flex items-center">
              <img
                src={require("./../assets/images/logo.png")}
                className="h-8 lg:h-9 md:h-9"
                alt="open book Logo"
              />
            </Link>

            <div className="flex items-center md:order-2">
              {/* profile shown when user is logged in */}
              {/* ======================================== */}

              {/* ======================================== */}
              {!userToken ? (
                <div className="flex items-center justify-between">
                  <button className="btn-primary flex items-center font-semibold me-2 ">
                    <Link to="/register"> إنشاء حساب</Link>

                    <img
                      src={require("../assets/icons/user.png")}
                      alt="user icon"
                      className="h-4 ms-1"
                    />
                  </button>
                  <button className="btn-primary-soft flex items-center font-semibold ">
                    <Link to="/login">دخول</Link>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between gap-3">
                  {localStorage.getItem("userRole") === "admin" ? (
                    <Link
                      to={"/dashboard"}
                      className="relative border rounded-lg p-1.5 hover:bg-gray-100 text-green-700"
                    >
                      <ShieldChevron size={24} weight="fill" />{" "}
                    </Link>
                  ) : (
                    ""
                  )}
                  <figure className="bg-gray-300 relative inline-block h-9 w-9 rounded-lg object-cover object-center overflow-hidden">
                    <img
                      className="h-full opacity-20"
                      alt="user avatar placeholder"
                      src={require("../assets/images/user-avatar.png")}
                    />
                  </figure>
                  <div>
                    <button className="relative border rounded-lg p-1.5 hover:bg-gray-100 ">
                      <span className="absolute bg-[#6c5dd3] text-white px-2 py-1 text-xs font-bold rounded-full -top-3 -end-3">
                        5
                      </span>
                      <Heart size={24} />
                    </button>
                  </div>
                  <button
                    onClick={logOut}
                    className="btn-primary-soft flex items-center font-semibold "
                  >
                    خروج
                  </button>
                </div>
              )}

              <button
                onClick={toggleNav}
                className="inline-flex items-center p-2 ms-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-50"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                </svg>
              </button>
            </div>

            <div
              className="search-bar items-center hidden  justify-between md:flex md:order-1  px-4 py-2 border rounded-lg sm:w-full md:w-full mt-3 lg:mt-0 md:mt-0 "
              id="mobile-menu"
            >
              {/* search items  */}

              <div className="w-full h-5 flex justify-between text-sm c-primary">
                {/* search menu items */}
                <div className="menu flex items-center border-e  pe-2 cursor-pointer">
                  <img
                    className="h-4 me-1"
                    src={require("../assets/icons/menu 1.png")}
                    alt="main menu button"
                  />
                  <h6 className=" me-1">القائمة</h6>
                  <i className="fa-solid fa-chevron-down "></i>
                </div>
                {/* search input  */}
                <input
                  className=" flex-grow focus:outline-none ps-2"
                  type="text"
                  placeholder="ابحث في اكبر مكتبه عربيه حرة "
                />
                {/* search icon  */}
                <button className="text-center  ps-2 border-s">
                  <img
                    className="h-4"
                    src={require("../assets/icons/search.png")}
                    alt=" search icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
