import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const UsersCard = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border gap-3">
          <div className="flex gap-2">
            <div className="flex justify-center items-center">
              <img src={user.image} alt="" />
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-center">{`${user.firstName} ${user.lastName}`}</h1>

                <div className="flex gap-4 justify-center items-center">
                   <div className="bg-blue-100 h-10 w-10 flex justify-center items-center rounded-xl">
                      <MdEmail className="text-2xl text-blue-400" />
                   </div>

                   <div className="gap-5">
                     <p className="text-gray-500">Email</p>
                     <h6 className="font-bold text-gray-800">{user.email}</h6>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="bg-green-50 h-10 w-10 flex justify-center items-center rounded-xl">
                      <FaPhoneAlt className="text-2xl text-green-400" />
                   </div>

                   <div className="gap-5">
                     <p className="text-gray-500">Phone</p>
                     <h6 className="font-bold text-gray-800">{user.phone}</h6>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="bg-yellow-50 h-10 w-10 flex justify-center items-center rounded-xl">
                      <FaBuilding className="text-2xl text-yellow-600" />
                   </div>

                   <div className="gap-5">
                     <p className="text-gray-500">Company</p>
                     <h6 className="font-bold text-gray-800">AccioJob</h6>
                   </div>
                </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-6">
            <button className="bg-violet-100 text-violet-500 font-bold px-6 py-2 rounded-xl hover:bg-violet-200 transition duration-300">Add Friend</button>
            <button className="bg-red-200 text-red-500 font-bold px-6 py-2 rounded-xl hover:bg-red-300 hover:text-red-600">Block User</button>
          </div>
    </div>
  );
};

export default UsersCard;