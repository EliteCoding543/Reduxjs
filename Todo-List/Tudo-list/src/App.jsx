import React from 'react'
import Tudo from './Componets/Tudo'

const App = () => {
  return (
    <div className="h-screen bg-linear-to-r from-gray-800 to-gray-950 flex items-center justify-center flex-col gap-6">
      <h1 className="text-white text-4xl font-bold">
       Tudo List
      </h1>

      <Tudo />
</div>
  )
}

export default App
