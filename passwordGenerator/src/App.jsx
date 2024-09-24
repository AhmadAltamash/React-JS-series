import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [uppercase, setUppercase] = useState(false)
  const [number, setnumber] = useState(false)
  const [symbols, setsymbols] = useState(false)
  const [lower, setlower] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(function(){

    let pass = ""
    let str = ""

    if(number) str+="0123456789"
    if(symbols) str+="!@#$%^&*()_+"
    if(uppercase) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(lower) str+="abcdefghijklmnopqrstuvwxyz"

    for(let i = 1; i<=length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    
    setPassword(pass);

  }, [length, uppercase, number, symbols, lower, setPassword])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, uppercase, number, symbols, lower, setPassword, passwordGenerator])

  // function copy(){
  //   let input = document.querySelector(".inputText")
  //   let copy = document.querySelector(".copy")
  //   copy.addEventListener("click",()=>{
  //     input.select();
  //     alert("Copied to clipboard");
  //   })
  // }
  // copy()

  return (
    <>
      <div className='h-screen w-full m-0 p-0 box-border bg-slate-600 flex justify-center px-8 items-center'>

        <div className='w-4/6 border h-56 rounded-2xl bg-slate-800 shadow-2xl flex flex-col items-center gap-5'>
          <h1 className='uppercase text-2xl font-bold text-white py-3'>Password generator</h1>

          <span className='w-2/3 h-max border px-2 py-3 rounded-xl bg-slate-300 flex justify-between'>
            <input type='text' readOnly value={password} ref={passwordRef} className='bg-transparent outline-none w-3/4 px-3 text-lg'/>
            <button onClick={copyToClipboard} className='text-lg'><i class="ri-file-copy-line"></i>Copy</button>

          </span>

          <div className='flex gap-7'>
            <span className='flex gap-2 items-center'>
              <input type='range' min={8} max={25} value={length} className='cursor-pointer' onChange={(e)=> {setLength(e.target.value)}}/>
              <label className='text-orange-700 text-xl font-semibold'>Length: {length}</label>
            </span>

            <span className='flex gap-1.5 items-center'>
              <input type='checkbox' defaultChecked={uppercase} id='uppercaseInput' onChange={()=>{setUppercase((prev)=>!prev)}}/>
              <label className='text-white text-xl'>Uppercase</label>
            </span>

            <span className='flex gap-1.5 items-center'>
              <input type='checkbox' defaultChecked={number} id='numberInput' onChange={()=>{setnumber((prev)=>!prev)}}/>
              <label className='text-white text-xl'>Numbers</label>
            </span>

            <span className='flex gap-1.5 items-center'>
              <input type='checkbox' defaultChecked={lower} id='lowerInput' onChange={()=>{setlower((prev)=>!prev)}}/>
              <label className='text-white text-xl'>Lowercase</label>
            </span>

            <span className='flex gap-1.5 items-center'>
              <input type='checkbox' defaultChecked={symbols} id='symbolInput' onChange={()=>{setsymbols((prev)=>!prev)}}/>
              <label className='text-white text-xl'>Special Characters</label>
            </span>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
