import React, { useState, useEffect } from "react";
import Styles from "./addProduct.module.css";
import SeparateLine from "../../components/separate-line";
import Text from "../../components/text";
import { useForm, Controller } from "react-hook-form";
import InputComponent from "../../components/input-component";
import SelectComponent from "../../components/select-component";
import ButtonComponent from "../../components/button-component";
import { useNavigate } from "react-router-dom";
import { ProductServices } from "../../apis/Services/ProductsServices";
import toast from "react-hot-toast";



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
        rules={{ required: "Please, submit required data" }}
        render={({ field }) => (
          <InputComponent
            className="mt-2"
            id="size"
            errors={errors.size_mb?.message}
            placeholder={"size"}
            type="number"
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
        rules={{ required: "Please, submit required data" }}
        render={({ field }) => (
          <InputComponent
            className="mt-2"
            id="weight"
            errors={errors.Weight_kg?.message}
            placeholder={"Weight"}
            type="number"
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
          rules={{ required: "Please, submit required data" }}
          render={({ field }) => (
            <InputComponent
              className="mt-2"
              id="width"
              errors={errors.width?.message}
              placeholder={"width"}
              type="number"
              {...field}
            />
          )}
        />

        <Controller
          name="length"
          control={control}
          rules={{ required: "Please, submit required data" }}
          render={({ field }) => (
            <InputComponent
              className="mt-2"
              id="length"
              errors={errors.length?.message}
              placeholder={"length"}
              type="number"
              {...field}
            />
          )}
        />

        <Controller
          name="height"
          control={control}
          rules={{ required: "Please, submit required data" }}
          render={({ field }) => (
            <InputComponent
              className="mt-2"
              id="height"
              errors={errors.height?.message}
              placeholder={"height"}
              type="number"
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
    let reqObj = {
      'sku': values['sku'],
      'name': values['name'],
      'price': Number(values['price']),
      'type': ProductType,
      'dvd_size_mb': values['size_mb'],
      'book_weight_kg': values['Weight_kg'],
      'furniture_width_cm': values['width'],
      'furniture_height_cm': values['height'],
      'furniture_length_cm': values['length'],
    };
    ProductServices.AddProduct(reqObj).then(res => {
      if (res.success == true) navigate("/")
      else {
        toast.error(res.message);
      }
    })
  };

  const specObj = {
    "dvd": <DvdSpec setValue={setValue} />,
    "book": <BookSpec setValue={setValue} />,
    "furniture": <FurnitureSpec setValue={setValue} />,
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
              rules={{ required: "Please, submit required data" }}
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
              rules={{ required: "Please, submit required data" }}
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
                  type="number"
                  {...field}
                />
              )}
            />

            <Controller
              name="productType"
              control={control}
              rules={{ required: "Please, submit required data" }}
              render={({ field }) => (
                <SelectComponent
                  className="mt-2 "
                  id="productType"
                  errors={errors.productType?.message}
                  handleChange={(e) => { setProductType(e.target.value); setValue("productType", e.target.value) }}
                  placeholder={"Product Type"}
                  options={[
                    { label: "DVD", value: "dvd" },
                    { label: "Book", value: "book" },
                    { label: "Furniture", value: "furniture" },
                  ]}
                  {...field}
                />
              )}
            />

            {ProductType ? specObj[ProductType] : null}




            <div className="row my-3">
              <div className="col-md-6 d-flex justify-content-between w-100">
                <ButtonComponent title={"Save"} className={"w-100 me-2"} />
                <button
                  className={`w-100 btn-danger btn ${Styles.cancelbtn}`}
                  onClick={() => { navigate("/") }}
                >Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
