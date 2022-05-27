import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ToDoCard from "./Components/ToDoCard";
const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [update, isUpdate] = useState(false);
  const [list, setList] = useState([
    { id: Math.random(), listItem: "nothing" },
  ]);

  const getInput = (todo) => {
    setInputItem(todo);
  };

  const addTask = () => {
    const isInclude = list.map((item) => item.listItem === item)[0];
    if (inputItem !== "" && !isInclude) {
      setList([...list, { id: Math.random(), listItem: inputItem }]);
      setInputItem("");
    } else if (isInclude) {
      alert("todo item already exist");
    } else {
      alert("please enter todo item");
    }
  };

  const updateTask = (item) => {
    item.listItem = inputItem;
    setInputItem("");
    isUpdate(!update);
  };

  const deleteTask = (listItem) => {
    const newList = list.filter((item) => item.id !== listItem.id);
    setList(newList);
  };
  return (
    <div className="App">
      <div className="todo__title">
        <h1>To Do List</h1>
      </div>
      <div className="add__container">
        <Input
          placeHolder="Enter Item"
          inputValue={inputItem}
          onInput={getInput}
        />
        <Button btnContent={"Add"} btnClick={addTask} />
      </div>
      {list.map((item) => (
        
        <ToDoCard
          key={item.id}
          item={item}
          updateTask={updateTask}
          deleteTask={deleteTask}
          update={update}
          list={list}
        />
      ))}
    </div>
  );
};
export default App;
