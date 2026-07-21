import {useSelector, useDispatch} from 'react-redux'
import {buyCake, reStockCake} from '../Utlis/Redux/Store'
import { useState } from 'react'

const Cakes = () => {
    const dispatch = useDispatch()
    const[q, setQ] = useState(0)

    const {numOfCakes} = useSelector((store) => {
        return store.cake
    })


  return (
    <div className='flex justify-center items-center flex-col gap-10'>
      <h1 className='text-black text-3xl font-bold'>Num of Cake : {numOfCakes}</h1>

      <input className='border h-10 w-60 rounded-xl px-4' 
        type="text" 
        onChange={(e) => {
            setQ(e.target.value)
        }}
      />

      <button className='bg-blue-700 text-white font-bold p-8 py-3 rounded-xl' onClick={() => {
        dispatch(buyCake(q))
      }}>
        Buy cake
      </button>

      <button className='bg-violet-800 text-white font-bold px-8 py-3 rounded-xl' onClick={() => {
        dispatch(reStockCake())
      }}
      >Re Stock
      </button>
    </div>
  )
}

export default Cakes
