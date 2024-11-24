import React from 'react';
import { useDispatch } from 'react-redux';
import authentication from '../appwrite/auth';
import { logout } from '../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch(); // Correct way to use dispatch

  const logoutHandle = async () => {
    const authInstance = authentication(dispatch);
    await authInstance.logout()
    dispatch(logout()); // Dispatch logout action to update Redux state
  };

  return (
    <button
      className='px-6 py-2 inline-block duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandle}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
