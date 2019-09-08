import axios from "axios";

export const API = axios.create({
  baseURL: "https://rest-api-express-mongo.herokuapp.com",
  responseType: "json"
});

export const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    API.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete API.defaults.headers.common["Authorization"];
  }
};
