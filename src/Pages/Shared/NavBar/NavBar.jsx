import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logOut");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/appartment">Apartment</NavLink>
      </li>
      {user ? (
        <></>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/regi">Register</NavLink>
      </li>

      {/* {user && (
        <>
          <li>
            <NavLink to="/orders">Helpful Guides</NavLink>
          </li>
          <li>
            <NavLink to="/honeymone">Booking Resorts</NavLink>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100 font-pec">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[120] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img src="https://i.ibb.co/f8vgwnB/favicon.png" alt="logo-ct" className="w-10" />
          <p className="font-bold text-xl">GrooveR</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-left">
              <label tabIndex={0}>
                {user.photoURL ? (
                  <div className="flex text-center md:flex-row items-center">
                    <img
                      className="rounded-full w-10 mr-2 cursor-pointer"
                      src={user.photoURL}
                      alt="User"
                    />
                  </div>
                ) : (
                  <div className="flex text-center md:flex-row items-center">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center border border-gray-300">
                      <img
                        className="rounded-full w-10 mr-2 cursor-pointer"
                        src={user.photoURL}
                        alt="User"
                      />
                    </div>
                  </div>
                )}
              </label>
              <ul
                tabIndex={100}
                className="dropdown-content relative z-[100] w-44 h-28 mt-[-2px] space-y-2"
              >
                <li>
                  <p className="pr-2 text-white relative z-10 pl-5 pt-5">{user.displayName}</p>
                </li>
                <li>
                  <Link
                    to="/dashboard/profile"
                    className="text-white relative z-10 p-5 hover:text-cyan-400"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    onClick={handleLogOut}
                    className=" text-white  relative z-10 p-5 cursor-pointer hover:text-cyan-400"
                  >
                    Sign Out
                  </a>
                </li>
                <li className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md border border-gray-300 rounded-md pointer-events-none z-0"></li>
              </ul>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
