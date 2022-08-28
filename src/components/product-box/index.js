import React from "react";
import Styles from "./box.module.css";
import Text from "../text";

const ProductBox = ({ handleChange = () => {} }) => {
  return (
    <div className={`${Styles.mainBox} p-3 my-2`}>
      <div className="row justify-content-start">
        <input
          type="checkbox"
          className={`${Styles.checkbox} delete-chekbox`}
        />
      </div>

      {/* className="delete-checkbox" */}
      <div className="row text-center">
        <Text className={`${Styles.sku}`}>SKU1728</Text>
        <Text className={`${Styles.name}`}>Chair</Text>
        <Text className={`${Styles.price}`}>100 $</Text>
        <Text className={`${Styles.specs}`}>50 x 60 x 70</Text>
      </div>
    </div>
  );
};

export default ProductBox;
