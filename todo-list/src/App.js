import React, { useState } from "react";
import Header from './Header.js';
import './App.css';



function TodoForm({ addTodo }) {
  const [value, setValue] = useState(" ");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function Todo({ todo, index, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button className="completeButton" onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

function App() {

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  const [todos, setTodos] = useState([
    {
      text: "Check in beach-side hotel",
      isCompleted: false
    },
    {
      text: "Get some drinks",
      isCompleted: true
    },
    {
      text: "Go Scuba Diving",
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
    <Header />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;