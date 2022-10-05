import React from "react";
import './TodoSearch.css';


function TodoSearch({searchValue, setSearchValue}){
    

    const onSearchValueChange = (e)=>{
        setSearchValue(e.target.value);
    }

    return (
        <input onChange={onSearchValueChange} className="TodoSearch" type="text" name="" value={searchValue} placeholder="Text"/>
    );
}

export {TodoSearch};