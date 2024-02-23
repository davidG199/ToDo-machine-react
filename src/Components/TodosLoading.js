import React from "react";
import "../styles/index.css";
import "../styles/todosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadinTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };
