import {combineReducers} from 'redux'
import toDos from './toDos'
//合併所有的reducers
const todoApp = combineReducers({
  toDos
});

export default todoApp
