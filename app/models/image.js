export default class Image {
  constructor (data) {
    this.image = data.large_url
  }

  get Template () {
    return /*html*/`
  <!--  <body id="bg-image" style="background-image: url('${this.image}');"> -->
    `
  }
}