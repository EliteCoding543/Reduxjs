import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Logo <span className="text-yellow-300">Card</span>
      </h1>

      <div className="flex gap-8 font-bold text-2xl">

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : "hover:text-yellow-300"
          }
        >
         Products
        </NavLink>

        <NavLink
          to="/fav"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : "hover:text-yellow-300"
          }
        >
           Like
        </NavLink>

        <NavLink
          to="/unFav"
          className={({ isActive }) =>
            isActive ? "text-yellow-300" : "hover:text-yellow-300"
          }
        >
          DisLike
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;