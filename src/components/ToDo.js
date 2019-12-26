import * as React from "react";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [1, 2, 34, 5]
    }
  }

  render() {
    return <ul>
      {
        this.state.todoList.map(function (item) {
          return (<li>{item}</li>)
        })
      }
    </ul>
  }
}
