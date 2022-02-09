import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4} from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "React Hooks in Depth",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Write Articles @ Medium",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Share article at Reddit",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    // add new todo to the todos array (id, text, isCompleted)
    const newTodos = [
      ...todos, // shallow copy of existing todo array (aka. Object.assign())
      {
        id: uuidv4(),
        text: text,
        isCompleted: false
      }
    ];
    setTodos(newTodos);
    
  };

  const completeTodo = (index) => {
    const temporaryTodos = [...todos]; // shallow copy (aka. Object.assign())
    const indexArray = temporaryTodos.findIndex((todo) => todo.id === index);
    if (temporaryTodos[indexArray].isCompleted === false)
      temporaryTodos[indexArray].isCompleted = true;
    else
      temporaryTodos[indexArray].isCompleted = false;
    setTodos(temporaryTodos);
  };

  const removeTodo = (index) => {
    const temporaryTodos = [...todos]; // shallow copy (aka. Object.assign())
    const newTemporaryTodos = temporaryTodos.filter(todo => todo.id !== index);
    setTodos(newTemporaryTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1 className="title">Todo App</h1>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
