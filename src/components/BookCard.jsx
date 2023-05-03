import React from "react";

export default function BookCard({ books }) {
  console.log(books);
  return (
    <>
      <div className="border rounded-md p-5 text-center">
        <img src={books?.book_image} alt="" className="book-cover rounded-xl" />
        <h3 className="text-lg font-bold my-2">{books?.title}</h3>
        <div className="tags c-primary flex items-center justify-center">
          <p className="text-sm category">{books?.author}</p>
        </div>
        <div className="rating text-start flex items-center justify-center mt-2">
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
      </div>
    </>
  );
}
