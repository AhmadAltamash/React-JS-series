import React from 'react'
import { useDispatch } from 'react-redux'
import services from '../appwrite/conf'
import {logout} from '../store/authSlice'


function LogoutBtn() {
  const dispatch = new useDispatch()
  const logoutHandle = ()=>{
    services.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <button className='px-6 py-2 inline-block duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn