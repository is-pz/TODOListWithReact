import React from 'react';
import './TodoCounter.css';



function TodoCounter({total, completedTodos}){
    
    return (
        <h2 className='TodoCounter'>Has completado {total}  de {completedTodos} tareas</h2>
    );
}

export {TodoCounter};