import React from "react";
import Styles from "./addProduct.module.css";
import SeparateLine from "../../components/separate-line";
import Text from "../../components/text";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "../../components/input-component";
import SelectComponent from "../../components/select-component";
import ButtonComponent from "../../components/button-component";

const AddProduct = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={`container py-3`}>
      <div className="row">
        <div className="col">
          <Text className={`${Styles.pageTitle}`}>Add Product</Text>
        </div>
      </div>
      <SeparateLine />
      <div className="row">
        <div className="col-6">
          <form id="product_form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="sku"
              control={control}
              rules={{ required: "SKU is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="sku"
                  errors={errors.sku?.message}
                  placeholder={"sku"}
                  {...field}
                />
              )}
            />

            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="name"
                  errors={errors.name?.message}
                  placeholder={"name"}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="price"
                  errors={errors.price?.message}
                  placeholder={"price"}
                  {...field}
                />
              )}
            />

            <Controller
              name="productType"
              control={control}
              rules={{ required: "Product type is required" }}
              render={({ field }) => (
                <SelectComponent
                  className="mt-2 "
                  id="productType"
                  errors={errors.productType?.message}
                  placeholder={"Product Type"}
                  options={[
                    { label: "DVD", value: "DVD" },
                    { label: "Book", value: "BOOK" },
                    { label: "Furniture", value: "FURNITURE" },
                  ]}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="price"
                  errors={errors.price?.message}
                  placeholder={"price"}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="price"
                  errors={errors.price?.message}
                  placeholder={"price"}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="price"
                  errors={errors.price?.message}
                  placeholder={"price"}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="price"
                  errors={errors.price?.message}
                  placeholder={"price"}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{ required: "Price is required" }}
              render={({ field }) => (
                <InputComponent
                  className="mt-2"
                  id="price"
                  errors={errors.price?.message}
                  placeholder={"price"}
                  {...field}
                />
              )}
            />

            <div className="row my-3">
              <div className="col-md-6 d-flex justify-content-between w-100">
                <ButtonComponent title={"Add"} className={"w-100 me-2"} />
                <ButtonComponent
                  title={"Cancel"}
                  className={"w-100 btn-danger"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
