import React from "react";
import Button from "./Button";
import "./ToDoCard.css";
const ToDoCard = ({ item, updateTask, deleteTask, update }) => {
  return (
    <div className="todo__card">
      <div className="todo__content">
        <p>{item["listItem"]}</p>
      </div>
      <div className="todo__buttons">
        <Button
          btnContent={update ? "Updated" : "Edit"}
          btnClick={() => updateTask(item)}
        />
        <Button btnContent={"Delete"} btnClick={() => deleteTask(item)} />
      </div>
    </div>
  );
};
export default React.memo(ToDoCard);
