import React from 'react';
import "./Input.css"
function Input({placeHolder, onInput, inputValue}) {

  return (
    <>
        <input type="text" placeholder={placeHolder} value={inputValue} onChange={e=>onInput(e.target.value)} />
    </>
  );
}

export default Input;
