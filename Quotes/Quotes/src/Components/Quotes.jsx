import React from "react";
import QuotesCard from "./QuotesCard";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Quotes = () => {
  const { data, loading, error } = useSelector((state) => state.card);

  if (loading) return <Loading />;
  if (error) return <h1 className="flex justify-center items-center font-bold h-screen text-red-600 text-4xl">Failed to fetch data. Please try again...</h1>;

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* Title */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-violet-700">
          ✨ Inspirational Quotes 💫
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Explore a collection of motivational and thought-provoking quotes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <QuotesCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Quotes;