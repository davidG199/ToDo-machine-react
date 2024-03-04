import React from "react";
import "../styles/index.css";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const title = "To-Dos";
  return(
    <span className="subtitle">
      <h1 className="title">{title}</h1>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}To-Dos
    </span>
  );
}

export { TodoCounter };
