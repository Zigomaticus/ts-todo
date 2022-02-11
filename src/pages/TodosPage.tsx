import React, { FC, useState, useEffect } from "react";

import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { ITodo } from "../interfaces";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const removeElement = window.confirm("Do you want to delete this element?");
    if (removeElement) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <TodoForm addHandler={addHandler} />
      <TodoList
        todos={todos}
        toggleHandler={toggleHandler}
        removeHandler={removeHandler}
      />
    </div>
  );
};

export default TodosPage;
