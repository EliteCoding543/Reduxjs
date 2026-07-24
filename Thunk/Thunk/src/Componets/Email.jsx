import React from 'react'
import {useSelector} from 'react-redux'

const Email = () => {
      const data = useSelector(store => store.user)

      if(data.loading){
        return <h1>Loading....</h1>
      }

  return (
    <div>
         <ul className=''>
            {data.data.map((item, idx) => {
                return <li className='p-2' key={idx}>{item.email}</li>
            })}
         </ul>
    </div>
  )
}

export default Email
