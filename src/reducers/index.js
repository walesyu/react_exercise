import {combineReducers} from 'redux'
import todoList from './todoList'
//合併所有的reducers
const todoApp = combineReducers({
  todo: todoList
});

export default todoApp
