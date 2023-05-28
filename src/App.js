import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard/DashboardLayout";
import AddBook from "./pages/Dashboard/AddBook";
import MainDashboard from "./pages/Dashboard/MainDashboard";
import UsersData from "./pages/Dashboard/UsersData";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminProtection from "./Routing/AdminProtection";
import UserDataContext from "./Context/UserContext";

const route = createBrowserRouter([
  {
    path: "/",
    element: <UserDataContext><Layout /></UserDataContext>,
    children: [
      { path: "/", element: <Home /> },
      { path: "books/:id", element: <BookDetails /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "dashboard",
    element: <AdminProtection>
      <Dashboard />
    </AdminProtection>,
    children: [
      { path: "", element: <MainDashboard /> },
      { path: "add-book", element: <AddBook /> },
      { path: "users", element: <UserDataContext><UsersData /></UserDataContext> },
    ],
  },
]);

function App() {

  return <RouterProvider router={route} />;
}

export default App;
