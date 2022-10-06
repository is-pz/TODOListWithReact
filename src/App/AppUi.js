import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";


function AppUi(){

    const {error, loading, searchedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext)

    return (
        <React.Fragment>

        <TodoCounter />
  
        <TodoSearch />
      
    
          
          <TodoList>

            {error && <p>Desesperate</p>}
  
            {loading && <p>Estamos cargando, no desesperes</p>}
  
            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
  
            {searchedTodos.map(todos => (
              <TodoItem key={todos.text} text={todos.text} completed={todos.completed} onComplete={()=> completeTodo(todos.text)} onDelete={()=> deleteTodo(todos.text)}/>
            ))}

          </TodoList> 
        
   
  
        <CreateTodoButton />
      </React.Fragment>
    );
}

export { AppUi };