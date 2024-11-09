import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './loginUser/Login'
import SignUp from './signup/SignUp'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default Pages