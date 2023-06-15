import * as React from "react";
import './css/todoList.css';
import {connect} from 'react-redux'
import {useState} from "react";
import {
  Button,
  FormControl, FormHelperText, Grid, List, ListItem, ListItemText, TextField
} from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import {removeTodo, addTodo} from '../actions/todoList'
import MyButton from './MyComponent'

function TodoList({todoList}) {

  const [task, setTask] = useState('')
  const [isShowError, setIsShowError] = useState('')
  const dispatch = useDispatch()

  const removeItem = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addList = (e) => {
    e.preventDefault();
    if (task) {
      const item = {text: task, id: new Date().getTime()};
      setTask('')
      setIsShowError(false)
      dispatch(addTodo(item));
    } else {
      setIsShowError(true);
    }
  };

  return <Grid container>
    <Grid item md={12}/>
    <Grid item md={5}/>
    <Grid item md={7}>
      <form noValidate autoComplete="off">
        <Grid item md={7}>
          <FormControl>
            <TextField label="代辦事項" onChange={handleChange}
                       value={task}/>
            {isShowError ?
                <FormHelperText error={true}
                                margin={'dense'}
                                variant={'outlined'}>請輸入待辦事項</FormHelperText>
                : null
            }
          </FormControl>
        </Grid>
        <Grid style={{'marginLeft': '145px', 'marginTop': '20px'}}>
          <MyButton handleClick={addList} color="primary" text='Add'/>
        </Grid>
      </form>
    </Grid>
    <Grid item md={5}/>
    <Grid item md={7}>
      <List className='taskList'>
        {todoList.map((item, index) => {
              return (
                  <ListItem key={item.id}>
                    <ListItemText key={'list_' + item.id} id={item.id}
                                  primary={item.text}/>
                    <Button key={'button_' + item.id} variant="contained"
                            color={"secondary"}
                            onClick={() => removeItem(item.id)}>Delete</Button>
                  </ListItem>
              )
            }
        )}
      </List>
    </Grid>
  </Grid>
}

const mapStateToProps = (store) => {
  return {todoList: store.todo};
};
export default connect(mapStateToProps)(TodoList)
