import React from 'react'
import SignUp from './components/signup/SignUp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Login from './components/loginUser/Login'
import Pages from './components/Pages'

function App() {
  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  )
}

export default App