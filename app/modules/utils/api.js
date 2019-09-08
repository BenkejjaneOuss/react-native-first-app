import axios from "axios";


export default axios.create({
  baseURL: "https://rest-api-express-mongo.herokuapp.com",
  responseType: "json"
});