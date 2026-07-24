import React from 'react'
import {useSelector} from "react-redux"

const Title = () => {
    const data = useSelector(state => state.card)
  return (
    <div>
       {data.data.map((item, indx) => {
           return <h1 className='text-2xl text-black' key={indx.id}>{item.title}</h1>
       })}
    </div>
  )
}

export default Title
