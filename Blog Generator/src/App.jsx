import { useEffect, useState } from 'react'
import {Provider, useDispatch} from 'react-redux'
import {Header, Footer} from './components/index.js'
import './App.css'
import authentication from './appwrite/auth.js'
import login from './store/authSlice.js'
import logout from './store/authSlice.js'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  

  useEffect(() => {
    authentication.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])
  
  return !loading ? (
      <div className="h-screen w-full flex flex-wrap content-between bg-gray-400">
        <div className='w-full block'>
          <Header/>
          <main>
            {/* <Outlet/> */}
            Todo:
          </main>
          <Footer/>
        </div>
      </div>
  ) : null
}

export default App
