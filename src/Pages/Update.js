import React from 'react';
import { useParams } from 'react-router-dom'

const Update=() => {
    const { id } = useParams();
    const todos = JSON.parse(localStorage.getItem('todos'))
    console.log(todos.map(item => (item.id == id))[0]);
    console.log(id);
    console.log(todos[0].id)
    
    // const todo = localStorage.getItem("todos");
    // console.log(todo);
  return (
    <div>
      To Update
      {/* {todos.map(item => item.id === id)} */}
      
      
    </div>
  );
}

export default Update;


