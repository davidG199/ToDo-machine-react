import "../styles/index.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
    <li className={`todoItem ${props.completed && "todoItem-completed"}`}>

      <CompleteIcon
        className={`icon ${props.completed && "icon-check-active"}`}
        onClick={props.onComplete}
      />

      <p className={`todo-item-p ${props.completed && "todo-item-p-complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        className='icon icon-delete'
        onClick={props.onDelete}
      />
      
    </li>
  );
  
}

export { TodoItem };
