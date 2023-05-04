import React from "react";
// ! Don't use picture as a button use button tag instead //
import logo1 from "../assets/icons/Rectangle 13.svg";
import logo2 from "../assets/icons/Rectangle 14.svg";
import line from "../assets/icons/divider.png";
import { Link } from "react-router-dom";
export default function BookDetails() {
  return (
    <>
      <bookPage className="py-24 px-10 max-w-screen-xl mx-auto grid grid-cols-6 lg:col-span-5 gap-5">
        <bookCover className="  col-span-4 md:col-span-2 md:col-start-3 lg:col-span-1 col-start-2">
          <img
            className="w-full  m-auto"
            src={require("../assets/images/book.png")}
            alt=""
          />
        </bookCover>

        <bookDetails className=" col-span-6 lg:col-span-5">
          <h1 className=" text-3xl flex">عنوان الكتاب</h1>

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

          <p className="pt-2 text-justify  ">
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

          <div className=" flex  justify-between mt-5">
            <div className=" relative ms-auto">
              <Link>
                <img className=" " src={logo2} alt="عرض تفاصيل الكتاب" />{" "}
              </Link>
            </div>

            <div className=" relative ms-5">
              <Link>
                <img className="" src={logo1} alt="تحميل الكتاب" />{" "}
              </Link>
            </div>
          </div>

          <div className=" flex mt-5">
            <img src={line} alt="" />
          </div>
        </bookDetails>
      </bookPage>
    </>
  );
}
