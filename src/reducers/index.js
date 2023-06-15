import {combineReducers} from 'redux'
import todoList from './todoList'
import login from "./login";
//合併所有的reducers
const todoApp = combineReducers({
  todo: todoList,
  loginInfo: login
});

export default todoApp
