import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Appartment from "../Pages/Appartment/Appartment";
import Login from "../Pages/Login-Signup/Login";
import Regi from "../Pages/Login-Signup/Regi";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Dashboard/Profile";
import Announcement from "../Pages/Dashboard/announcement";
import MakePayment from "../Pages/Dashboard/MakePayment";
import Agreementrequest from "../Pages/Dashboard/Agreementrequest";
import Managemembers from "../Pages/Dashboard/Managemembers";
import AdminRoute from "./AdminRoute";
import AdminProfile from "../Pages/Dashboard/AdminProfile";
import CouponManagement from "../Pages/Dashboard/CouponManagement";
import AnnouncementManagement from "../Pages/Dashboard/AnnouncementManagement";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ErrorPage from "../Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "announcement",
        element: <Announcement></Announcement>,
      },
      {
        path: "payment",
        element: <MakePayment></MakePayment>,
      },
      {
        path: "payhistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment/ipayment/:id",
        element: <Payment></Payment>,
      },

      {
        path: "agreementrequest",
        element: (
          <AdminRoute>
            <Agreementrequest></Agreementrequest>
          </AdminRoute>
        ),
      },
      {
        path: "managemembers",
        element: (
          <AdminRoute>
            <Managemembers></Managemembers>
          </AdminRoute>
        ),
      },
      {
        path: "adminprofile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "managecoupon",
        element: (
          <AdminRoute>
            <CouponManagement></CouponManagement>
          </AdminRoute>
        ),
      },
      {
        path: "makeannouncement",
        element: (
          <AdminRoute>
            <AnnouncementManagement></AnnouncementManagement>
          </AdminRoute>
        ),
      },
    ],
  },
]);
