import React from "react";
import './CreateTodoButtom.css';

function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }

    return(
        <button className="CreateTodoButton" type="" onClick={onClickButton}>+</button>
    );
}

export { CreateTodoButton };