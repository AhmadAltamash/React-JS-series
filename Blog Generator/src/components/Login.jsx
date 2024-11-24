import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Logo, Input, Button } from './index';
import { useDispatch } from 'react-redux';
import authentication from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const authInstance = authentication(dispatch);

    const login = async (data) => {
        setError("");
        try {
            const session = await authInstance.login(data);
            if (session) {
                const userData = await authInstance.getCurrentUser();
                if (userData) {
                    dispatch(authLogin(userData)); // Dispatch login to store user data
                    navigate('/'); // Redirect to home page after successful login
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold'>Sign in to Your Account</h2>
                <p>
                    Don&apos;t have an account?&nbsp;
                    <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            type="email"
                            placeholder='Enter Your Email'
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(value) || "Enter a Valid Email"
                                }
                            })}
                        />
                        <Input
                            type='password'
                            placeholder='Password'
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                }
                            })}
                        />
                        <Button type='submit' className='w-max'>Sign In</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
