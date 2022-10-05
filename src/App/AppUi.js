import React from "react";
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUi({totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }){
    return (
        <React.Fragment>
        <TodoCounter total={totalTodos} completedTodos={completedTodos} />
  
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
  
        <TodoList>
  
          {searchedTodos.map(todos => (
            <TodoItem key={todos.text} text={todos.text} completed={todos.completed} onComplete={()=> completeTodo(todos.text)} onDelete={()=> deleteTodo(todos.text)}/>
          ))}
  
        </TodoList>
  
        <CreateTodoButton />
      </React.Fragment>
    );
}

export { AppUi };