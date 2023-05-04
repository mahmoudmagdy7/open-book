import React from "react";
import line from "../assets/icons/divider.png";
import whatsapp from "../assets/icons/x30 8.Whatsapp.svg";
import Facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import gmail from "../assets/icons/Email.svg";

import { Link } from "react-router-dom";
import BookCard from './../components/BookCard';

export default function BookDetails() {
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

        <main className=" col-span-6 lg:col-span-5  p-10">
          <h1 className=" text-3xl flex">عنوان الكتاب</h1>

          {/*  Start STAR  ICON */}

          <div className="rating text-start flex  mt-5">
            <div className="star-outer relative me-1 ">
              <div className="star-inner absolute top-0"></div>
            </div>
            <div className="star-outer relative me-1 ">
              <div className="star-inner absolute top-0"></div>
            </div>
            <div className="star-outer relative me-1 ">
              <div className="star-inner absolute top-0"></div>
            </div>
            <div className="star-outer relative me-1 ">
              <div className="star-inner absolute top-0"></div>
            </div>
            <div className="star-outer relative  "></div>

            <span className=" relative ms-5"> 4.0 </span>
          </div>

          {/*  END  STAR  ICON */}

          <p className="pt-2 text-start  ">
            تلخص هذه المقولة ما تسعى مبادرة ض القيام به منذ تأسيسها ثم تسجيلها
            بشكل رسمي كمنظمة تطوعية غير ربحية في ألمانيا. حيث كان الدافع الأول
            لذلك هو نقص المحتوى العربي الإلكتروني وضعفه في المجالات المعرفية
            المختلفة، حيث سعت المبادرة إلى سد جزء يسير من هذا النقص عبر الموسوعة
            الحرة الأهم، موسوعة ويكيبيديا العربية، عبر مسابقة ض الويكيبيدية منذ
            العام 2015. ثم أضافت لأنشطتها إثراء المحتوى الخاص بالأطفال عبر مشروع
            حكايات ض منذ العام 2019، الذي أنتج أكثر من 100 قصة عالية الجودة
            للأطفال بالعربية، نشرناها للفائدة. وفي عامها الخامس، توسع النشاط
            ليشمل تأليف القصة القصيرة، عبر مسابقة حروف حرة في العام 2020. وبعد
            التركيز على الأمور التقنية وتطويرها في العام 2021 والذي نُشر فيه
            تطبيق حكايات ض 1 على متجر غوغل، كانت النقلة من الترجمة إلى التأليف
            بتركيز على أدب الطفل من خلال المشروع الكبير، مشروع حكايات ض 2
            المستمر طيلة عام 2022.
          </p>

          {/*  END BOOK  DETAILS */}

          {/*  Start BTN BOOK */}

          <div className=" flex  justify-between mt-5">
            <div className=" relative ms-auto">
              <Link>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-300 rounded-md group-hover:bg-opacity-0">
                    عرض تفاصيل الكتاب
                  </span>
                </button>
              </Link>
            </div>

            <div className=" relative ms-5">
              <Link>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-300 rounded-md group-hover:bg-opacity-0">
                    تحميل الكتاب
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/*  END BTN BOOK */}

          {/*  Start LINE BOOK */}

          <div className=" flex mt-5">
            <img src={line} alt="line" />
          </div>
          {/*  END LINE BOOK */}

          {/*  Start social media icons  */}

          <div className=" flex    mt-5">
            <button
              type="button"
              class="text-white bg-[#1E33E5] hover:bg-[#1E33E5]/90 focus:ring-4 focus:outline-none focus:ring-[#1E33E5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              فيس بوك
              <img src={Facebook} className="w-4 h-4 mr-2 -ml-1" alt="" />
            </button>

            <button
              type="button"
              className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2"
            >
              تويتر
              <img src={twitter} className="w-4 h-4 mr-2 -ml-1" alt="" />
            </button>

            <button
              type="button"
              className="text-white bg-[#53C258] hover:bg-[##53C258]/90 focus:ring-4 focus:outline-none focus:ring-[##53C258]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            >
              واتساب
              <img src={whatsapp} className="w-4 h-4 mr-2 -ml-1" alt="" />
            </button>

            <button
              type="button"
              className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
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
    </>
  );
}
