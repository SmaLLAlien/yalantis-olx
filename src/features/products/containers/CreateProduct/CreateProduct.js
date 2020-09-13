import React from "react";
import Portal from "../../../../components/Portal/Portal";
import ProductForm from "../../components/Form/ProductForm/ProductForm";
import classes from './CreateProduct.module.scss';
import {closeCreateModal, saveProduct} from "../../store/actions";
import {connect} from "react-redux";
import {getOrigins} from "../../store/selectors/selectors";
import {getErrorModalState} from "../../store/selectors/modalSelectors";
import TextError from "../../components/Form/TextError/TextError";
import {useLocation} from 'react-router-dom'
import {Routes} from "../../../../global/constants";

const CreateProduct = (props) => {
  const {closeCreateModal, origins, saveProduct, saveError} = props;
  const params = useLocation().pathname;

  const saveProductHandler = product => {
    const isUserPage = params.includes(Routes.CREATED) ? '?editable=true' : '';
    saveProduct(product, isUserPage);
  }

  return (
    <Portal>
      <div className={classes.create}>
        <button className={classes.create__close} onClick={closeCreateModal}>x</button>
        <div className={classes.create__title}>Add new product</div>
        <ProductForm origins={origins} onSave={(product) => saveProductHandler(product)} />
        {saveError ? <div className={classes.create__error}><TextError>{saveError}</TextError></div> : null}
      </div>
    </Portal>
  )
}

const mapStateToProps = state => {
  return {
    origins: getOrigins(state),
    saveError: getErrorModalState(state)
  }
}

const mapDispatchToProps = {
  closeCreateModal,
  saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
