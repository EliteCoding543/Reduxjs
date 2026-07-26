import React from "react";

const QuotesCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200">
      <h1 className="text-5xl text-violet-500">❝</h1>

      <p className="text-lg font-medium text-gray-800 mt-4">
        {item.quote}
      </p>

      <hr className="my-10  text-blue-600" />

      <h3 className="text-right text-violet-600 font-bold">
        — {item.author}
      </h3>
    </div>
  );
};

export default QuotesCard;