// reducer是一个纯函数，也可以称作计划函数，它接收一个初始的state，跟一个action(用于描述操作的 {})
// 返回一个新的state

const todos = (state=[], action) => {
    switch(action.type) {
      case 'ADD_TODO': 
        return [
            ...state,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo => 
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo 
        )
      default:
        return state
    }
}

export default todos;