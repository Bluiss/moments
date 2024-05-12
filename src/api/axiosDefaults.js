import axios from "axios";

axios.defaults.baseURL = "https://moments-hb-b9a64daf59f3.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;