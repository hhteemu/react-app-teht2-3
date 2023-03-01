import React, { useState } from 'react';

import TodoTable from './TodoTable'

function TodoList() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);


  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    console.log(todos)
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((i) => i !== index))
    console.log(todos)
  }

  return (
    <div>
      Date: <input name="date" type="text" onChange={inputChanged} value={todo.date}/>  
      Description: <input name="desc" type="text" onChange={inputChanged} value={todo.desc}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default TodoList;