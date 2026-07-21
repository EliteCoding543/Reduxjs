import React, { useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTudo } from './Utlis/ListSlice'
import { Store } from './Utlis/Store'

const App = () => {
  const myRef = useRef()
  const dis = useDispatch()

  // Text Display ke liye 
  const data = useSelector(Store => Store.text)
  return (
    <div>
      <input className='border' ref={myRef}
      type="text"/>
      <button onClick={() =>{
        dis(addTudo(myRef.current.value))
        myRef.current.value = ""
      }}>Click</button>


      <ul>
        {
          data.map((item) => {
            return <li>{item}</li>
          }) 
        }
      </ul>
    </div>
  )
}

export default App
