import React from "react";
import { useSelector } from "react-redux";
import UsersCard from "./UsersCard";

const AddUsers = () => {
  const friends = useSelector((state) => state.card.friend);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Friends List
      </h1>

      {friends.length === 0 ? (
        <h2 className="text-center text-gray-500 text-xl">
          No Friends Added
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {friends.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddUsers;