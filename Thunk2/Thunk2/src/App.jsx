import React, { useEffect } from 'react'
import Title from './Components/Title'
import { getUser } from './Utlis/Products'
import {useDispatch, useSelector} from 'react-redux'
import Image from './Components/Image'

const App = () => {
  const dis = useDispatch()

  useEffect(() => {
         dis(getUser())
  }, [])

  return (
    <div>
      <Image />
      <Title />
    </div>
  )
}

export default App
