import * as React from "react";
import MyButton from "./MyComponent";
import uuid from 'uuid/v4';
import Grid from "@material-ui/core/Grid";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      todoList: []
    };
    this.addList = this.addList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {  // 3.
    this.setState({
      task: e.target.value
    });
  }

  addList(e) {
    e.preventDefault();
    if (this.state.task) {
      const item = {text: this.state.task, key: uuid()};
      this.setState({
        todoList: [...this.state.todoList, item],
        task: ''
      });

    }
    console.log(this.state);
  }

  render() {
    return <Grid container spacing={3}>
      <Grid item sm={6}>
        <input type="text" onChange={this.handleChange} value={this.state.task}/>&nbsp;
        <MyButton onClick={this.addList} color="primary" text='Add'/>
      </Grid>
      <Grid item sm={6}>
        <List>
          {
            this.state.todoList.map(function (item) {
              return (
                  <ListItem>
                    <ListItemIcon>
                      <Checkbox edge="start" tabIndex={-1}/>
                    </ListItemIcon>
                    <ListItemText id={item.key} primary={item.text}/>
                  </ListItem>
              )
            })
          }
        </List>
      </Grid>
    </Grid>
  }
}
