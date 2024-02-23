import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function CreateTodoButton({setOpenModal}) {
  return (
    <button
      className="btn"
      onClick={
        () => {
          setOpenModal(state => !state)
        }
      }
    >
      +
    </button>
  );
}

export { CreateTodoButton };
