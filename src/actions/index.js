//action_type可以单独定义
let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
})

//显示全部，显示已完成，显示正在做的
export const Filter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}