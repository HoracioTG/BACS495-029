import React, { useState } from "react";
import Header from './Header.js';
import './App.css';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';

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