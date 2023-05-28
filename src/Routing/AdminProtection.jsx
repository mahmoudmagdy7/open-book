import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtection({ children }) {
  if (localStorage.getItem("userRole") === "admin") {
    console.log(localStorage.getItem("userRole"));
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />;
  }
}
