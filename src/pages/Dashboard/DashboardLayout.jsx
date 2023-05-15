import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { BookOpen, Sliders, Users } from "@phosphor-icons/react";
export default function Dashboard() {
  function controlToggle() {
    const controlsItem = document.querySelectorAll("#controls-menu li");
    for (const li of controlsItem) {
      li.addEventListener("click", () => {
        for (const li of controlsItem) {
          li.classList.remove("active");
        }
        li.classList.add("active");
      });
    }
  }
  useEffect(function () {
    controlToggle();
  }, []);
  return (
    <section className="flex flex-row-reverse  ">
      <main className="   grow ">
        <nav className="py-5 mb-5 h-max">navbar</nav>
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
          <li className="active my-2  rounded-md cursor-pointer text-base font-semibold">
            <Link
              id="dashboard-li"
              to="/dashboard"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <Sliders size={24} />
              <h5 className="">لوحة التحكم</h5>
            </Link>
          </li>
          <li className=" my-2  rounded-md cursor-pointer text-base font-semibold">
            <Link
              id="add-book-li"
              to="add-book"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <BookOpen size={24} />
              <h5 className="">إضافة كتاب</h5>
            </Link>
          </li>
          <li className=" my-2  rounded-md cursor-pointer text-base font-semibold">
            <Link
              id="user-data-li"
              to="users"
              className="flex items-center gap-2 my-2  rounded-md p-2 cursor-pointer text-base font-semibold"
            >
              <Users size={24} />
              <h5 className="">المستخدمين</h5>
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  );
}
