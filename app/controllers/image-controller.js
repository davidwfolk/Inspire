import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function _drawImage() {
  // console.log("pretty photo", store.State.images);
  // let image = store.State.images;
  // document.getElementById('bg-image').innerHTML = `<body`
  let template = ""
  let photo = store.State.photo.url;
  document.querySelector("#sandBoxPic").innerHTML = template += `<img src="${photo}" class="photo">`
}
export default class ImageController {
  constructor() {
    ImageService.getImage();
    store.subscribe('quotes', _drawImage)
  }
}
