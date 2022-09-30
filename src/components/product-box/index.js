import React from "react";
import Styles from "./box.module.css";
import Text from "../text";

const ProductBox = ({ item = {}, handleCheck = () => { }, isChecked }) => {

  const specs = {
    "furniture": "Dimensions: " + item?.furniture_height_cm + "x" + item?.furniture_width_cm + "x" + item?.furniture_length_cm,
    "book": "Size: " + item?.book_weight_kg + " MB",
    "dvd": "Weight: " + item?.dvd_size_mb + "Kg"
  }

  return (
    <div className={`${Styles.mainBox} p-3 my-2`}>
      <div className="row justify-content-start">
        <input
          className={`${Styles.checkbox} delete-chekbox`}
          type="checkbox"
          onClick={() => handleCheck(item?.id)}
          checked={isChecked(item?.id)}
        />
      </div>
      <div className="row text-center">
        <Text className={`${Styles.sku} mt-1`}>{item?.sku}</Text>
        <Text className={`${Styles.name} mt-1`}>{item?.name}</Text>
        <Text className={`${Styles.price} mt-1`}>{item?.price} $</Text>
        <Text className={`${Styles.specs} mt-1`}>{specs[item?.type]}</Text>
      </div>
    </div>
  );
};

export default ProductBox;
