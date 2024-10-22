import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todos: "Buy milk",
        completed: false,
    }],
    addTodo: (todos) => {},
    editTodo: (id) => {},
    deleteTodo: (id) => {},
    statusTodo: (id) => {},
})

export const UseTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider