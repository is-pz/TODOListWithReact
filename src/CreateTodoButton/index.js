import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(true)
    }

    return(
        <button className="CreateTodoButton" type="" onClick={onClickButton}>+</button>
    );
}

export { CreateTodoButton };