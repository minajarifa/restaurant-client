import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main";

export   const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
      children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);