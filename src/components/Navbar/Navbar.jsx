import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-5 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/donation"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold underline" : ""
          }
        >
          Donation
        </NavLink>
        <NavLink
          to={"/statistics"}
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold underline" : ""
          }
        >
          Statistics
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
