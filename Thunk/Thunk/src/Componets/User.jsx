import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const User = () => {
        const data = useSelector((store) => {
            return store.user
        })

       if(data.looading){
          return <h1>Loading...</h1>
       }

       if(data.error){
           return <h1>{data.error}</h1>
       }


  return (
    <div>
       <ul>
          {data.data.map((item, idx) => {
            return <li className='p-2' key={idx}>{item.name}</li>
          })}
       </ul>
    </div>
  )
}

export default User
