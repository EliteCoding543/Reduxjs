import React from 'react'
import Navbar from './Component/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/products'  element={<Products />}/>
      </Routes>
    </div>
  )
}

export default App
