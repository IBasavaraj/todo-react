import React from "react";
import "./ToDoCard.css";
function ToDoCard({ toDoContent }) {
  return (
      <div className="todo__content">
        <p>{toDoContent}</p>
      </div>
  );
}
export default React.memo(ToDoCard);
