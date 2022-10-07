import React from "react";
import {TodoContext} from "../TodoContext"
import '.TodoForm.css';

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const { addTodo, setOpenModal} = React.useContext(TodoContext)
    
    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onAdd = (e) => {
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onAdd}>
            <label for=""></label>
            <textarea rows="" cols="" placeholder="Escribe un TODO" value={newTodoValue} onChange={onChange}/>
            <div>
                <button onClick={onCancel} type="button">Cancelar</button>
                <button type="submit">Agregar</button>
            </div>
        </form>
    );  
}

export { TodoForm }