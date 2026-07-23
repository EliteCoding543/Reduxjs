import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Utlis/CardSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            {/* Product Image */}
            <div className="h-60 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="p-5">
              <h2 className="text-lg font-semibold line-clamp-2 h-14">
                {item.title}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <FaStar className="text-yellow-500" />
                <span>{item.rating}</span>
              </div>

              <div className="flex justify-between items-center mt-5">
                <h3 className="text-2xl font-bold text-green-600">
                  ₹ {item.price}
                </h3>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;