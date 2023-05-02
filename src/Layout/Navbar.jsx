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
      <nav className="bg-white border-gray-200 fixed start-0 end-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center">
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
              type="button"
              className=" hidden mr-3 text-sm bg-gray-300 rounded-lg md:mr-0 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-200"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-lg"
                src={require("../assets/images/user-avatar.png")}
                alt="user photo"
              />
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
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
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ms-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-50 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-300"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className="search-bar items-center  justify-between hidden md:flex md:order-1  px-4 py-2 border rounded-xl sm:w-full md:w-full mt-3 lg:mt-0 md:mt-0 "
            id="mobile-menu-2"
          >
            {/* search items  */}

            <div class="w-full h-5 flex justify-between text-sm c-primary">
              {/* search menu items */}
              <div className="menu flex items-center border-e  pe-2 cursor-pointer">
                <img
                  className="h-4 me-1"
                  src={require("../assets/icons/menu 1.png")}
                  alt="main menu button"
                />
                <h6 className="c-rimary me-1">القائمة</h6>
                <i className="fa-solid fa-chevron-down "></i>
              </div>
              {/* search input  */}
              <input
                className=" flex-grow focus:outline-none ps-2"
                type="search"
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
      </nav>
    </>
  );
}
