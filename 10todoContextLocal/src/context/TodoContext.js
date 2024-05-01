import {createContext, useContext } from "react"

export const TodoContext= createContext({
    todo:[
        {
            id:1,
            todo:"TODO MESSAGE",
            completed:false
        },
        {
        },
        {
        },
    ],
        todo:()=>{},
        addTodo: (todo) =>{},
        updateTodo : (todo) => {},
        deleteTodo : (id) => {},
        toggleComplete : (id) => {},

})

export const useTodo= ()=>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider

