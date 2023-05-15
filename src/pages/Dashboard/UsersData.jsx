import { PencilSimple, Trash } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function UsersData() {
  useEffect(() => {
    document.getElementById("user-data-li").click();
  }, []);
  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col shadow-lg shadow-blue-gray-50">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className=" text-start py-3.5 px-4 text-sm font-normal   text-gray-500 "
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded"
                          />
                          <button className="flex items-center gap-x-2">
                            <span>ID</span>

                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.1"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.1"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.3"
                              />
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className=" text-start px-4 py-3.5 text-sm font-normal  text-gray-500 "
                      >
                        تاريخ التسجيل
                      </th>
                      <th
                        scope="col"
                        className=" text-start px-4 py-3.5 text-sm font-normal  text-gray-500 "
                      >
                        الرتبة
                      </th>
                      <th
                        scope="col"
                        className=" text-start px-4 py-3.5 text-sm font-normal  text-gray-500 "
                      >
                        الاسم
                      </th>
                      <th
                        scope="col"
                        className=" text-start px-4 py-3.5 text-sm font-normal  text-gray-500 "
                      >
                        البريد الإلكتروني
                      </th>
                      <th
                        scope="col"
                        className=" py-3.5 px-4 text-start text-sm font-normal  text-gray-500"
                      >
                        تنفيذ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded"
                          />

                          <span>#3066</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 ">
                        Jan 6, 2022
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded inline-block">
                          عضو
                        </span>
                        {/* <h2 className="text-sm font-normal">Paid</h2> */}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 ">
                        <div className="flex items-center gap-x-2">
                          <p className=" font-normal text-gray-600 ">
                            محمود مجدي{" "}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 ">
                        mahmoud@gmail.com
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-red-500 bg-red-50 py-1 px-2 rounded-md flex gap-1 items-center">
                            حذف
                            <Trash size={18} />
                          </button>
                          <button className="text-gray-500 bg-gray-50 py-1 px-2 rounded-md flex gap-1 items-center">
                            تعديل
                            <PencilSimple size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded"
                          />

                          <span>#3065</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 ">
                        Jan 5, 2022
                      </td>
                      <td className="px-4 py-4 ">
                        <h2 className="bg-cyan-50 text-cyan-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded inline-block">
                          مسؤول
                        </h2>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 ">
                        <p className=" text-gray-600 ">احمد محمد</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 ">
                        ahmed@gmail.com
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button className="text-red-500 bg-red-50 py-1 px-2 rounded-md flex gap-1 items-center">
                            حذف
                            <Trash size={18} />
                          </button>
                          <button className="text-gray-500 bg-gray-50 py-1 px-2 rounded-md flex gap-1 items-center">
                            تعديل
                            <PencilSimple size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link
            to="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </Link>

          <div className="items-center hidden md:flex gap-x-3">
            <Link
              to="#"
              className="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60"
            >
              1
            </Link>
            <Link
              to="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              2
            </Link>
            <Link
              to="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              3
            </Link>
            <Link
              to="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              ...
            </Link>
            <Link
              to="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              12
            </Link>
            <Link
              to="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              13
            </Link>
            <Link
              to="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              14
            </Link>
          </div>

          <Link
            to="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
