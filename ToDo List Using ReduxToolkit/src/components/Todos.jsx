import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch()

  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
            <li key={todo.id} className='list-none bg-blue-500 text-xl my-4'> 
                {todo.text}
                <button className='mx-8 text-xl text-red-700 font-extrabold' onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
            </li>
        ))}
    </>
  )
}

export default Todos