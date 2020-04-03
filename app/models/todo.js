export default class Todo {
  constructor (data) {
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  
  get TodoTemplate () {
    return /*html*/`


    `
  }
}