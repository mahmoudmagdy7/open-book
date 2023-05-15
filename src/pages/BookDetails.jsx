import React from "react";
import line from "../assets/icons/divider.png";
import whatsapp from "../assets/icons/x30 8.Whatsapp.svg";
import Facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import download from "../assets/icons/download.svg";
import show from "../assets/icons/show.svg";
import { Link } from "react-router-dom";

  return (
    <>
      {/*  Start Grid system*/}
      <div className="pt-24 max-w-screen-xl mx-auto grid grid-cols-6 lg:col-span-5 gap-2">
        <aside className="  col-span-4 md:col-span-2 md:col-start-3 lg:col-span-1 col-start-2">
          <img
            className="w-full  m-auto"
            src={require("../assets/images/book.png")}
            alt=""
          />
        </aside>



        {/*  Start BOOK  DETAILS */}

        <main className=" col-span-6 lg:col-span-5  py-10 ">
          <div className="px-5">
            {" "}
            <h1 className=" text-3xl flex"> {bookObject?.title} </h1>
            <p className="pt-5 text-start  ">
              تلخص هذه المقولة ما تسعى مبادرة ض القيام به منذ تأسيسها ثم تسجيلها
              بشكل رسمي كمنظمة تطوعية غير ربحية في ألمانيا. حيث كان الدافع الأول
              لذلك هو نقص المحتوى العربي الإلكتروني وضعفه في المجالات المعرفية
              المختلفة، حيث سعت المبادرة إلى سد جزء يسير من هذا النقص عبر
              الموسوعة الحرة الأهم، موسوعة ويكيبيديا العربية، عبر مسابقة ض
              الويكيبيدية منذ العام 2015. ثم أضافت لأنشطتها إثراء المحتوى الخاص
              بالأطفال عبر مشروع حكايات ض منذ العام 2019، الذي أنتج أكثر من 100
              قصة عالية الجودة للأطفال بالعربية، نشرناها للفائدة. وفي عامها
              الخامس، توسع النشاط ليشمل تأليف القصة القصيرة، عبر مسابقة حروف حرة
              في العام 2020. وبعد التركيز على الأمور التقنية وتطويرها في العام
              2021 والذي نُشر فيه تطبيق حكايات ض 1 على متجر غوغل، كانت النقلة من
              الترجمة إلى التأليف بتركيز على أدب الطفل من خلال المشروع الكبير،
              مشروع حكايات ض 2 المستمر طيلة عام 2022.
              
              
          
            </p>
            {/*  Start BTN BOOK */}
            <div className=" flex justify-end gap-3 mt-5">
              <div className=" relative ">
                <Link >
                  <button
                    type="button"
                    className=" c-primary bg-[#EBE8FE] inline-flex items-center font-bold rounded-lg text-sm px-3 py-2.5 text-center "
                  >
                    <span>عرض الكتاب</span>
                    <span className="fa-regular fa-eye ms-2 "></span>
                  </button>
                </Link>
              </div>

              <div className=" relative ">
                <Link >
                  <button
                    type="button"
                    className="text-green-500 bg-[#DDF5E4] font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    <span>تحميل الكتاب</span>
                    <span className="fa-solid fa-arrow-down ms-2"></span>{" "}
                  </button>
                </Link>
              </div>
            </div>
            {/*  END BTN BOOK */}
          </div>
          {/*  END BOOK  DETAILS */}

          {/*  Start LINE BOOK */}

          <div className=" flex mt-5">
            <img src={line} alt="line" />
          </div>
          {/*  END LINE BOOK */}

          {/*  Start social media icons  */}

          <div className="mt-5 justify-start flex mobileW items-center gap-2">
            <button
              type="button"
              className="text-white bg-[#1E33E5] hover:bg-[#1E33E5]/90 focus:ring-4 focus:outline-none focus:ring-[#1E33E5]/50 font-medium rounded-lg text-sm px-1 ps-2 py-2 text-center items-center dark:focus:ring-[#3b5998]/55 mx-px flex"
            >
              فيس بوك
              <img src={Facebook} className="w-4 h-4 " alt="" />
            </button>

            <button
              type="button"
              className="text-white pe-3 px-2  py-2 bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mx-px"
            >
              تويتر
              <img src={twitter} className="w-4 h-4 mr-2 -ml-1" alt="" />
            </button>

            <button
              type="button"
              className="text-white pe-3 px-2 py-2 bg-[#53C258] hover:bg-[##53C258]/90 focus:ring-4 focus:outline-none focus:ring-[##53C258]/50 font-medium rounded-lg text-sm  text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mx-px"
            >
              واتساب
              <img src={whatsapp} className="w-4 h-4 mr-2 -ml-1" alt="" />
            </button>

            <button
              type="button"
              className="text-white pe-3 px-2  py-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mx-px"
            >
              الايميل
              <svg
                className="w-4 h-4 mr-2 -ml-1"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </button>
          </div>

          {/*  END social media icons  */}
        </main>
      </div>

      <div className="max-w-screen-lg mx-auto ">
        <div className=" flex ms-14">
          <h1 className="text-black text-xl font-extrabold">تفاصيل الكتاب</h1>
          <h1 className="text-black  text-xl	 font-extrabold ms-9">الآراء</h1>
        </div>
        <div className="bg-white p-8 rounded-md w-4/5">
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <tbody>
                    {/* 1 */}
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900  font-extrabold whitespace-no-wrap">
                              عنوان كتاب
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {bookObject?.title} 
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* 2 */}
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 font-extrabold whitespace-no-wrap">
                              المؤلف
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                            {bookObject?.author}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* 3 */}
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 font-extrabold whitespace-no-wrap">
                              رقم ISBN
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              عنوان كتاب
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* 4 */}

                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 font-extrabold whitespace-no-wrap">
                              تنسيق الكتاب
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              عنوان كتاب
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* 5 */}

                    <tr>
                      <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <p className="text-gray-900 font-extrabold whitespace-no-wrap">
                              تاريخ النشر
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              عنوان كتاب
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>

                    {/* 6 */}
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 font-extrabold whitespace-no-wrap">
                              العلامات
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              عنوان كتاب
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
