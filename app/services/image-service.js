import store from "../store.js";
import Image from "../models/image.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  getImage(){
    imgApi.get()
    .then(res => {
        console.log("Photo of the Day",res.data);
        store.commit('images', new Image(res.data))
  })
  }
  constructor () {
    this.getImage
  }
}


const imageService = new ImageService();
export default imageService;
