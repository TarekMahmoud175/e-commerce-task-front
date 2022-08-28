import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/products-list";
import AddProduct from "./pages/product-add";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route exact path="/productlist" element={<ProductList />}></Route>
        <Route exact path="/addproduct" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
