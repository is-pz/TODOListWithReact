import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";


function AppUi(){
    return (
        <React.Fragment>

        <TodoCounter />
  
        <TodoSearch />
      
        <TodoContext.Provider>
          { ({error, loading, searchedTodos, completeTodo, deleteTodo}) =>(
            <TodoList>

              {error && <p>Estamos cargando, no desesperes</p>}
    
              {loading && <p>Estamos cargando, no desesperes</p>}
    
              {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}
    
              {searchedTodos.map(todos => (
                <TodoItem key={todos.text} text={todos.text} completed={todos.completed} onComplete={()=> completeTodo(todos.text)} onDelete={()=> deleteTodo(todos.text)}/>
              ))}
  
            </TodoList> 
          ) }
        </TodoContext.Provider>
  
        <CreateTodoButton />
      </React.Fragment>
    );
}

export { AppUi };