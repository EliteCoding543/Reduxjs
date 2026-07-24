import React, { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 p-5">
      {users.map((user) => (
        <UsersCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default AllUsers;