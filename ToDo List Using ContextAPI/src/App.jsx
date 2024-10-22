import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev])
  }

  const editTodo = (id, todo)=>{
    setTodos((prev)=> prev.forEach((item)=>( item.id === id ? todo: item)))
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const statusTodo = (id)=>{
    setTodos((prev)=> prev.forEach((todo)=> todo===id ? {...prev, statusTodo: !prev.statusTodo} : todo ))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("Todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos))
  }, [])


  return (
    <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, statusTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        <TodoItem/>
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
