import React from "react";
import { Link } from "react-router-dom";
import sideBarViewIcon from "../assets/icons/sidebarView.svg";
import PaginatedItems from "../components/pagination";
import { List, SquaresFour } from "@phosphor-icons/react";
import Toaster from "../components/Toaster";

export default function Home() {
  function listView() {
    const booksContainer = document.querySelector("#books-container");

    booksContainer.classList.add("list-view");
    booksContainer.classList.remove("grid");
    document.querySelector("#grid-view-icon").classList.remove("active-view");
    document.querySelector("#list-view-icon").classList.add("active-view");
  }
  function gridView() {
    const booksContainer = document.querySelector("#books-container");

    booksContainer.classList.remove("list-view");
    booksContainer.classList.add("grid");
    document.querySelector("#grid-view-icon").classList.add("active-view");
    document.querySelector("#list-view-icon").classList.remove("active-view");
  }

  return (
    <>
      <main className=" pb-3">
        <div className="grid grid-cols-12 gap-x-6  mx-auto max-w-screen-2xl ">
          {/* right section  */}
          <section className=" col-span-2  col-start-2 text-start hidden lg:block md:block">
            <h2 className="text-3xl font-semibold">الاقسام</h2>
            <ul className="border rounded-lg mt-5 py-4 px-5">
              <li className="font-semibold">
                <Link> علوم</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> رياضة</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> أدب</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> دين</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> تكنولوجيا</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link>قصص الأطفال</Link>
              </li>
            </ul>
          </section>
          {/* left section  */}
          <section className="col-span-full lg:col-span-8 md:col-span-8 sm:col-span-12 mx-5 lg:mx-0 md:mx-0  text-start">
            <h2 className="text-3xl font-semibold mb-5">الكتب</h2>
            <div className=" items-center  justify-between  py-3 border rounded-lg ">
              <div className="w-full h-5 flex justify-between">
                {/* sort option  */}
                <div className="text-center flex items-center justify-between px-4 w-32 border-e">
                  <img
                    className="h-5"
                    src={require("../assets/icons/sort.png")}
                    alt=" search icon"
                  />
                  <h6 className="font-bold  text-base">الاحدث</h6>
                  <img
                    className="h-4"
                    src={require("../assets/icons/chevron.png")}
                    alt=" search icon"
                  />
                </div>
                {/* view option */}
                <div className="flex items-center grow justify-start ms-2 text-gray-500">
                  <button onClick={listView} className="view-button pe-1 ">
                    <List size={22} id="list-view-icon" />
                  </button>
                  <button onClick={gridView} className="view-button pe-1  ">
                    <SquaresFour
                      size={22}
                      id="grid-view-icon"
                      className="active-view"
                    />
                  </button>
                  <button className="view-button">
                    <img
                      className="h-5 w-5"
                      src={sideBarViewIcon}
                      alt=" search icon"
                    />
                  </button>
                </div>
                {/*  menu items */}
                <ul className=" flex items-center  pe-4 cursor-pointer text-base font-semibold">
                  <li className="px-1 active ">يوم</li>
                  <li className="px-1 text-gray-400 font-normal">اسبوع</li>
                  <li className="px-1 text-gray-400 font-normal">شهر</li>
                </ul>
              </div>
            </div>

            <div className="">
              <PaginatedItems itemsPerPage={20} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
