import React, { useEffect } from 'react'
import {Routes , Route} from 'react-router-dom'
import Navbar from './Componets/Navbar'
import Fav from './Componets/Fav'
import UnFav from './Componets/UnFav'
import Products from './Componets/Products'
import {useDispatch} from 'react-redux'
import {getCard} from './Utlis/ProductSlice'

const App = () => {
  const dis = useDispatch();

  useEffect(() => {
        dis(getCard())
  }, [])

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='fav' element={<Fav />} />
        <Route path='unFav' element={<UnFav />} />
      </Routes>
    </div>
  )
}

export default App
