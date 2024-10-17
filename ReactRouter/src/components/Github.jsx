import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState()
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AhmadAltamash')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center bg-red-300 text-4xl text-white font-bold'>Github Followers: {data.followers}
    <img src={data.avatar_url} width={300}/>
    </div>

  )
}

export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/AhmadAltamash')
    return response.json()
}