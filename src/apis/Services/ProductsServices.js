import { ProductEndPoints } from "../EndPoints/ProductsEndPoints";
import _axios from "../Network";


export class ProductServices {

  static getProducts() {
    return _axios.get(ProductEndPoints.getProducts.url);
  }

  static AddProduct(data) {
    return _axios.post(ProductEndPoints.addProduct.url, { ...data })
  }

  static deleteProducts(data) {
    console.log(data)
    return _axios.post(ProductEndPoints.deleteProducts.url, { ...data })
  }

}
