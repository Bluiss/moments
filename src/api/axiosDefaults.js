import axios from "axios";

axios.defaults.baseURL = "https://moments-hb-api-13c179d1512d.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;