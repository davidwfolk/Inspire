import store from "../store.js";
import Quote from "../models/quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

const _BibleApi = axios.create({
  baseURL: "//beta.ourmanna.com/api/v1/get/?format=text&order=random",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  getQuote() {
    // _BibleApi.get()
    // .then(res=> {
    //   console.log("bible", res);
    _quoteApi.get()
    .then(res => {
      console.log("quote",res.data);
      let quotes = res.data.data.map (rawQuoteData => new Quote (rawQuoteData))
      store.commit('quotes', quotes)
      
    })
      
     
    .catch (err => console.error(err))
  }
  constructor () {
    this.getQuote

  }
}

const quoteService = new QuoteService();
export default quoteService;
