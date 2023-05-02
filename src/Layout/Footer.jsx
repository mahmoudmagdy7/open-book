import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-start text-base">
      <div className="container m-auto">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-8 gap-6 ">
          <div className="col-1 px-4">
            <div>
              <img
                src={require("./../assets/images/logo.png")}
                className="h-9"
                alt="open book Logo"
              />
            </div>
            <div>
              <p className="mt-4 leading-relaxed  ">
                مبادرة ض ثم تسجيلها بشكل رسمي كمنظمة تطوعية غير ربحية في
                ألمانيا. حيث كان الدافع الأول لذلك هو نقص المحتوى العربي
                الإلكتروني وضعفه في المجالات المعرفية المختلفة، حيث سعت المبادرة
                إلى سد جزء يسير من هذا النقص عبر الموسوعة الحرة الأهم، موسوعة
                ويكيبيديا العربية،
              </p>
            </div>
            <div>
              <h2 className="font-bold text-lg  mt-4">تابعنا</h2>
              <div className="social-icons flex mt-4">
                <div className="icon text-xl border hover:border-none rounded-xl w-12 h-12 flex justify-center items-center p-3 mx-1 cursor-pointer text-blue-700 hover:bg-blue-100">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon text-xl border hover:border-none rounded-xl w-12 h-12 flex justify-center items-center p-3 mx-1 cursor-pointer text-red-600 hover:bg-red-100">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="icon text-xl border hover:border-none rounded-xl w-12 h-12 flex justify-center items-center p-3 mx-1 cursor-pointer text-blue-500 hover:bg-blue-50">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon text-xl border hover:border-none rounded-xl w-12 h-12 flex justify-center items-center p-3 mx-1 cursor-pointer text-blue-700 hover:bg-gray-200">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="icon text-xl border hover:border-none rounded-xl w-12 h-12 flex justify-center items-center p-3 mx-1 cursor-pointer text-rose-600 hover:bg-rose-100">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 px-4">
            <h2 className="font-bold text-xl mb-4">الأقسام</h2>
            <ul>
              <li className="font-semibold mt-2">
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
          </div>
          <div className="col-3 px-4">
            <h2 className="font-bold text-xl mb-4">روابط مختصرة</h2>
            <ul>
              <li className="font-semibold mt-2">
                <Link> عنا</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> حقوق الملكية</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link>أتصل بنا </Link>
              </li>
              <li className="font-semibold mt-2">
                <Link>أتصل بنا </Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> تبرع للمكتبة </Link>
              </li>
            </ul>
          </div>
          <div className="col-4 px-4">
            <h2 className="font-bold text-xl mb-4">أتصل بنا</h2>
            <ul>
              <li className="rounded-lg">
                <iframe
                  className="rounded-lg w-full h-28 border border-gray-300"
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158930.99914828784!2d7.634724349039236!3d51.5077695140356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91760bff07a11%3A0x427f28131548750!2z2K_ZiNix2KrZhdmI2YbYr9iMINij2YTZhdin2YbZitin!5e0!3m2!1sar!2seg!4v1683058518927!5m2!1sar!2seg"
                ></iframe>
              </li>
              <li className="font-semibold mt-5 flex items-center">
                <img
                  src={require("./../assets/icons/map-marker.png")}
                  className="h-5"
                  alt="open book Logo"
                />
                <p className="ms-2">
                  مبادرة "ض" منظمة غير ربحية - دورتموند ، ألمانيا
                </p>
              </li>
              <li className="font-semibold mt-5 flex items-center">
                <img
                  src={require("./../assets/icons/phone.png")}
                  className="h-5"
                  alt="open book Logo"
                />
                <p className="ms-2">004916095470403</p>
              </li>
              <li className="font-semibold mt-5 flex items-center">
                <img
                  src={require("./../assets/icons/mail.png")}
                  className="h-5"
                  alt="open book Logo"
                />
                <p className="ms-2">board@dadd-initiative.org</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container m-auto flex lg:justify-between md:justify-between flex-wrap py-5 px-2 text-center text-gray-500 justify-center ">
          <p className=" lg:mb-0 md:mb-0 sm:mb-2">
            تم التطوير
            <span className="fas fa-heart text-red-500 fa-beat mx-2"></span>
            بواسطة مبادرة "ض"
          </p>
          <p>
            <span>جميع الحقوق محفوظه</span>
            <span> {currentYear} &copy;</span>
            <span> - </span>
            <span>مكتبتك اكبر مكتبة عربيه للكتب الحرة</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
