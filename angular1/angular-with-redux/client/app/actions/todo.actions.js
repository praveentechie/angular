import TODOS from '../constants/todos';

function addTodo(todo){
  console.log('in action..........');
  return {
    type: TODOS.ADD_TODO,
    payload: todo
  }
}

function removeTodo(index){
  return {
    type: TODOS.REMOVE_TODO,
    payload: index
  };
}

export default { addTodo, removeTodo };