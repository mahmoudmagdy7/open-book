import React, { useEffect } from "react";
export default function AddBook() {
  function getDate(e) {
    console.log(e);
  }
  useEffect(() => {
    document.getElementById("add-book-li").click();
  }, []);
  return (
    <>
      <div className=" bg-white p-5">
        <div>
          <form className="flex flex-col gap-5 ">
            <div className="grid grid-flow-col gap-5 container">
              {/* -------- book details ----------  */}

              <div className="flex flex-col gap-2 lg:col-span-9 md:col-span-12 sm:col-span-12 col-span-12 sm:col-start-1 md:col-start-1">
                <div className="relative">
                  <input
                    type="text"
                    id="book-title"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-title"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    عنوان الكتاب
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    type="text"
                    id="book-description"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                    rows={10}
                  />
                  <label
                    htmlFor="book-description"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-6 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#6c5dd3] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    الوصف
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="book-author"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-author"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    الكاتب
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    id="book-pages"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-pages"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    عدد الصفحات
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="url"
                    id="book-link"
                    className="block  px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-link"
                    className="cursor-text   absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    رابط الكتاب
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="book-ISBN"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-ISBN"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    رقم ISBN
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="book-format"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-format"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    بنية الكتاب
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="book-publishing-date"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-publishing-date"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    تاريخ النشر
                  </label>
                </div>
              </div>
              {/* -------- book cover details ----------  */}
              <div className="border rounded-md flex flex-col items-center  px-5 py-2 lg:col-span-3 md:col-span-12 sm:col-span-12 col-span-3 sm:col-start-1 md:col-start-1 ">
                <h2 className="font-semibold text-xl my-5">غلاف الكتاب </h2>
                <img src={require("../../assets/images/book.png")} alt="" />
                <input
                  className="mt-5"
                  type="file"
                  name="book-cover"
                  id="book-cover"
                />
                <p className="my-3">OR</p>
                <div className="relative self-stretch">
                  <input
                    type="url"
                    id="book-cover-link"
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray appearance-none focus:outline-none focus:ring-0 focus:border-[#6c5dd3]  peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="book-cover-link"
                    className="cursor-text absolute text-sm text-gray-50000 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
                  >
                    رابط الغلاف
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-1 rounded-md self-start text-lg"
            >
              نشر
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
