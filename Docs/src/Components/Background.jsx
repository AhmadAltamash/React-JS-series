import React from 'react'

const Background = () => {
  return (
    <div className='h-screen w-full fixed z-[2]'>
        <div className='w-full py-10 flex justify-center items-center text-zinc-600 font-semibold sm:text-xl text-sm absolute top-[5%]'>Documents.</div>
        <h1 className='sm:text-[12rem] leading-none text-9xl tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Background