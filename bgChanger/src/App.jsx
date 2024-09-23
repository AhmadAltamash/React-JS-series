import { useState } from "react"

function App() {
  const [colour, setColour] = useState("")

  return (
    <>
      <div className="h-screen w-full duration-500 ease-linear" 
      style={{backgroundColor:colour}}>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-2 px-2 py-1 bg-white w-max rounded-xl">
         <button style={{backgroundColor:'red'}} className="w-max px-4 py-1 font-bold text-white rounded-xl"
         onClick={() => setColour("red")}>Red</button>
          <button style={{backgroundColor:'black'}} className="w-max px-4 py-1 font-bold text-white rounded-xl"
          onClick={() => setColour("black")}>Black</button>
          <button style={{backgroundColor:'green'}} className="w-max px-4 py-1 font-bold text-white rounded-xl"
          onClick={() => setColour("green")}>Green</button>
          <button style={{backgroundColor:'purple'}} className="w-max px-4 py-1 font-bold text-white rounded-xl"
          onClick={() => setColour("purple")}>Purple</button>
          <button style={{backgroundColor:'blue'}} className="w-max px-4 py-1 font-bold text-white rounded-xl
          " onClick={() => setColour("blue")}>Blue</button>
          <button style={{backgroundColor:'brown'}} className="w-max px-4 py-1 font-bold text-white rounded-xl
          " onClick={() => setColour("brown")}>Brown</button>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
