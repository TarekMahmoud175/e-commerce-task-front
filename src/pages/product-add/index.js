import React, { useState, useEffect } from "react";
import Styles from "./addProduct.module.css";
import SeparateLine from "../../components/separate-line";
import Text from "../../components/text";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "../../components/input-component";
import SelectComponent from "../../components/select-component";
import ButtonComponent from "../../components/button-component";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const navigate = useNavigate();

  const DvdSpec = ({ setValue }) => {

    useEffect(() => {
      setValue("Weight_kg", null)
      setValue("width", null)
      setValue("length", null)
      setValue("height", null)
    }, []);

    return (
      <Controller
        name="size_mb"
        control={control}
        rules={{ required: "size is required" }}
        render={({ field }) => (
          <InputComponent
            className="mt-2"
            id="size (MB)"
            errors={errors.size_mb?.message}
            placeholder={"size"}
            {...field}
          />
        )}
      />

    )

  }
  const BookSpec = ({ setValue }) => {
    useEffect(() => {
      setValue("size_mb", null)
      setValue("width", null)
      setValue("length", null)
      setValue("height", null)
    }, []);
    return (
      <Controller
        name="Weight_kg"
        control={control}
        rules={{ required: "Weight is required" }}
        render={({ field }) => (
          <InputComponent
            className="mt-2"
            id="Weight"
            errors={errors.Weight_kg?.message}
            placeholder={"Weight"}
            {...field}
          />
        )}
      />
    )
  }
  const FurnitureSpec = ({ setValue }) => {
    useEffect(() => {
      setValue("size_mb", null)
      setValue("Weight_kg", null)
    }, []);
    return (
      <>
        <Controller
          name="width"
          control={control}
          rules={{ required: "Width is required" }}
          render={({ field }) => (
            <InputComponent
              className="mt-2"
              id="width"
              errors={errors.width?.message}
              placeholder={"width"}
              {...field}
            />
          )}
        />

        <Controller
          name="length"
          control={control}
          rules={{ required: "Length is required" }}
          render={({ field }) => (
            <InputComponent
              className="mt-2"
              id="length"
              errors={errors.length?.message}
              placeholder={"length"}
              {...field}
            />
          )}
        />

        <Controller
          name="height"
          control={control}
          rules={{ required: "Height is required" }}
          render={({ field }) => (
            <InputComponent
              className="mt-2"
              id="height"
              errors={errors.height?.message}
              placeholder={"height"}
              {...field}
            />
          )}
        />
      </>
    )

  }



  const [ProductType, setProductType] = useState("");
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  
  const specObj = {
    "DVD": <DvdSpec setValue={setValue} />,
    "BOOK": <BookSpec setValue={setValue} />,
    "FURNITURE": <FurnitureSpec setValue={setValue} />,
  }

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
                  handleChange={(e) => { setProductType(e.target.value); setValue("productType", e.target.value) }}
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

            {ProductType ? specObj[ProductType] : null}




            <div className="row my-3">
              <div className="col-md-6 d-flex justify-content-between w-100">
                <ButtonComponent title={"Add"} className={"w-100 me-2"} />
                <ButtonComponent
                  title={"Cancel"}
                  className={`w-100 btn-danger ${Styles.cancelbtn}`}
                  onClickAction={() => { navigate("/") }}
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
