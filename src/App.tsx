import React, { FC, useState } from "react";

import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { ITodo } from "./interfaces";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      checked: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm addHandler={addHandler} />
        <TodoList
          todos={todos}
          toggleHandler={toggleHandler}
          removeHandler={removeHandler}
        />
      </div>
    </>
  );
};

export default App;
