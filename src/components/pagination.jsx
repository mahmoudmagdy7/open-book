import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import BookCard from "./BookCard";

// Example items, to simulate fetching from another resources.
const books = [
  {
    id: "/books/60592846/",
    title: "علم الروبوتات",
    img: "https://downloads.hindawi.org/covers/svg/270x360/60592846.svg?v=5",
  },
  {
    id: "/books/82750718/",
    title: "الخطاب والتغير الاجتماعي",
    img: "https://downloads.hindawi.org/covers/svg/270x360/82750718.svg?v=5",
  },
  {
    id: "/books/48616852/",
    title: "قصة سيدة راقية",
    img: "https://downloads.hindawi.org/covers/svg/270x360/48616852.svg?v=5",
  },
  {
    id: "/books/82461796/",
    title: "المدنية",
    img: "https://downloads.hindawi.org/covers/svg/270x360/82461796.svg?v=5",
  },
  {
    id: "/books/90938482/",
    title: "شروق من الغرب",
    img: "https://downloads.hindawi.org/covers/svg/270x360/90938482.svg?v=5",
  },
  {
    id: "/books/79395094/",
    title: "مصر من ناصر  أكتوبر",
    img: "https://downloads.hindawi.org/covers/svg/270x360/79395094.svg?v=5",
  },
  {
    id: "/books/46315048/",
    title: "مملكة كنسوكي",
    img: "https://downloads.hindawi.org/covers/svg/270x360/46315048.svg?v=5",
  },
  {
    id: "/books/84282618/",
    title: "تحويلة مانهاتن",
    img: "https://downloads.hindawi.org/covers/svg/270x360/84282618.svg?v=5",
  },
  {
    id: "/books/82815090/",
    title: "الليل والجبل",
    img: "https://downloads.hindawi.org/covers/svg/270x360/82815090.svg?v=5",
  },
  {
    id: "/books/41373792/",
    title: "الهوية",
    img: "https://downloads.hindawi.org/covers/svg/270x360/41373792.svg?v=5",
  },
  {
    id: "/books/41507040/",
    title: "المنطق الإشراقي ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/41507040.svg?v=5",
  },
  {
    id: "/books/69427520/",
    title: "الفتاة ضوء القمر",
    img: "https://downloads.hindawi.org/covers/svg/270x360/69427520.svg?v=5",
  },
  {
    id: "/books/68697394/",
    title: "سهم الله",
    img: "https://downloads.hindawi.org/covers/svg/270x360/68697394.svg?v=5",
  },
  {
    id: "/books/41685149/",
    title: "من مشاهدات سائح مصري",
    img: "https://downloads.hindawi.org/covers/svg/270x360/41685149.svg?v=5",
  },
  {
    id: "/books/31350406/",
    title: "المنطق وفلسفة العلوم",
    img: "https://downloads.hindawi.org/covers/svg/270x360/31350406.svg?v=5",
  },
  {
    id: "/books/92030593/",
    title: "خان الخليلي",
    img: "https://downloads.hindawi.org/covers/svg/270x360/92030593.svg?v=5",
  },
  {
    id: "/books/64753194/",
    title: "التفكير العلمي ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/64753194.svg?v=5",
  },
  {
    id: "/books/36195847/",
    title: "الرحالة",
    img: "https://downloads.hindawi.org/covers/svg/270x360/36195847.svg?v=5",
  },
  {
    id: "/books/41979506/",
    title: "يوميات فوكس ميكي",
    img: "https://downloads.hindawi.org/covers/svg/270x360/41979506.svg?v=5",
  },
  {
    id: "/books/17491817/",
    title: "الحياة على الحافة",
    img: "https://downloads.hindawi.org/covers/svg/270x360/17491817.svg?v=5",
  },
  {
    id: "/books/51749353/",
    title: "التسويق",
    img: "https://downloads.hindawi.org/covers/svg/270x360/51749353.svg?v=5",
  },
  {
    id: "/books/27571485/",
    title: "الانتخاب الجنسي",
    img: "https://downloads.hindawi.org/covers/svg/270x360/27571485.svg?v=5",
  },
  {
    id: "/books/70929638/",
    title: "البيانات الضخمة",
    img: "https://downloads.hindawi.org/covers/svg/270x360/70929638.svg?v=5",
  },
  {
    id: "/books/41750246/",
    title: "فلسفة علم الأحياء",
    img: "https://downloads.hindawi.org/covers/svg/270x360/41750246.svg?v=5",
  },
  {
    id: "/books/93141694/",
    title: "ريادة الأعمال",
    img: "https://downloads.hindawi.org/covers/svg/270x360/93141694.svg?v=5",
  },
  {
    id: "/books/51419507/",
    title: "الفلسفة أنواعها ومشكلاتها",
    img: "https://downloads.hindawi.org/covers/svg/270x360/51419507.svg?v=5",
  },
  {
    id: "/books/81461536/",
    title: "تاريخ علم الحرارة",
    img: "https://downloads.hindawi.org/covers/svg/270x360/81461536.svg?v=5",
  },
  {
    id: "/books/48639403/",
    title: "حضرة المحترم",
    img: "https://downloads.hindawi.org/covers/svg/270x360/48639403.svg?v=5",
  },
  {
    id: "/books/46158086/",
    title: "هيكوبا وأوريستيس",
    img: "https://downloads.hindawi.org/covers/svg/270x360/46158086.svg?v=5",
  },
  {
    id: "/books/80626160/",
    title: "الإرادة",
    img: "https://downloads.hindawi.org/covers/svg/270x360/80626160.svg",
  },
  {
    id: "/books/52807474/",
    title: "روميو وجوليت",
    img: "https://downloads.hindawi.org/covers/svg/270x360/52807474.svg?v=5",
  },
  {
    id: "/books/94936319/",
    title: "تاريخ القرصنة في العالم",
    img: "https://downloads.hindawi.org/covers/svg/270x360/94936319.svg?v=5",
  },
  {
    id: "/books/40413942/",
    title: "مدخل إلى العلاج النفسي ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/40413942.svg?v=5",
  },
  {
    id: "/books/14831357/",
    title: "دنيا الله",
    img: "https://downloads.hindawi.org/covers/svg/270x360/14831357.svg?v=5",
  },
  {
    id: "/books/42073585/",
    title: "البطل",
    img: "https://downloads.hindawi.org/covers/svg/270x360/42073585.svg?v=5",
  },
  {
    id: "/books/39520625/",
    title: "سيرة أحمد بن طولون",
    img: "https://downloads.hindawi.org/covers/svg/270x360/39520625.svg?v=5",
  },
  {
    id: "/books/73070862/",
    title: "الانقلاب العثماني، ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/73070862.svg?v=5",
  },
  {
    id: "/books/30717164/",
    title: "الليلة الثانية عشرة: أو ما شئت!",
    img: "https://downloads.hindawi.org/covers/svg/270x360/30717164.svg?v=5",
  },
  {
    id: "/books/47590408/",
    title: "تاريخ الصحافة العربية",
    img: "https://downloads.hindawi.org/covers/svg/270x360/47590408.svg?v=5",
  },
  {
    id: "/books/64247319/",
    title: "علم الحياة الكمومي",
    img: "https://downloads.hindawi.org/covers/svg/270x360/64247319.svg?v=5",
  },
  {
    id: "/books/15297205/",
    title: "النقد المنهجي ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/15297205.svg?v=5",
  },
  {
    id: "/books/29737203/",
    title: "يُوليوس قيصر",
    img: "https://downloads.hindawi.org/covers/svg/270x360/29737203.svg?v=5",
  },
  {
    id: "/books/53040907/",
    title: "الفُرسان الثلاثة",
    img: "https://downloads.hindawi.org/covers/svg/270x360/53040907.svg?v=5",
  },
  {
    id: "/books/75153030/",
    title: "رحلة في فكر زكي نجيب محمود",
    img: "https://downloads.hindawi.org/covers/svg/270x360/75153030.svg?v=5",
  },
  {
    id: "/books/47584749/",
    title: "مسرحيات أيسخولوس",
    img: "https://downloads.hindawi.org/covers/svg/270x360/47584749.svg?v=5",
  },
  {
    id: "/books/95095863/",
    title: "مصر التي في خاطري",
    img: "https://downloads.hindawi.org/covers/svg/270x360/95095863.svg?v=5",
  },
  {
    id: "/books/80605046/",
    title: "لب التاريخ ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/80605046.svg?v=5",
  },
  {
    id: "/books/73681742/",
    title: "تأويل الظاهريات ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/73681742.svg?v=5",
  },
  {
    id: "/books/79060903/",
    title: "معيار البيتكوين  ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/79060903.svg?v=5",
  },
  {
    id: "/books/68137527/",
    title: "حاملات القرابين ",
    img: "https://downloads.hindawi.org/covers/svg/270x360/68137527.svg?v=5",
  },
];

function Items({ currentItems }) {
  return (
    <>
      <div
        id="books-container"
        className=" grid  md:grid-cols-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-5 gap-4"
      >
        {currentItems?.map((book, index) => {
          return <BookCard key={index} books={book} />;
        })}
      </div>
    </>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  useEffect((eventHandler) => {
    const container = document.querySelector(
      ".pagination-container"
    ).childNodes;
    const firstPage = document.querySelector(".page-number:nth-child(2)");
    const lastPage = document.querySelector(".page-number:nth-last-child(2)");
    const activePage = document.querySelector(".pagination-container");
    // eslint-disable-next-line no-loop-func
    for (let i = 0; i < container.length; i++) {
      container[i].addEventListener("click", (eventHandler) => {
        if (
          i === 1 ||
          container[i].nextSibling?.nextSibling?.getAttribute("class") ===
            "page-number active-page-number"
        ) {
          firstPage.style.cssText = `border-right: solid 1px var(--c-Primary);`;
          lastPage.style.cssText = `border-left: solid 1px var(--c-Grey-02)`;
          activePage.style.setProperty("--transform", "-50%");
        } else if (
          i === container.length - 2 ||
          container[i].previousSibling?.previousSibling?.getAttribute(
            "class"
          ) === "page-number active-page-number"
        ) {
          lastPage.style.cssText = `border-left: solid 1px var(--c-Primary)`;
          firstPage.style.cssText = `border-right: solid 1px var(--c-Grey-02)`;
          activePage.style.setProperty("--transform", "50%");
        } else {
          lastPage.style.cssText = `border-left: solid 1px var(--c-Grey-02)`;
          firstPage.style.cssText = `border-right: solid 1px var(--c-Grey-02);`;
          activePage.style.setProperty("--transform", "0");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, []);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = books.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(books.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // activeElementEnhancer(event);

    const newOffset = (event.selected * itemsPerPage) % books.length;

    setItemOffset(newOffset);
  };

  const previousBtn = (
    <div className="font-semibold flex items-center text-sm">
      <span className="fas fa-angle-right px-1"></span>
      <span className="text-base">السابق</span>
    </div>
  );
  const nextBtn = (
    <div className="font-semibold flex items-center text-sm">
      <span className="text-base">التالي</span>
      <span className="fas fa-angle-left px-1"></span>
    </div>
  );

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={nextBtn}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={3}
        previousLabel={previousBtn}
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        activeClassName="active-page-number"
        pageClassName="page-number"
      />
    </>
  );
}
