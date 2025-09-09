import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";
import Order from "../Pages/Order/Order/Order";
import Menu from "../Pages/Menu/Menu/Menu";

export   const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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
    ],
  },
]);