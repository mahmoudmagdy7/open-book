import { Books, CloudArrowDown, PenNib, Users } from "@phosphor-icons/react";
import React from "react";
import { useEffect } from "react";

export default function MainDashboard() {
  useEffect(() => {
    document.getElementById("dashboard-li").click();
  }, []);
  return (
    <>
      <section>
        <div className="main data grid  lg:grid-cols-4 md:grid-cols-2 gap-6 p-5 bg-gray-200 bg-opacity-10">
          {/* cards  */}

          <div
            id="usersCount"
            className="card w-full  p-5 rounded-lg flex gap-3 justify-start items-center bg-white shadow-lg shadow-gray-100"
          >
            <div className="bg-cyan-50 text-cyan-400 text-xs rounded-lg p-2 ">
              <Books size={28} />
            </div>
            <h3 className=" font-semibold text-center">
              <div className="font-bold">50</div>
              <div className=" text-blue-gray-400">كتاب</div>
            </h3>
          </div>

          <div
            id="usersCount"
            className="card w-full  p-5 rounded-lg flex gap-3 justify-start items-center bg-white shadow-lg shadow-gray-100"
          >
            <div className=" bg-green-50 text-green-400 text-xs rounded-lg p-2 ">
              <Users size={28} />
            </div>
            <h3 className=" font-semibold text-center">
              <div className="font-bold">50</div>
              <div className=" text-blue-gray-400">مستخدم</div>
            </h3>
          </div>

          <div
            id="usersCount"
            className="card w-full  p-5 rounded-lg flex gap-3 justify-start items-center bg-white shadow-lg shadow-gray-100"
          >
            <div className=" bg-orange-50 text-orange-400 text-xs rounded-lg p-2 ">
              <PenNib size={28} />
            </div>
            <h3 className=" font-semibold text-center">
              <div className="font-bold">50</div>
              <div className=" text-blue-gray-400">كاتب</div>
            </h3>
          </div>

          <div
            id="usersCount"
            className="card w-full  p-5 rounded-lg flex gap-3 justify-start items-center bg-white shadow-lg shadow-gray-100"
          >
            <div className=" bg-red-50 text-red-300 text-xs rounded-lg p-2 ">
              <CloudArrowDown size={28} />
            </div>
            <h3 className=" font-semibold text-center">
              <div className="font-bold">50</div>
              <div className=" text-blue-gray-400">تحميل</div>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
