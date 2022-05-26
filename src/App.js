import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ToDoCard from "./Components/ToDoCard";
function App() {

  const [inputItem, setInputItem] = useState("");
  const [count, setCount] = useState(1);
  const [update, setUpdate] = useState(false);
  let listItems = [{ id: 0, listItem: "nothing" }];
  const [list, setList] = useState(listItems);

  const inputHandler = (todo) => {
    setInputItem(todo);
  };

  const addHandler = () => {
    if (inputItem !== "") {
      setList([...list, { id: count, listItem: inputItem }]);
      setCount((prev) => prev + 1);
      setInputItem("");
    } else {
      alert("please enter todo item");
    }
  };

  const updateHandler = (item) => {
    setInputItem(item.listItem);
    setUpdate(!update)
    console.log("update handler");
  };

  const inputBtnHandler = (todo) => {
    setInputItem(todo)
    console.log("input");

  }
  const updateBtnHandler = (item) => {
    item.listItem = inputItem;
    setUpdate(!update)
    console.log("update");

  }

  const deleteHandler = (listItem) => {
    console.log("delete handler");
    const newList = list.filter((item) => item.id !== listItem.id);
    setList(newList);
  };

  return (
    <div className="App">
      <div className="todo__title">
        <h1>ToDo List</h1>
      </div>
      <div className="add__container">
        {update?<Input placeHolder="Enter Item" inputValue={inputItem} onInput={inputBtnHandler} />:<Input placeHolder="Enter Item" inputValue={inputItem} onInput={inputHandler} />}
        {!update&&<Button content={"Add"} btnClick={addHandler} />}
        {update&&<Button content={"update"} btnClick={updateBtnHandler} />}
      </div>
      <div>
        {list.map((item) => (
          <div key={item.id} id={item.id} className="todo__card">
            <ToDoCard toDoContent={item.listItem} />
            <div className="todo__buttons">
              {!update&&<Button content={"U"} btnClick={updateHandler} item={item} />}
              <Button content={"D"} btnClick={deleteHandler} item={item} />
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* {update&&} */}
      </div>
    </div>
  );
}

export default App;
