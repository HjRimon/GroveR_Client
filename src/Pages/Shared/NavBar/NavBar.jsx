// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import favicon from "../../../assets/favicon.png";
// import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);

  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {
  //         console.log("User logOut");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/appartment">Apartment</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          <img src={favicon} alt="logo-ct" className="w-10" />
          <p className="font-bold text-xl">GrooveR</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-left">
              <label tabIndex={0}>
                {user.photoURL ? (
                  <div className="flex text-center md:flex-row items-center">
                    <img className="rounded-full w-10 mr-2" src={user.photoURL} alt="User" />
                    <p className="pr-2">{user.displayName}</p>
                  </div>
                ) : (
                  <div className="flex text-center md:flex-row items-center">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center border border-gray-300">
                      <p className="text-center text-xs">No image</p>
                    </div>
                    <p className="p-2">{user.displayName}</p>
                  </div>
                )}
              </label>

              <ul tabIndex={0} className="dropdown-content z-[1] w-28 mt-[-2px]">
                <li>
                  <a onClick={handleLogOut} className="btn">
                    Sign Out{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
