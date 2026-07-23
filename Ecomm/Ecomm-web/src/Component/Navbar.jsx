import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => {
    let total = 0;

    for (let item of state.card) {
      total += item.quantity;
    }

    return total;
  });

  return (
    <div className="flex justify-between items-center bg-linear-to-tr from-blue-950 to-gray-800 text-white px-10 py-5 font-bold">

      <h1 className="text-2xl">SaaS</h1>

      <div className="flex items-center gap-8">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black px-4 py-2 rounded-xl"
              : "px-4 py-2"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black px-4 py-2 rounded-xl"
              : "px-4 py-2"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `relative px-4 py-2 ${
              isActive ? "bg-white text-black rounded-xl" : ""
            }`
          }
        >
          Cart

          {quantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs">
              {quantity}
            </span>
          )}
        </NavLink>

      </div>
    </div>
  );
};

export default Navbar;