import React, { useContext } from 'react'
import UserContext from '../context/userContext'


function Profile() {
    
    const {user} = useContext(UserContext)

    if(!user) return <div id='msg'>Please Login!</div>

    return <div id='msg'>Welcome {user.username}</div>
}

export default Profile