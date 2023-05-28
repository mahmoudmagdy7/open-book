import React from "react";
import line from "../assets/icons/divider.png";
import whatsapp from "../assets/icons/x30 8.Whatsapp.svg";
import Facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import QRCode from "react-qr-code";
export default function BookDetails({ books }) {
  const { id } = useParams();

  const bookObject = {
    title: "علم الروبوتات: مقدمة قصيرة جدًّا",
    author: "آلان وينفيلد",
    authorId: "/contributors/68194903/",
    img: "https://downloads.hindawi.org/covers/svg/270x360/60592846.svg?v=5",
    type: {
      genre: "تكنولوجيا",
      url: "technology",
    },
    words: "٣٥,١٧٢ كلمة",
    text: "يُعد علم الروبوتات من التقنيات الأساسية في العالم الحديث. في الآونة الأخيرة، خطت الروبوتات\n      خطواتها الأولى داخل المنازل والمستشفيات وحققت نجاحًا كبيرًا في مجال استكشاف الكواكب، وأصبحت\n      جزءًا راسخًا من عمليات التصنيع وأتمتة المخازن. غير أن الروبوتات أخفقت في الارتقاء إلى مستوى\n      تنبؤات الخمسينيات والستينيات، عندما كان يُعتقد على نطاق واسع أنه بحلول القرن الحادي والعشرين\n      سيكون لدينا روبوتات ذكية تعمل كمساعدين أو رفقاء شخصيين أو زملاء في العمل. يتناول هذا الكتاب من\n      سلسلة «مقدمة قصيرة جدًا» موضوع الروبوتات من خلال النظر إلى الأجزاء التي تشكل معًا روبوتًا. ولا\n      عجب أن يكون لكل من هذه الأجزاء مكافئ حيوي: فكاميرا الروبوت تشبه عيني الحيوان، والكمبيوتر\n      الدقيق بالروبوت يعادل دماغ الحيوان، وما إلى ذلك. ومن خلال تقديم الروبوتات بهذه الطريقة، يبني\n      الكتاب صورة فكرية غير تقنية لماهية الروبوت، وكيفية عمله، ومدى «ذكائه».",
    downloadLinks: [
      {
        downloadTitle: "تحميل بهيئة ePub",
        downloadImg:
          "https://www.hindawi.org/content/images/epub-logo-round.svg",
        downloadLink: "https://downloads.hindawi.org/books/60592846.epub",
      },
      {
        downloadTitle: "تحميل بهيئة PDF",
        downloadImg:
          "https://www.hindawi.org/content/images/pdf-logo-round.svg",
        downloadLink: "https://downloads.hindawi.org/books/60592846.pdf",
      },
      {
        downloadTitle: "تحميل بهيئة KFX",
        downloadImg:
          "https://www.hindawi.org/content/images/kindle-logo-round.svg",
        downloadLink: "https://downloads.hindawi.org/books/60592846.kfx",
      },
    ],
    date: "عام ٢٠١٢.",
    aboutAuthor:
      "آلان وينفيلد: نالَ درجة الدكتوراه في مجال الهندسة الإلكترونية من جامعة «هَل» عام ١٩٨٤م، وهو أستاذُ «أخلاقياتِ الروبوتات»، والمدير السابق لوحدة التواصل العلمي بجامعة «غرب إنجلترا» في بريستول، وأستاذ زائر بجامعة يورك. شارَك في تأسيس مختبَر بريستول للروبوتات، وتُركِّز أبحاثه على مجال علوم الروبوتات الذكية وهندستها وأخلاقياتها.",
    contents: [
      {
        title: "شكر وتقدير",
        id: "/60592846/0.1/",
      },
      {
        title: "تمهيد",
        id: "/60592846/0.2/",
      },
      {
        title: "ما الروبوت؟",
        id: "/60592846/1/",
      },
      {
        title: "ما تفعله الروبوتات الآن",
        id: "/60592846/2/",
      },
      {
        title: "الروبوتات الحيوية",
        id: "/60592846/3/",
      },
      {
        title: "الروبوتات التي تشبه البشر والروبوتات البشرية",
        id: "/60592846/4/",
      },
      {
        title: "أسراب الروبوتات، والتطور، والتكافل",
        id: "/60592846/5/",
      },
      {
        title: "مستقبل علم الروبوتات",
        id: "/60592846/6/",
      },
      {
        title: "مسرد المصطلحات",
        id: "/60592846/0.3/",
      },
      {
        title: "قراءات إضافية",
        id: "/60592846/0.4/",
      },
      {
        title: "مصادر الصور",
        id: "/60592846/0.5/",
      },
    ],
  };

  async function getSpecificBook(bookId) {
    const options = {
      method: "GET",
      url: `https://arabic-books-library.p.rapidapi.com/books/${bookId}`,
      headers: {
        "X-RapidAPI-Key": "62e88e006amshab876c246db80e1p1d231ajsn3468df23ee80",
        "X-RapidAPI-Host": "arabic-books-library.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  let currentLocation = window.location.href;
  let qrGenerator = `http://api.qrserver.com/v1/create-qr-code/?data=${currentLocation}&size=100x100`;
  console.log(qrGenerator);

  useEffect(function () {
    // getSpecificBook(id)
  });

  return (
    <>
      {/*  Start Grid system*/}
      <div className="pt-24 max-w-screen-xl mx-auto grid grid-cols-6 lg:col-span-5 gap-2">
        <aside className="  col-span-4 md:col-span-2 md:col-start-3 lg:col-span-1 col-start-2">
          <img
            className="w-full rounded-md  m-auto"
            src={bookObject?.img}
            alt=""
          />

          {/*  Start STAR  ICON */}

          <div className="rating text-start flex ms-5  mt-5">
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

          <div className="border-2 w-fit h-fit p-1 rounded-md border-deep-purple-200 mx-auto mt-3 ">
            {/* <img className=" opacity-50 h-24" src={qrGenerator} alt="" />
             */}
            <QRCode
              value={window.location.href}
              className="h-24 w-24 [&>path:nth-child(2)]:fill-gray-600  "
            />
          </div>
          {/*  END  STAR  ICON */}
        </aside>

        {/*  Start BOOK  DETAILS */}

        <main className=" col-span-6 lg:col-span-5  py-10 ">
          <div className="px-5 border-b-2 border-dashed pb-3">
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
                <Link>
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
                <Link>
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
