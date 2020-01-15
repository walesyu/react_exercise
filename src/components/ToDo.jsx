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
import {connect} from 'react-redux'
import * as actionCreators from '../actions/toDo'

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

  removeItem = (event, id) => {
    this.props.removeTodo(id);
  };

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    });
  };

  addList = (e) => {
    e.preventDefault();
    if (this.state.task) {
      const item = {text: this.state.task, id: uuid()};
      this.setState({
        todoList: [...this.state.todoList, item],
        task: '',
        isShowError: false
      });
      this.props.addTodo(item);
    } else {
      this.setState({
        isShowError: true
      });
    }
  };

  render = () => {
    const {todoList, removeTodo} = this.props;

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
            todoList.map((item, index) => {
              return (
                  <ListItem key={item.id}>
                    <ListItemText id={item.id} primary={item.text}/>
                    <Button variant="contained" color={"secondary"} onClick={() => removeTodo(item.id)}>Delete</Button>
                  </ListItem>
              )
            })
          }
        </List>
      </Grid>
    </Grid>
  };
}

const mapStateToProps = store => {
  return {todoList: store.toDos};
};
export default connect(mapStateToProps, actionCreators)(ToDo)
