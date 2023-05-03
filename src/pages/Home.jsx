import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import axios from "axios";

export default function Home() {
  const [books, setBooks] = useState([]);
  async function getAllBooks() {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=0R2GrF9ih9t8HX3X8q3ZA2k3AZ09QNCX"
      );
      console.log(data.results.books);
      setBooks(data.results.books);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getAllBooks();
  }, []);
  return (
    <>
      <main className=" pt-20 pb-3">
        <div className="grid grid-cols-12 gap-x-6  mx-auto max-w-screen-2xl ">
          {/* right section  */}
          <section className=" col-span-2  col-start-2 text-start hidden lg:block md:block">
            <h2 className="text-3xl font-semibold">الاقسام</h2>
            <ul className="border rounded-lg mt-5 py-4 px-5">
              <li className="font-semibold">
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
          </section>
          {/* left section  */}
          <section className="col-span-full lg:col-span-8 md:col-span-8 sm:col-span-12 mx-5 lg:mx-0 md:mx-0  text-start">
            <h2 className="text-3xl font-semibold mb-5">الكتب</h2>
            <div className=" items-center  justify-between  py-3 border rounded-lg ">
              <div className="w-full h-5 flex justify-between">
                {/* sort option  */}
                <div className="text-center flex items-center justify-between px-4 w-32 border-e">
                  <img
                    className="h-5"
                    src={require("../assets/icons/sort.png")}
                    alt=" search icon"
                  />
                  <h6 className="font-bold  text-base">الاحدث</h6>
                  <img
                    className="h-4"
                    src={require("../assets/icons/chevron.png")}
                    alt=" search icon"
                  />
                </div>
                {/* view option */}
                <div className="flex items-center grow justify-start ms-2">
                  <button className="view-button pe-1">
                    <img
                      className="h-5 w-5"
                      src={require("../assets/icons/open-menu.png")}
                      alt=" search icon"
                    />
                  </button>
                  <button className="view-button pe-1">
                    <img
                      className="h-5 w-5"
                      src={require("../assets/icons/menu 1.png")}
                      alt=" search icon"
                    />
                  </button>
                  <button className="view-button">
                    <img
                      className="h-5 w-5"
                      src={require("../assets/icons/sidebarView.png")}
                      alt=" search icon"
                    />
                  </button>
                </div>
                {/*  menu items */}
                <ul className=" flex items-center  pe-4 cursor-pointer text-base font-semibold">
                  <li className="px-1 active ">يوم</li>
                  <li className="px-1 text-gray-400 font-normal">اسبوع</li>
                  <li className="px-1 text-gray-400 font-normal">شهر</li>
                </ul>
              </div>
            </div>

            <div className="books grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 sm:grid-cols-4 md my-5 gap-4">
              {books?.map((book) => {
                return <BookCard books={book} />;
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
