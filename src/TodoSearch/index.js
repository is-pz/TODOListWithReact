import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';


function TodoSearch(){
    
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (e)=>{
        setSearchValue(e.target.value);
    }

    return (
        <input onChange={onSearchValueChange} className="TodoSearch" type="text" name="" value={searchValue} placeholder="Text"/>
    );
}

export {TodoSearch};