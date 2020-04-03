import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  console.log(store.State.todos);
  let todos = store.State.todos;
  let template = ''

  todos.forEach(todos => {template += todos.TodoTemplate})
  document.getElementById('todos').innerHTML = template
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
    description: form.desc.value,
    };
    TodoService.addTodoAsync(todo);
    form.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
