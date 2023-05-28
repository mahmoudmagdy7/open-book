import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  BookOpen,
  Books,
  CaretUp,
  House,
  Package,
  Sliders,
  Users,
} from "@phosphor-icons/react";

export default function Dashboard() {
  function controlToggle() {
    const controlsItem = document.querySelectorAll(
      "#controls-menu li:not(.disabled)"
    );
    for (const listItem of controlsItem) {
      listItem.addEventListener("click", () => {
        for (const listItem of controlsItem) {
          listItem.classList.remove("active");
        }
        listItem.classList.add("active");
      });
    }
  }

  useEffect(function () {
    controlToggle();
  }, []);
  return (
    <section className="flex flex-row-reverse  ">
      <main className="   grow ">
        <nav className="p-5 mb-5 h-max ">
          <Link
            className="inline-flex relative rounded-lg p-1.5 shadow-md text-deep-purple-400 hover:bg-gray-100"
            to={"/"}
          >
            <House size={28} />
          </Link>
        </nav>
        <div className=" ">
          <Outlet />
        </div>
      </main>

      <aside className="dashboard-aside w-64 px-5 border-e  text-center">
        <div className="flex justify-center py-3 mb-5">
          <img
            src={require("../../assets/images/logo.png")}
            alt="logo"
            className="h-12"
          />
        </div>
        <ul id="controls-menu">
          <li
            id="dashboard-li"
            className="active my-2  rounded-md cursor-pointer text-base font-semibold"
          >
            <Link
              to="/dashboard"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <Sliders size={24} />
              <h5 className="">لوحة التحكم</h5>
            </Link>
          </li>
          {/* divider between every item section  */}
          <li
            target="divider"
            className="cursor-default text-start px-4  disabled relative after:absolute after:h-px after:w-2/3 after:bg-gray-300 after:top-1/2 after:-translate-y-1/2 after:start-14 after:ms-2"
          >
            <span>الكتب</span>
          </li>

          <li
            id="add-book-li"
            className=" my-2  rounded-md cursor-pointer text-base font-semibold"
          >
            <Link
              to="add-book"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <Package size={24} /> <h5 className=""> قائمة الكتب</h5>
            </Link>
          </li>
          <li
            id="add-book-li"
            className=" my-2  rounded-md cursor-pointer text-base font-semibold"
          >
            <Link
              to="add-book"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <BookOpen size={24} />
              <h5 className="">إضافة كتاب</h5>
            </Link>
          </li>
          {/* divider between every item section  */}
          <li
            target="divider"
            className="cursor-default text-start px-4  disabled relative after:absolute after:h-px after:w-2/3 after:bg-gray-300 after:top-1/2 after:-translate-y-1/2 after:start-14 after:ms-2"
          >
            <span className="bg-white pe-2 relative z-50">المستخدمين</span>
          </li>
          <li
            id="user-data-li"
            className=" my-2  rounded-md cursor-pointer text-base font-semibold"
          >
            <Link
              to="users"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <Users size={24} />
              <h5 className="">قائمة المستخدمين </h5>
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  );
}
