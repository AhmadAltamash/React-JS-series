import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId} = useParams()
  return (
    <div className='text-center font-bold text-2xl'>User: {userId}</div>
  )
}

export default User