import "../styles/index.css";
import "../styles/TodoForm.css";
import React from "react";
import {TodoContext} from "./TodoContext"

function TodoForm() {
  const { 
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }
  
  const onCancel = () => {
    setOpenModal(false);
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe algo"
        required
      />

      <div className="TodoForm-containe-btn">
        <button
          className="TodoForm-btn TodoForm-btn-cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-btn TodoForm-btn-save"
          type="submit"
        
        >
          Guardar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
