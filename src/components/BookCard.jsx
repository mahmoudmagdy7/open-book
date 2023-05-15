import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ books }) {
  return (
    <>
      <Link to={books?.id}>
        <div className="border rounded-md p-5 text-center book cursor-pointer hover:shadow-lg hover:shadow-gray-200 duration-100 h-full">
          <img src={books?.img} alt="" className="book-cover rounded-xl" />
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
      </Link>
    </>
  );
}
