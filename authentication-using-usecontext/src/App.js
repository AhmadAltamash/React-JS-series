import React from 'react'
import { useAuth } from './AuthContext'

function App() {

  const {user, loginHandler} = useAuth()

  return (
    <>
      <div>Login to see</div>
      <p>Welcome, {user.username}</p>
      <button onClick={() => loginHandler({username: 'Altamash'})}>Login</button>
    </>
    
  )
}

export default App

