import React, { useState } from 'react';
import './index.css';

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




  return (
    <div>
      Date: <input name="date" type="text" onChange={inputChanged} value={todo.date}/>  
      Description: <input name="desc" type="text" onChange={inputChanged} value={todo.desc}/>
      <button onClick={addTodo}>Add</button>
      <table>
        <thead>
        </thead>
        <tbody>
            <tr>
                <th>Date</th>
                <th>Description</th>
            </tr>
          {
            todos.map((todos, index) =>
            <tr key={index}>
                <td>{todos.date}</td>
                <td>{todos.desc}</td>           
            </tr>)
          }
        </tbody>
      </table>   
    </div>
  );
};

export default TodoList;