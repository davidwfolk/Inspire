export default class Quote {
  constructor (data) {
    this.id = data.id
    this.body = data.body
    this.author = data.author

  }
  get Template () {
    return /*html*/ `
      <div class=col-12>
      <div class="display-5">${this.body}</div>
      <div class="display-5">${this.author}</div>
    </div>
    
    `
  }

}