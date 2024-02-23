import React from "react";
import "../styles/index.css";
import { TodoContext } from "./TodoContext";

function TodoSearch(){
  const { searchValue, setSearchValue } = React.useContext(TodoContext) 

  return (
    <input
      placeholder="Buscar tarea"
      className="todoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
