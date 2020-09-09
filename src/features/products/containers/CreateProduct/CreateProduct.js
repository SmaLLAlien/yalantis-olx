import React from "react";
import Portal from "../../../../components/Portal/Portal";
import ProductForm from "../../components/Form/ProductForm/ProductForm";
import classes from './CreateProduct.module.scss';

const CreateProduct = (props) => {
  return (
    <Portal>
      <div className={classes.create}>
        <div className={classes.create__title}>Add new product</div>
        <ProductForm />
      </div>
    </Portal>
  )
}

export default CreateProduct;
