import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../Utlis/CardSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const cart = useSelector((state) => state.card);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">🛒 Cart is Empty</h1>
        <p className="text-gray-500 mt-2">
          Add some products to your cart.
        </p>

        <button onClick={() => navigate("/")} className="bg-blue-600 px-6 py-3 font-bold mt-5 rounded-xl text-white">Go To Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-white shadow-lg rounded-xl p-5 mb-5"
        >
          {/* Left Side */}
          <div className="flex items-center gap-5">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-28 h-28 object-cover rounded-lg"
            />

            <div>
              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="text-green-600 text-lg font-semibold mt-2">
                ₹ {item.price}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full text-xl"
            >
              -
            </button>

            <span className="text-xl font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full text-xl"
            >
              +
            </button>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg"
            >
              Remove
            </button>

          </div>
        </div>
      ))}

      {/* Order Summary */}
      <div className="bg-white shadow-xl rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold mb-5">
          Order Summary
        </h2>

        <div className="flex justify-between mb-3">
          <span>Total Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between text-xl font-bold border-t pt-4">
          <span>Grand Total</span>
          <span>₹ {grandTotal}</span>
        </div>

        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;