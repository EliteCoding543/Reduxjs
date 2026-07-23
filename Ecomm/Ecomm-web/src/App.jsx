import React from 'react'
import Navbar from './Component/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/products'  element={<Products />}/>
         <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App
