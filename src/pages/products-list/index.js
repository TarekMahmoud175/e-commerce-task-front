import React from "react";
import Styles from "./list.module.css";
import Text from "../../components/text";

const ProductList = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col">
            <Text className={`${Styles.pageTitle}`}>Product List</Text>
          </div>
          <div className="col d-flex justify-content-end">
            <Text className={`${Styles.pageTitle}`}>Product List</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
