import React, { FC, useState } from "react";

interface TodoFormProps {
  addHandler(title: string): void;
}

const TodoForm: FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.addHandler(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Write name of work..."
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label className="active" htmlFor="title">
        Name of work
      </label>
    </div>
  );
};

export default TodoForm;
