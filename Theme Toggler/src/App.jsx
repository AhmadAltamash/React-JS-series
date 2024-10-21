import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [defaulTheme, setTheme] = useState("light")

  const LightMode = ()=>{
    setTheme("light")
  }
  const DarkMode = ()=>{
    setTheme("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(defaulTheme)
  }, [defaulTheme])

  return (
    <ThemeProvider value={{defaulTheme, LightMode, DarkMode}}>
      <div className='m-0 p-0 box-border h-screen w-full'>
        <h1 className='text-center text-3xl py-6'>Toggle Theme Between <span className='text-gray-800'>Dark</span> And <span className='text-blue-400'>Light</span> Mode</h1>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>


      </div>
    </ThemeProvider>
  )
}

export default App
