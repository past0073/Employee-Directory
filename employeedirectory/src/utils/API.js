import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function() {
    return axios.get('https://randomuser.me/api/?results=500&nat=us');
  }
};