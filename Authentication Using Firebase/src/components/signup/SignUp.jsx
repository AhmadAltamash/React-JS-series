import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../../index.js'
import { auth } from '../../firebase-config.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            alert('Account Created')
        })
    }

  return (
    <div className='screen'>
        <form className="form" onSubmit={createAccount}>
            <h2>Create an account to get Started</h2>
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/></span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/></span>
        {/* <span className="span"><a href="#">Forgot password?</a></span> */}
        <button className='submit' type='submit'>Sign Up</button>
        <span className="span" >Already have an account? <Link to='/'>Log In</Link></span>
      </form>
    </div>
  )
}

export default SignUp