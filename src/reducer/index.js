//导出所有reducer的分解
import { combineReducers } from 'redux'
import todos from './todos'
import filterTodo from './filter'
export default combineReducers({
    todos,
    filterTodo
})