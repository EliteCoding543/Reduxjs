import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-900 text-white flex justify-between items-center font-semibold px-10 py-3'>
         <div>
            <NavLink to={'/'}>
              UserData
            </NavLink>
         </div>

         <div className='flex gap-6'>
          <NavLink to={"/users"} 
            className={({isActive}) => isActive ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}>
            All Users
          </NavLink>

          <NavLink to={'/AddFriend'}
           className= {({isActive}) => isActive ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}
          >
            Add Friend
          </NavLink>

          <NavLink to={'/block'}
             className= {({isActive}) => isActive ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "hover:text-cyan-400"}
          >
            Block Friend
          </NavLink>
         </div>
    </div>
  )
}

export default Navbar
