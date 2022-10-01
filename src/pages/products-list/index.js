import React, { useState } from "react";
import Styles from "./list.module.css";
import Text from "../../components/text";
import SeparateLine from "../../components/separate-line";
import ButtonComponent from "../../components/button-component";
import { useNavigate } from "react-router-dom";
import ProductBox from "../../components/product-box";
import UseGetProducts from "../../hooks/useGetProducts";
import { ProductServices } from "../../apis/Services/ProductsServices";

const ProductList = () => {
  const navigate = useNavigate();

  const [ShouldReload, setShouldReload] = useState(0);
  let Products = UseGetProducts({ reload: ShouldReload });

  const [SelectedProducts, setSelectedProducts] = useState([]);
  const handleChecked = (id) => SelectedProducts.includes(Number(id)) ? true : false;
  const handleSelect = (id) => {
    let newSelectionArr = [...SelectedProducts]
    let index = newSelectionArr.findIndex((x) => Number(x) == Number(id))
    if (index == -1) newSelectionArr.push(Number(id));
    else newSelectionArr.splice(index, 1)
    setSelectedProducts(newSelectionArr)
  }

  const HandleBulkDelete = () => {
    if (SelectedProducts.length > 0) {
      let reqObject = { ids: SelectedProducts }
      ProductServices.deleteProducts(reqObject)
        .then(res => {
          setSelectedProducts([]);
          setShouldReload(prev => prev + 1)
        })
        .catch(err => console.log(err))
    }
  }

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
            <ButtonComponent
              title="MASS DELETE"
              id="delete-product-btn"
              onClickAction={HandleBulkDelete}
            />
          </div>
        </div>
        <SeparateLine />
        <div className="row mt-2">
          {Products?.map(
            (item, index) => {
              return (
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6" key={"product index =>" + index}>
                  <ProductBox item={item} handleCheck={handleSelect} isChecked={handleChecked} />
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
