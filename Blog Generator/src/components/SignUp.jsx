import React, { useState } from 'react'
import { login as authLogin, login } from '../store/authSlice'
import {Logo, Input, Button} from './index'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import authentication from '../appwrite/auth.js'
import { useForm } from 'react-hook-form'

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const {handleSubmit, register} = useForm()

    const create = async(data) => {
        setError('')
        try {
            const userData = await authentication.createAccount(data)
            if(userData) {
              const userData = await authentication.getCurrentUser()
              if(userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex items-center justify-center'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
      <div className='mb-2 flex justify-center'>
        <span className='inline-block w-full max-w-[100px]'> 
          <Logo />
        </span>
      </div>
      <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
      <p className="mt-2 text-center text-base text-black/60">
      Already have an account?&nbsp;
      <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
      Sign In
      </Link>
      </p>
      {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
      <form onSubmit={handleSubmit(create)}>
        <div className="space-y-5">
          <Input type="text" name="name" placeholder="Name"
          {...register("name",{
            required: true,
          })}
          />
          <Input 
          type="email"
          placeholder='Enter Your Email'
          {...register("email", {
              required: true,
              validate: {
              matchPatern: (value)=> /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(value) || "Enter a Valid Email"
              }
          })} 
          />
          <Input
          type="password"
          placeholder='Enter Your Password'
          {...register("password", {
            required: true,
          })}
          />
          <Button type='submit' className='w-full'>
            Sign Up
          </Button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignUp