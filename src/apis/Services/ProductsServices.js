import { ProductEndPoints } from "../EndPoints/ProductsEndPoints";
// import _axios from "../Network";
import { Network } from "../Network";


export class ProductServices {

  // static getProducts() {
  //   return _axios.get(ProductEndPoints.getProducts.url);
  // }

  // static AddProduct(data) {
  //   return _axios.post(ProductEndPoints.addProduct.url, { ...data })
  // }

  // static deleteProducts(data) {
  //   return _axios.post(ProductEndPoints.deleteProducts.url, { ...data })
  // }


  static getProducts() {
    return Network.fetch(ProductEndPoints.getProducts.url, {
      method: ProductEndPoints.getProducts.method
    })
  }

  static AddProduct(data) {
    return Network.fetch(ProductEndPoints.addProduct.url, {
      method: ProductEndPoints.addProduct.method,
      body: JSON.stringify(data),
    })
  }

  static deleteProducts(data) {
    return Network.fetch(ProductEndPoints.deleteProducts.url, {
      method: ProductEndPoints.deleteProducts.method,
      body: JSON.stringify(data),
    })
  }
}
