import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/products-list";
import AddProduct from "./pages/product-add";
import { Toaster } from "react-hot-toast";

const Router = () => {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route exact path="/product-list" element={<ProductList />}></Route>
          <Route exact path="/add-product" element={<AddProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
