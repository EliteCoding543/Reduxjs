import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[90vh] bg-linear-to-r from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-white">
          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Welcome to SaaS Store
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
            Discover Amazing
            <span className="text-blue-400"> Products</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Shop from thousands of premium products with the best prices,
            fast delivery, and secure payments. Experience a modern shopping
            platform built with React, Redux Toolkit and Tailwind CSS.
          </p>

          <div className="flex gap-5 mt-10">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition"
            >
              Shop Now
            </Link>

            <Link
              to="/cart"
              className="border border-white hover:bg-white hover:text-black px-7 py-3 rounded-xl font-semibold transition"
            >
              View Cart
            </Link>
          </div>

          <div className="flex gap-12 mt-12">
            <div>
              <h2 className="text-3xl font-bold">10K+</h2>
              <p className="text-gray-400">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-400">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-gray-400">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-full max-w-lg hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;