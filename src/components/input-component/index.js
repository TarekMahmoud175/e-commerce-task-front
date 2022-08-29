import React from "react";
import Styles from "./input.module.css";

const InputComponent = ({
  className = "",
  style,
  type = "",
  placeholder = "",
  handleChange = (e) => {},
  handleBlur = () => {},
  value,
  errors = "",
  // touched,
  textarea = false,
  id = "",
  ...prop
}) => {
  return (
    <div className={` ${className} w-100`}>
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onBlur={() => {
          handleBlur();
        }}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        className={`${Styles.input} py-2`}
        style={{
          ...style,
          borderColor: errors ? "var(--clr-red)" : "var(--clr-grey)",
        }}
        {...prop}
      />

      {errors && <div className={Styles.error_msg}>{errors}</div>}
    </div>
  );
};

export default InputComponent;
