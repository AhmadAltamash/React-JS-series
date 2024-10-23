import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{
        id: 1,
        text: "Buy Milk",
    }]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            todos = {
                id: nanoid(),
                text: action.payload
            },
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer