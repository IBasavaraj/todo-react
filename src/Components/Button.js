import React from "react";
import "./Button.css";
const Button = ({ btnContent, btnClick }) => {
  return <button onClick={btnClick}>{btnContent}</button>;
};
export default Button;
