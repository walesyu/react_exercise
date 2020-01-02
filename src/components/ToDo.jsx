import * as React from "react";
import MyButton from "./MyComponent";
import uuid from 'uuid/v4';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import '../App.css';

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
      <Grid item sm={12}>
        <Grid container justify="center">
          <form noValidate autoComplete="off">
            <TextField label="代辦事項" onChange={this.handleChange} value={this.state.task}/>
            <MyButton onClick={this.addList} color="primary" text='Add'/>
          </form>
        </Grid>
      </Grid>
      <Grid item sm={12}>
        <Grid container justify="center">
          <List className='taskList'>
            {
              this.state.todoList.map(function (item) {
                return (
                    <ListItem key={item.key}>
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
    </Grid>
  }
}
