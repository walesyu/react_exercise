import * as React from "react";
import Button from "@material-ui/core/Button";

export function MySpan(props) {
  return <span>{props.text}</span>
}

function MyButton(props) {
  const {slot} = props;
  return <Button variant="contained" color={props.color} onClick={props.onClick}>
    {slot} {props.text}
  </Button>
}

export default MyButton;
