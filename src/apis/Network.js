import DomainUrl from "./Domains";
import axios from "axios";

let headers = {}

const _axios = axios.create({
  baseURL: DomainUrl,
  headers
})


_axios.interceptors.request.use(
  async (config) => {
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json'
    }
    console.log("config ===>", config)
    return config
  },
  (err) => {
    return Promise.reject(err?.response?.data)
  }
)


_axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    //backend server error
    if (err?.response?.data)
      return Promise.reject(err?.response?.data);
    //For cancellation
    if (err?.message)
      return Promise.reject(err);
  }
)

export default _axios
