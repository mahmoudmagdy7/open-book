import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ books }) {
  return (
    <>
      <Link to={books?.id}>
        <div className="book border bg-gray-200 rounded-md p-5 text-center  cursor-pointer hover:shadow-lg hover:shadow-gray-200 duration-100 h-full">
          <img src={books?.img} alt="" className="book-cover rounded-xl" />
          <div className="flex flex-col gap-2">
            <div className="heading ">
              <div className="flex flex-col ">
                <h3 className="text-lg font-bold my-2">{books?.title}</h3>
                <div className="tags c-primary flex items-center justify-center">
                  <p className="text-sm category">قصص اطفال , تاريخ</p>
                </div>
              </div>
              <div className="rating-container ms-auto">
                <div className="rating  text-start flex items-center justify-center mt-2">
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
                </div>
                <div className="rating-count hidden items-center gap-2 text-gray-500">
                  <h3 className="font-bold">4.0</h3>
                  <p>
                    235 <span>مراجعة</span>
                  </p>
                </div>
              </div>
            </div>

            {/* description  */}
            <p className="hidden description">
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
          </div>
        </div>
      </Link>
    </>
  );
}
