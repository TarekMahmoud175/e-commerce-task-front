import React from "react";
import Styles from "./list.module.css";
import Text from "../../components/text";
import SeparateLine from "../../components/separate-line";
import ButtonComponent from "../../components/button-component";
import { useNavigate } from "react-router-dom";
import ProductBox from "../../components/product-box";

const ProductList = ({ history }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container py-3">
        {/* page header */}
        <div className="row justify-content-between">
          <div className="col">
            <Text className={`${Styles.pageTitle}`}>Product List</Text>
          </div>
          <div className="col d-flex justify-content-end">
            <ButtonComponent
              title="ADD"
              className="me-2"
              onClickAction={() => navigate("/add-product")}
            />
            <ButtonComponent title="MASS DELETE" id="delete-product-btn" />
          </div>
        </div>
        <SeparateLine />
        <div className="row mt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, , 10, 11, 12, 13, 14, 15].map(
            (item, index) => {
              return (
                <div className="col-lg-3" key={"product" + item}>
                  <ProductBox />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
