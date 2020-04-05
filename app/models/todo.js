export default class Todo {
  constructor (data) {
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get TodoTemplateChecked() {
    return  /*html*/ `
    <li class="text-light mr-auto" style="list-style-type:none;">
    <input type="checkbox"checked id="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">  - ${this.description}
    <button type="button" class="close text-danger" onclick="app.todoController.removeTodo( '${this.id}')">
    <span>&times;</span>
    </button></input>
    </li>
    `
  }

get TodoTemplate () {
  return  /*html*/ `
  <li class="text-light mr-auto" style="list-style-type:none;">
  <input type="checkbox" id="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">  - ${this.description}
  <button type="button" class="close text-danger" onclick="app.todoController.removeTodo( '${this.id}')">
  <span>&times;</span>
  </button></input>
  </li>
  `

}
  
  
}
