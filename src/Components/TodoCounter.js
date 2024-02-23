import React from "react";
import "../styles/index.css";
import { TodoContext } from "./TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  const title = "To-Dos";
  return completedTodos === totalTodos ? (
    <h2 className="title-complete">
      !Felicidades has completado todos tus ToDos¡
    </h2>
  ) : (
    <span className="subtitle">
      <h1 className="title">{title}</h1>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}To-Dos
    </span>
  );
}

export { TodoCounter };
