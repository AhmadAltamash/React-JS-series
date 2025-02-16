import React from 'react'
import { Background, Foreground } from './Components'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground/>
    </div>
  )
}

export default App