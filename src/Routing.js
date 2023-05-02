import React from "react";
import { createBrowserRouter } from "react-router-dom";

export default function Routing() {
  const router = createBrowserRouter([
    { path: "", element: <h1>hello it's working !</h1> },
  ]);
  return router
}

