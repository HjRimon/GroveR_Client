import useCart from "../../Hooks/useCart";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaMicrophoneAlt, FaMoneyBillAlt, FaMoneyCheckAlt } from "react-icons/fa";

const Dashboard = () => {
  const [cart] = useCart();

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
        </ul>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="flex">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <RiMenuUnfoldLine className="text-4xl text-black font-extrabold" />
            </Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
