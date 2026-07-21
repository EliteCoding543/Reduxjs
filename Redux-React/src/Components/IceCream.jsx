import {useSelector, useDispatch} from 'react-redux'
import {buyIceCream, ReStockIceCream} from '../Utlis/Redux/IceCream'
import { useState } from 'react'

const IceCream = () => {
 const dispatch = useDispatch()
    const[q, setQ] = useState(0)

    const {numOfIceCream} = useSelector((store) => {
        return store.iceCream
    })

  return (
    <div className='flex justify-center items-center flex-col gap-10'>
      <h1 className='text-black text-3xl font-bold'>Num of Ice Cream : {numOfIceCream}</h1>

      <input className='border h-10 w-60 rounded-xl px-4' 
        type="text" 
        onChange={(e) => {
            setQ(e.target.value)
        }}
      />

      <button className='bg-blue-700 text-white font-bold p-8 py-3 rounded-xl' onClick={() => {
        dispatch(buyIceCream(q))
      }}>
        Buy cake
      </button>

      <button className='bg-violet-800 text-white font-bold px-8 py-3 rounded-xl' onClick={() => {
        dispatch(ReStockIceCream())
      }}
      >Re Stock
      </button>
    </div>
  )
}


export default IceCream
