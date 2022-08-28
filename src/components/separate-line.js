import React from "react";

const SeparateLine = ({ className }) => {
  return (
    <div
      className={`w-100 my-2 ${className}`}
      style={{ backgroundColor: "var(--clr-black)", height: "2px" }}
    ></div>
  );
};

export default SeparateLine;
