import { PencilSimple, Trash, UserPlus } from "@phosphor-icons/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { Radio } from "@material-tailwind/react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { UserContext } from "../../Context/UserContext";

export default function UsersData() {
  // handle dialog
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { register } = useContext(UserContext);

  const formik = useFormik({
    initialValues: { email: "", password: "", name: "", role: "user" },
    onSubmit: () => {
      register(
        formik.values.email,
        formik.values.password,
        formik.values.name,
        formik.values.role
      );
    },
    validate: () => {
      let errors = {};

      // email validation
      if (!formik.values.email) {
        errors.email = "هذا الحقل مطلوب";
      }
      // password validation
      if (!formik.values.password) {
        errors.password = "هذا الحقل مطلوب";
      }

      // name validation
      if (!formik.values.name) {
        errors.name = "هذا الحقل مطلوب";
      }

      return errors;
    },
  });

  useEffect(() => {
    document.getElementById("user-data-li").click();
  }, []);
  return (
    <div>
      <section className="container px-4 mx-auto">
        <Button
          onClick={handleOpen}
          variant="gradient"
          className="flex gap-2 items-center p-2 mb-5 bg-[#6c5dd3] hover:shadow-gray-300 shadow-none"
          style={{ backgroundImage: "none" }}
        >
          <span>إضافة مستخدم</span>
          <UserPlus size={24} />
        </Button>
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

      <div>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>إضافة مستخدم جديد</DialogHeader>
          <DialogBody divider>
            <form
              onSubmit={formik.handleSubmit}
              onChange={formik.handleChange}
              className="max-w-screen-sm m-auto py-5 px-3"
            >
              <div>
                <div className="relative mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-opacity-50 focus:border-opacity-100 appearance-none focus:outline-none focus:ring-0 border-[#6c5dd3]  peer"
                    placeholder=" "
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="user-name"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    الاسم
                  </label>
                </div>
                <p className="mt-1 ms-2  text-red-500 text-start">
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : ""}
                </p>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-opacity-50 focus:border-opacity-100 appearance-none focus:outline-none focus:ring-0 border-[#6c5dd3]  peer"
                    placeholder=" "
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="user-email"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    البريد الإلكتروني
                  </label>
                </div>
                <p className="mt-1 ms-2  text-red-500 text-start">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </p>
              </div>
              <div>
                <div className="relative mt-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-opacity-50 focus:border-opacity-100 appearance-none focus:outline-none focus:ring-0 border-[#6c5dd3]  peer"
                    placeholder=" "
                    autoComplete="true"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="user-password"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    كلمة السر
                  </label>
                </div>
                <p className="mt-1 ms-2 text-red-500 text-start">
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""}
                </p>
                <p id="register-errors" className="text-red-500 mt-2"></p>
              </div>

              <div className="flex w-max gap-4">
                <Radio
                  id="green"
                  name="role"
                  color="green"
                  value={"admin"}
                  label="مسؤول"
                />
                <Radio id="teal" name="role" value={"user"} label="مستخدم" />
              </div>
            </form>{" "}
          </DialogBody>
          <DialogFooter className="flex flex-row-reverse gap-2">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="text-base font-normal py-2 bg-gray-50"
            >
              <span>إلغاء</span>
            </Button>
            <Button
              variant="text"
              color="green"
              onClick={handleOpen}
              className="text-base font-normal py-2 bg-gray-50 bg-opacity-80 "
            >
              <span>إضافة</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
