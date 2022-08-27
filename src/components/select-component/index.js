import React from "react";
import Styles from "./select.module.css";

const SelectComponent = ({
  className = "",
  style = {},
  options = [],
  placeholder,
  handleChange = (e) => {},
  handleBlur = () => {},
  errors = "",
  touched,
  value,
  ...prop
}) => {
  return (
    <div className={` ${className} w-100`}>
      <select
        className={`${Styles.input} ${className} py-2`}
        placeholder={placeholder}
        style={{
          ...style,
          borderColor: errors ? "var(--clr-red)" : "var(--clr-black)",
        }}
        value={value}
        {...prop}
      >
        <option value={""} selected disabled hidden>
          {placeholder}
        </option>
        {options.map((item, index) => {
          return (
            <option key={item.value + " " + index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      {errors && <div className={Styles.error_msg}>{errors}</div>}
    </div>
  );
};

export default SelectComponent;
