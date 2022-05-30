import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ToDoCard from "./Components/ToDoCard";
import {useNavigate} from "react-router-dom"
const App = () => {
  const navigate = useNavigate();
  const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : defaultValue;
      return initial;
    }
  };

  const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
      return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  };

  const [inputItem, setInputItem] = useState("");
  const [itemUpdate, setItemUpdate] = useState("");
  const [update, isUpdate] = useState(false);
  const [list, setList] = useLocalStorage("todos",[
    { id: Math.random(), listItem: "Eating", update: false },
  ]);
  
  const addTask = () => {
    const isInclude = list.map((item) => item.listItem === item)[0];
    if (inputItem !== "" && !isInclude) {
      setList([
        ...list,
        { id: Math.random(), listItem: inputItem, update: false },
      ]);
      setInputItem("");
    } else if (isInclude) {
      alert("todo item already exist");
    } else {
      alert("please enter todo item");
    }
  };

  const updateTask = (item) => {
    
    setInputItem(item.listItem);
    item.listItem="";
    setItemUpdate(item);
    isUpdate(!update);

    // navigate(`/update/${item.id}`)
    
  };
  const updateTaskBtn = () => {
    itemUpdate.listItem = inputItem;
    itemUpdate.update = true;
    isUpdate(!update);
    setList(list);
    setInputItem("");
  }

  const deleteTask = (listItem) => {
    const newList = list.filter((item) => item.id !== listItem.id);
    setList(newList);
    localStorage.removeItem("todos", listItem);
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
          onInput={setInputItem}
        />
        {update?<Button btnContent={"Update"} btnClick={updateTaskBtn} />: <Button btnContent={"Add"} btnClick={addTask} />}
      </div>
      {list.map((item) => (
        <ToDoCard
          key={item.id}
          item={item}
          updateTask={updateTask}
          deleteTask={deleteTask}
          update={item.update}
        />
      ))}
    </div>
  );
};
export default App;
