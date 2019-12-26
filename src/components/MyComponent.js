import * as React from "react";
import Button from "@material-ui/core/Button";

function MySpan(props) {
  return <span>{props.text}</span>
}

export {MySpan}
export default class MyButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {slot} = this.props;
    return <Button variant="contained" color={this.props.color} onClick={this.props.onClick}>
      {slot} {this.props.text}
    </Button>
  }
}
