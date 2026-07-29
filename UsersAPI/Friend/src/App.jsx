import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import User from './Components/User'
import AddFriend from './Components/AddFriend'
import Block from './Components/Block'
import { useDispatch } from 'react-redux'
import { getUsers } from './Utlis/UserSlice'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const dis = useDispatch()
  useEffect(() => {
        dis(getUsers())
  }, [])

  return (
    <div>
       <Navbar />
       <Toaster />
        <Routes>
            <Route path="/" element={<User />} />
            <Route path='users' element={<User />} />
            <Route path='AddFriend' element={<AddFriend />} />
            <Route path='block' element={<Block />} />
        </Routes>
    </div>
  )
}

export default App
