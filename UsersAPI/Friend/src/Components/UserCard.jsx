import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { addFriend, removeFriend } from "../Utlis/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";


const UserCard = ({ user }) => {

  const dispatch = useDispatch();


  const { addFrnd } = useSelector(
    (state) => state.users
  );


  const isFriend = addFrnd.some(
    (item) => item.id === user.id
  );


  return (
    <div className="bg-white shadow-lg rounded-2xl border border-blue-300 p-6 hover:shadow-2xl transition-all">

      <div className="flex flex-col xl:flex-row gap-8">


        {/* Image */}
        <div className="flex justify-center xl:w-1/3 items-center">

          <div className="bg-white rounded-xl shadow-md shadow-blue-300 p-4 flex justify-center items-center">

            <img
              src={user.image}
              alt={user.firstName}
              className="w-26 h-26 object-cover rounded-full"
            />

          </div>

        </div>



        {/* Details */}
        <div className="flex-1 flex flex-col gap-5">


          <h1 className="text-3xl font-bold text-center xl:text-left">
            {user.firstName} {user.lastName}
          </h1>



          {/* Email */}
          <div className="flex items-center gap-4">

            <div className="bg-blue-100 h-12 w-12 rounded-xl flex justify-center items-center shrink-0">
              <MdEmail className="text-2xl text-blue-500" />
            </div>


            <div>
              <p className="text-gray-500">
                Email
              </p>

              <p className="font-semibold break-all">
                {user.email}
              </p>
            </div>

          </div>




          {/* Phone */}
          <div className="flex items-center gap-4">

            <div className="bg-green-100 h-12 w-12 rounded-xl flex justify-center items-center shrink-0">
              <FaPhoneAlt className="text-xl text-green-600" />
            </div>


            <div>

              <p className="text-gray-500">
                Phone
              </p>

              <p className="font-semibold">
                {user.phone}
              </p>

            </div>

          </div>




          {/* Company */}
          <div className="flex items-center gap-4">

            <div className="bg-yellow-100 h-12 w-12 rounded-xl flex justify-center items-center shrink-0">
              <FaBuilding className="text-xl text-yellow-600" />
            </div>


            <div>

              <p className="text-gray-500">
                Company
              </p>

              <p className="font-semibold">
                {user.company.name}
              </p>

            </div>

          </div>




          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">


            {
              isFriend ? (

                <button
                  onClick={() => {
                    dispatch(removeFriend(user.id));
                    toast.error(`${user.firstName} removed`);
                  }}

                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl cursor-pointer"
                >
                  Remove Friend
                </button>


              ) : (

                <button
                  onClick={() => {
                    dispatch(addFriend(user));
                    toast.success(`${user.firstName} added as Friend`);
                  }}

                  className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-xl cursor-pointer"
                >
                  Add Friend
                </button>

              )

            }


          </div>


        </div>

      </div>

    </div>
  );
};


export default UserCard;