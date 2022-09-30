import DomainUrl from "./Domains";
import axios from "axios";

// let headers = {}

// const _axios = axios.create({
//   baseURL: DomainUrl,
//   headers
// })


// _axios.interceptors.request.use(
//   async (config) => {
//     config.headers = {
//       ...config.headers,
//       'Content-Type': 'application/json'
//     }
//     console.log("config ===>", config)
//     return config
//   },
//   (err) => {
//     return Promise.reject(err?.response?.data)
//   }
// )


// _axios.interceptors.response.use(
//   response => {
//     return response.data
//   },
//   err => {
//     //backend server error
//     if (err?.response?.data)
//       return Promise.reject(err?.response?.data);
//     //For cancellation
//     if (err?.message)
//       return Promise.reject(err);
//   }
// )

// export default _axios




export class Network {
  constructor() {
  }

  static async fetch(url, init) {
    const requestedUrl = DomainUrl + url;

    console.log("requestedUrl", requestedUrl);
    const response = await fetch(requestedUrl, {
      mode: "cors",
      ...init,
      headers: Network.getHeaders(init.headers),
    });
    console.log("network response", response)

    let promise;
    if (![204, 201, 200].includes(response.status)) {
      let promise = response.json().then((data) => {
        return Promise.reject(data);
      });
      return promise.catch((error) => {
        return Promise.reject(error);
      });
    }
    else if (response.status == 204) promise = Promise.resolve({});
    else promise = response.json();

    return promise;
  }

  static getHeaders(originalHeaders) {
    let headers = {};
    headers = {
      ...headers,
      ...originalHeaders,
      "content-Type": "application/json",
      Accept: "application/json",
    };

    return headers;
  }
}