import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Order from "../Pages/Order/Order/Order";
import Menu from "../Pages/Menu/Menu/Menu";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Our-menu",
        element: <Menu />,
      },
      {
        path: "/Order-Now",
        element: <Order />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);
