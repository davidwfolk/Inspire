import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/bosshogg/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
    .then(res => {
      console.log(res.data)
      let todos = res.data.data.map (rawTodoData => new Todo (rawTodoData))
      store.commit('todos', todos)
    //TODO Handle this response from the server
  })
  .catch (err => console.error(err))
}

  addTodoAsync(todo) {
    todoApi.post("", todo)
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
    todoApi.post('', todo)
    .then(res => {
      console.log('api.post', res.data.data);
      this.getTodos()
    })
    .catch (err => console.error(err))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todoId) {
      todoId.completed == true
    }
    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }

  constructor () {
    this.getTodos
  }
}

const todoService = new TodoService();
export default todoService;
