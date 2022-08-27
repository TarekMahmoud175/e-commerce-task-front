import React from "react";
import Styles from "./button.module.css";

const ButtonComponent = ({
  type = "submit",
  className = "",
  style = {},
  onClickAction = () => {},
  isLoading = false,
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
      disabled={isLoading}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
