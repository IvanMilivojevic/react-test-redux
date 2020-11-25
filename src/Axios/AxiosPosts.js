import Axios from "axios";

const AxiosPosts = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

AxiosPosts.defaults.headers.common["Authorization"] = "POSTS TOKEN";
AxiosPosts.interceptors.request.use(
  (req) => {
    console.log(req);
    return req;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default AxiosPosts;
