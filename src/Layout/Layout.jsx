import React from "react";
import Home from "./../pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="text-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
