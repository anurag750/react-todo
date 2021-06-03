import "./App.css";
import TodoForm from "./components/TodoForm";
import React, { useState, useEffect } from "react";
import Todolist from "./components/Todolist";

function App() {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    filterdHandler();
  }, [todos, status]);

  const filterdHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };

  return (
    <div className='App'>
      <header>Anurag's Todo List</header>
      <TodoForm
        input={input}
        setinput={setinput}
        todos={todos}
        setTodos={settodos}
        setstatus={setstatus}
      />
      <Todolist
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={settodos}
      />
    </div>
  );
}

export default App;
