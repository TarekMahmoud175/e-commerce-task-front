import React from "react";
import { Typography } from "@mui/material";

export default function Text(props) {
  const textStyle = {
    color: props.color,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  };

  return (
    <Typography
      onClick={props?.onClickAction ? props?.onClickAction : () => {}}
      gutterBottom={props.mBottom}
      noWrap={props.noWrap ?? true}
      variant="h5"
      component="div"
      style={{ ...textStyle, ...props.style }}
      className={props.className ? props.className : ""}
    >
      {props.children}
    </Typography>
  );
}
