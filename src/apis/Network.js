import DomainUrl from "./Domains";

export class Network {
  static async fetch(url, init) {
    const requestedUrl = DomainUrl + url;

    const response = await fetch(requestedUrl, {
      mode: "cors",
      ...init,
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


}