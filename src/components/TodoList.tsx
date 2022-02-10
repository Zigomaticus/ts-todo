import React, { FC } from "react";

import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  toggleHandler(id: number): void;
  removeHandler(id: number): void;
};

const TodoList: FC<TodoListProps> = ({
  todos,
  toggleHandler,
  removeHandler,
}) => {
  if (todos.length === 0) {
    return <p className="center">Work is undefined yet!</p>;
  }

  const onRemove = (e: React.MouseEvent, id: number) => {
    e.preventDefault()
    removeHandler(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.checked) {
          classes.push("checked");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={toggleHandler.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => onRemove(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
