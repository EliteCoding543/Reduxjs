import React from "react";
import { useSelector } from "react-redux";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.card);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <ProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;