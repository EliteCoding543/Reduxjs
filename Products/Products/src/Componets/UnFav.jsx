import { useSelector } from "react-redux";
import ProductCard from "./ProductsCard";

const UnFav = () => {
  const unFav = useSelector((state) => state.card.unFav);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {unFav.length > 0 ? (
        unFav.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
        <h1 className="text-2xl font-bold text-center">
          No UnLiked Products
        </h1>
      )}
    </div>
  );
};

export default UnFav;