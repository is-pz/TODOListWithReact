import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text:'Cortar cebolla', completed: 'false'},
  {text:'Tomar curso de react', completed: 'false'},
  {text:'Llorar con la llorona', completed: 'false'},
];

function App() {
  const [ todos, setTodos ] = React.useState(defaultTodos)
  const [ searchValue, setSearchValue ] = React.useState('')
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  return(
    <React.Fragment>
      <TodoCounter total={totalTodos} completedTodos={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <TodoList>

        {searchedTodos.map(todos => (
          <TodoItem key={todos.text} text={todos.text} completed={todos.completed} />
        ))}

      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );

}

export default App;
