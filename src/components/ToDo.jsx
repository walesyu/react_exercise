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
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      task: '',
      todoList: [],
      isShowError: false
    };
    this.addList = this.addList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem = (event) => {
    event.stopPropagation();
    const index = event.target.value;
    let todoList = this.state.todoList;
    console.log(event.target);
    todoList.splice(index, 1);
    this.setState({todoList: todoList})
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  addList = (e) => {
    e.preventDefault();
    if (this.state.task) {
      const item = {text: this.state.task, key: uuid()};
      this.setState({
        todoList: [...this.state.todoList, item],
        task: '',
        isShowError: false
      });
    } else {
      this.setState({
        isShowError: true
      });
    }
  };

  render = () => {
    return <Grid container spacing={3}>
      <Grid item md={12}/>
      <Grid item md={5}/>
      <Grid item md={7}>
        <form noValidate autoComplete="off">
          <FormControl>
            <TextField label="代辦事項" onChange={this.handleChange} value={this.state.task}/>
            {
              this.state.isShowError ?
                  <FormHelperText error={true} margin={'dense'} variant={'outlined'}>請輸入待辦事項</FormHelperText> : null
            }
          </FormControl>
          <MyButton onClick={this.addList} color="primary" text='Add'/>
        </form>
      </Grid>
      <Grid item md={5}/>
      <Grid item md={7}>
        <List className='taskList'>
          {
            this.state.todoList.map((item, index) => {
              return (
                  <ListItem key={item.key}>
                    <ListItemIcon>
                      <Checkbox edge="start" value={index} tabIndex={-1} onChange={this.removeItem}/>
                    </ListItemIcon>
                    <ListItemText id={item.key} primary={item.text}/>
                    <Button variant="contained" value={index} color={"secondary"} onClick={this.removeItem}>Delete</Button>
                  </ListItem>
              )
            })
          }
        </List>
      </Grid>
    </Grid>
  };
}

export default ToDo
