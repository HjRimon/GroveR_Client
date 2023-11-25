import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Appartment from "../Pages/Appartment/Appartment";
import Login from "../Pages/Login-Signup/Login";
import Regi from "../Pages/Login-Signup/Regi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appartment",
        element: <Appartment></Appartment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regi",
        element: <Regi></Regi>,
      },
    ],
  },
]);
