import React from 'react'
import Cakes from './Components/Cakes'
import IceCream from './Components/IceCream'

const App = () => {
  return (
    <div>
        <h1 className='text-3xl'>App React + Redux</h1>

       <div className='flex flex-col gap-10'>
          <Cakes  />
          <IceCream />
       </div>
    </div>
  )
}

export default App
