import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../Componets/ProductsCard";

const Fav = () => {
  const fav = useSelector((state) => state.card.fav);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {fav.length > 0 ? (
        fav.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
        <h1 className="text-3xl font-bold text-center col-span-full">
          ❤️ No Favourite Products
        </h1>
      )}
    </div>
  );
};

export default Fav;