import React from 'react'
import User from './Componets/User'
import Email from './Componets/Email'
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from './Utlis/UserSlice'
import { useEffect } from 'react'

const App = () => {
  const dis = useDispatch()

  useEffect(() => {
         dis(getUser())
  }, [])

  return (
    <div className='flex justify-center items-center h-screen'>
      <User /> 
      <Email />
    </div>
  )
}

export default App
