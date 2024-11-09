import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../../index.js'
import { auth } from '../../firebase-config.js'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState(null)

    const LoginAccount = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            alert('Login Successfull')
            setUser(userCredentials.user)
        })
        .catch((error)=>{
          alert('Invalid Email/Password')
        })
    }

    const LoggedOUt = () =>{
      signOut(auth)
      .then(()=>{
        setUser(null)
        alert('Logged Out')
      })
      .catch(()=>{
        alert('Error')
      })
    }

    useEffect(()=>{
      const logout = auth.onAuthStateChanged((user)=>{
        if(user){
          setUser(user)
        }
        else{
          setUser(null)
        }
      })
    })


  return (
    <div className='screen'>
        <form className="form" onSubmit={LoginAccount}>
            <h2>Log In to your account to get Started</h2>
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/></span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/></span>
          {
            user ? 
            <>
            <p>Welcome {user.email}</p>
            <span className="span"><button className='submit' type='button' onClick={LoggedOUt}>Logout</button></span>
            </>
             : <>
              <button className='submit' type='submit' onClick={LoginAccount} >Log In</button>
              <span className="span" >Don't have an account? <Link to='/signup'>Sign Up</Link></span>
             </>
          }
        
        
      </form>
    </div>
  )
}

export default Login