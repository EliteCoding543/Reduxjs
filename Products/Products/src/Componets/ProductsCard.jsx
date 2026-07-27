import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFav } from "../Utlis/ProductSlice";

const ProductsCard = ({ item }) => {
  const dispatch = useDispatch();

  const fav = useSelector((state) => state.card.fav);
  const unFav = useSelector((state) => state.card.unFav);

  const isFav = fav.some((product) => product.id === item.id);
  const isUnFav = unFav.some((product) => product.id === item.id);

  return (
    <div className="bg-white rounded-2xl shadow-lg border hover:shadow-2xl transition duration-300 overflow-hidden">
      <div className="flex justify-center items-center">
        {/* Product Image */}
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-56 h-56 object-cover"
      />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {item.title}
        </h2>

        <p className="text-gray-500 mt-2 line-clamp-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-yellow-600">
            ${item.price}
          </span>

          <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
            ⭐ {item.rating}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button
            onClick={() => dispatch(addToFav(item))}
            disabled={isFav}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              isFav
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isFav ? " Liked" : "Like"}
          </button>

          <button
            onClick={() => dispatch(removeFav(item))}
            disabled={isUnFav}
            className={`flex-1 py-3 rounded-xl font-semibold transition ${
              isUnFav
                ? "bg-red-600 text-white cursor-not-allowed"
                : "bg-gray-800 hover:bg-black text-white"
            }`}
          >
            {isUnFav ? " Disliked" : " Dislike"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;