import axios from "axios";

const randomEmployeeUrl = "https://randomuser.me/api/?results=200&nat=us";

export default {
  getRandomEmployees: function() {
    return axios.get(randomEmployeeUrl);
  }
};