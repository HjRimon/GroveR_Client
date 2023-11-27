import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Appartment from "../Pages/Appartment/Appartment";
import Login from "../Pages/Login-Signup/Login";
import Regi from "../Pages/Login-Signup/Regi";
import Secret from "../Pages/Dashboard/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import Announcement from "../Pages/Dashboard/announcement";

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
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "announcement",
        element: <Announcement></Announcement>,
      },
    ],
  },
]);
