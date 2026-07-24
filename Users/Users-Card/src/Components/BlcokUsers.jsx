import React from "react";
import { useSelector } from "react-redux";
import UsersCard from "./UsersCard";

const BlcokUsers = () => {
  const blocked = useSelector((state) => state.card.block);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Blocked Users
      </h1>

      {blocked.length === 0 ? (
        <h2 className="text-center text-gray-500 text-xl">
          No Blocked Users
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blocked.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlcokUsers;