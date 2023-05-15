import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import AddBook from "./pages/Dashboard/AddBook";
import MainDashboard from "./pages/Dashboard/MainDashboard";
import UsersData from "./pages/Dashboard/UsersData";

const route = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "books/:id", element: <BookDetails /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <MainDashboard /> },
      { path: "add-book", element: <AddBook /> },
      { path: "users", element: <UsersData /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
