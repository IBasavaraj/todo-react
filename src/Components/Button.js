import React from 'react';
import "./Button.css"

function Button({content, btnClick, item}) {
  return (
    <>
        <button onClick={()=>btnClick(item)}>{content}</button>
    </>
  );
}

export default Button;
