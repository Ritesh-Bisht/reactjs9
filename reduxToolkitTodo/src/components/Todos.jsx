import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos(){
    const t = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    return (

    )
}
export default Todos;