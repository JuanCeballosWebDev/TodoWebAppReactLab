import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
  } else {
      // using function (addTodo) passed as a prop
      addTodo(value);
      // after adding clear input value
      setValue("");
  }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value)}
        placeholder=" Enter your task"
      />
    </form>
  );
}

export default TodoForm;