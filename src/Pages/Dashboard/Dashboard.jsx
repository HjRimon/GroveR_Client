import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import {
  FaMicrophoneAlt,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
  FaRegBuilding,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import useAdmin from "./useAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <div className="flex items-center justify-center -ml-6 font-bold text-xl p-4">
            <img className="w-10 h-12" src="https://i.ibb.co/f8vgwnB/favicon.png" alt="logo" />
            <p>GrooveR</p>
          </div>
        </Link>
        <ul>
          {isAdmin ? (
            <>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <CgProfile className="text-2xl" />
                <NavLink to="/dashboard/adminprofile">Admin Profile</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <FaUsers className="text-2xl" />
                <NavLink to="/dashboard/managemembers">Manage Members</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <FaMicrophoneAlt className="text-2xl" />
                <NavLink to="/dashboard/makeannouncement">Make Announcement</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <VscGitPullRequestNewChanges className="text-2xl" />
                <NavLink to="/dashboard/agreementrequest">Agreement Requests</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <BiSolidOffer className="text-2xl" />
                <NavLink to="/dashboard/managecoupon">Manage Coupons</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <CgProfile className="text-2xl" />
                <NavLink to="/dashboard/profile">My Profile</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <FaMicrophoneAlt className="text-2xl" />
                <NavLink to="/dashboard/announcement">Announcements</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <FaMoneyCheckAlt className="text-2xl" />
                <NavLink to="/dashboard/payment">Make Payment</NavLink>
              </li>
              <li className="flex text-xl gap-3 p-3 cursor-pointer hover:text-cyan-500">
                <FaMoneyBillAlt className="text-2xl" />
                <NavLink to="/dashboard/payhistory">Payment History</NavLink>
              </li>
            </>
          )}
        </ul>
      </List>
      <Divider />
      <List>
        <ul>
          <li className="flex text-xl gap-3 p-3 cursor-pointer font-semibold hover:text-indigo-500">
            <FaSignOutAlt className="text-2xl" />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex text-xl gap-3 p-3 cursor-pointer font-semibold hover:text-indigo-500">
            <FaRegBuilding className="text-2xl" />
            <NavLink to="/appartment">Appartment</NavLink>
          </li>
        </ul>
      </List>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>GrooveR | | Dashboard</title>
      </Helmet>
      <div className="fixed top-0 left-0 z-10">
        <Button onClick={toggleDrawer("left", true)}>
          <RiMenuUnfoldLine className="text-4xl text-black font-extrabold" />
        </Button>
      </div>
      <div className="ml-16">
        <Outlet></Outlet>
      </div>
      <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </>
  );
};

export default Dashboard;
