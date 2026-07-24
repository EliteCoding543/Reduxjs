import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-8 py-5 bg-slate-900 text-white">

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-cyan-500 px-4 py-2 rounded-lg font-semibold"
            : "px-4 py-2 hover:text-cyan-400"
        }
      >
        All Users
      </NavLink>

      <NavLink
        to="/addUsers"
        className={({ isActive }) =>
          isActive
            ? "bg-green-500 px-4 py-2 rounded-lg font-semibold"
            : "px-4 py-2 hover:text-green-400"
        }
      >
        Friends
      </NavLink>

      <NavLink
        to="/blockUsers"
        className={({ isActive }) =>
          isActive
            ? "bg-red-500 px-4 py-2 rounded-lg font-semibold"
            : "px-4 py-2 hover:text-red-400"
        }
      >
        Blocked
      </NavLink>

    </div>
  );
};

export default Navbar;