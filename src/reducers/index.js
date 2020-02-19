import {combineReducers} from 'redux'
import todoList from './todoList'
import login from './login'
//合併所有的reducers
const todoApp = combineReducers({
  loginInfo: login,
  todo: todoList
});

export default todoApp
