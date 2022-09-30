import React from "react";
import Styles from "./button.module.css";

const ButtonComponent = ({
  type = "submit",
  className = "",
  style = {},
  onClickAction = () => {},
  disabled = false,
  title,
  id = "",
}) => {
  return (
    <button
      id={id}
      type={type}
      className={`${Styles.button} btn ${className}`}
      style={{ ...style }}
      onClick={() => {
        onClickAction();
      }}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
