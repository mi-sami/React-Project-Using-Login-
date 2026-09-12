import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 flex justify-between">

      <div className="text-white px-4 py-2 m-4 font-bold text-[20px]"><span>Logo</span></div>


    <div className="flex gap-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-white rounded m-4 bg-green-500 px-4 py-2" : "text-black px-4 py-2 m-4 hover:text-white")}
      >
        Home
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? "text-white rounded m-4 bg-green-500 px-4 py-2" : "text-black px-4 py-2 m-4 hover:text-white")}
      >
        Signup
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "text-white rounded m-4 bg-green-500 px-4 py-2" : "text-black px-4 py-2 m-4 hover:text-white")}
       >
        Login
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "text-white rounded m-4 bg-green-500 px-4 py-2" : "text-black p-4 px-4 py-2 m-4 hover:text-white transition-colors duration-200")}
      >
        Dahsboard
      </NavLink>
    </div>



    </div>
  );
};

export default Navbar;
