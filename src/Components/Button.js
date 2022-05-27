import React from "react";
import "./Button.css";
const Button = ({ btnContent, btnClick, item }) => {
  return <button onClick={() => btnClick(item)}>{btnContent}</button>;
};
export default Button;
