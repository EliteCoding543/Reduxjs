import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const User = () => {

    const { data, loading, error } = useSelector(
        (state) => state.users
    );


    if (loading) {
        return <Loading />;
    }


    if (error) {
        return (
            <h1 className="flex justify-center items-center font-bold h-screen text-red-600 text-4xl">
                Failed to fetch data. Please try again...
            </h1>
        );
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 p-5">

            {data.map((user) => (
                <UserCard 
                    key={user.id} 
                    user={user} 
                />
            ))}

        </div>
    );
};

export default User;