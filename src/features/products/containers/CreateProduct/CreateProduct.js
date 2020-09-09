import React from "react";
import Portal from "../../../../components/Portal/Portal";
import ProductForm from "../../components/Form/ProductForm/ProductForm";
import classes from './CreateProduct.module.scss';
import {closeCreateModal} from "../../store/actions";
import {connect} from "react-redux";

const CreateProduct = (props) => {
  const {closeCreateModal} = props
  return (
    <Portal>
      <div className={classes.create}>
        <button className={classes.create__close} onClick={closeCreateModal}>x</button>
        <div className={classes.create__title}>Add new product</div>
        <ProductForm />
      </div>
    </Portal>
  )
}

const mapDispatchToProps = {
  closeCreateModal
}

export default connect(null, mapDispatchToProps)(CreateProduct);
