import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from '../Pages/Products'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-linear-to-tr from-blue-950 to-gray-800 text-white px-10 py-5 font-bold'>
      <h1>SaaS</h1>
      <NavLink to="/"
      className={({isActive}) => 
        isActive ? "bg-white rounded-xl  text-black px-3 py-2 transition duration-300" : "bg-none"
      } >
        Home
      </NavLink>

      <NavLink 
         to="/products"
         className={({isActive}) =>
            isActive ? "bg-white rounded-xl  text-black px-3 py-2 transition duration-300" : "bg-none"
        }
      >
        Products
      </NavLink>
    </div>
  )
}

export default Navbar
