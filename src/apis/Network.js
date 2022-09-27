import DomainUrl from "./Domains";


export class Network {
  constructor() {
    this.bearer = "";
  }

  static async fetch(url, init, addAuth) {
    const requestedUrl = ApiUrl + url;

    const response = await fetch(requestedUrl, {
      mode: "cors",
      ...init,
      headers: Network.getHeaders(init.headers, addAuth),
    });

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

  static getHeaders(originalHeaders, auth) {
    let headers = {};
    if (auth) {
      this.bearer = localStorage.getItem("bearer");
      headers.Authorization = `Token ${this.bearer}`;
    }
    headers = {
      ...headers,
      ...originalHeaders,
      "content-type": "application/json",
      Accept: "application/json",
    };

    return headers;
  }
}
