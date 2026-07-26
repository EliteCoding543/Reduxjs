import React, { useEffect } from 'react'
import Quotes from './Components/Quotes'
import {getQuotes} from './Utlis/QuotesSlice'
import {useDispatch} from 'react-redux'

const App = () => {
       const dis = useDispatch()

       useEffect(() => {
         dis(getQuotes())
       },[])

  return (
    <div>
       <Quotes />
    </div>
  )
}

export default App
