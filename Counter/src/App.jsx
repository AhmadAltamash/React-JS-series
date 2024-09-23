import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let p = ''

  function addValue(){
    if(count < 20) setCount(count + 1);
    else{
      p = 'You have reached the maximum value'
    }
  }
  function removeValue(){
    if(count > 0) setCount(count - 1);
    else{
      p = 'You have reached the minimum value'
    }
  }
  return (
    <>
      <h1>Counter: {count}</h1>
      <p>Haa bhai {p}</p>
      <div class="btn">
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div>
    </>
  )
}

export default App
