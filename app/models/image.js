export default class Image {
  constructor (data) {
    this.image = data.large_url
   }

  get Template () {
    return /*html*/`
 <body style='background-image: url(${this.image}); height: 100vh; width: 100%;'>
    `
  }
}