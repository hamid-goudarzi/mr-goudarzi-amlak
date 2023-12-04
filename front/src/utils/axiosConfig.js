import axios from "axios";

const baseURL = "http://localhost:5000";
const timeout = 5 * 1000;
const headers = {
  "Content-Type": "application/json",
  // "Access-Control-Allow-Origin": "*",
};
// function getToken() {
//   const token = localStorage.getItem("token");
//   return token;
// }

const axiosConfig =()=>{
 return axios.create({
  baseURL,
  // withCredentials: true,
  timeout,
  headers,
});

}

export default axiosConfig;
