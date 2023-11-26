import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("regi");
  const noNavBar = location.pathname.includes("login") || location.pathname.includes("regi");
  return (
    <div>
      {/* <NavBar></NavBar> */}
      {noNavBar || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
