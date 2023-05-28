/* eslint-disable no-useless-escape */
import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function Login() {
  const { login } = useContext(UserContext);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: () => {
      login(formik.values.email, formik.values.password);
    },
    validate: () => {
      let errors = {};

      // email validation
      if (!formik.values.email) {
        errors.email = "هذا الحقل مطلوب";
      } else if (
        !formik.values.email.match(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
        )
      ) {
        errors.email = "ادخل بريد الكتروني صحيح";
      }

      // password validation
      if (!formik.values.password) {
        errors.password = "هذا الحقل مطلوب";
      }

      return errors;
    },
  });

  useEffect(() => {
    if (formik.values.password || formik.values.email) {
      document.getElementById("login-errors").innerHTML = "";
    }
  });
  return (
    <section className="my-10">
      <ToastContainer />
      <div>
        <h1 className="text-3xl mb-5">تسجيل الدخول</h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        onChange={formik.handleChange}
        className="max-w-screen-sm m-auto py-5 px-3"
      >
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
        </div>
        <p id="login-errors" className="text-red-500 mt-2"></p>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-1 rounded-md self-start text-lg mt-5"
        >
          دخول
        </button>
      </form>
    </section>
  );
}
