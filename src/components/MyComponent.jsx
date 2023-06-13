import * as React from "react";
import {Button} from "@mui/material";

function MyButton(props) {
  return <Button variant="contained" color={props.color} onClick={props.handleClick}>
    {props.text}
  </Button>
}

export default MyButton;
