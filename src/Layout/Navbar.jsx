import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
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
      <nav className="bg-white border-gray-200 fixed z-50 start-0 end-0">
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
              <button
                className=" hidden mr-3 text-sm bg-gray-300 rounded-lg md:mr-0 focus:ring-1 focus:ring-gray-300"
                data-dropdown-toggle="user-dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-lg"
                  src={require("../assets/images/user-avatar.png")}
                  alt="user-icon"
                />
              </button>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 ">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-gray-500 truncate ">
                    name@flowbite.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
              {/* ======================================== */}
              <div className="flex items-center justify-between">
                <button className="btn-primary flex items-center font-semibold me-2 ">
                  إنشاء حساب
                  <img
                    src={require("../assets/icons/user.png")}
                    alt="user icon"
                    className="h-4 ms-1"
                  />
                </button>
                <button className="btn-primary-soft flex items-center font-semibold ">
                  دخول
                </button>
              </div>
              <button
                data-collapse-toggle="mobile-menu"
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
