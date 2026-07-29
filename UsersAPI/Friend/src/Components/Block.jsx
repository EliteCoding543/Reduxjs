import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

const Block = () => {
  const block = useSelector((state) => state.users)
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Blocked Users
      </h1>

      {
        block.addFrnd.length == 0 ? (
          <h2 className='text-gray-800 text-center text-2xl'>No Block users</h2>
        ) : (<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {block.addFrnd.map((user) => {
             return <UserCard key={user.id} user={user} />
          })}
        </div>)
      }
    </div>
  )
}

export default Block
