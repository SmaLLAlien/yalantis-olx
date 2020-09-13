import React, {useEffect} from "react";
import classes from "../CreateProduct/CreateProduct.module.scss";
import ProductForm from "../../components/Form/ProductForm/ProductForm";
import TextError from "../../components/Form/TextError/TextError";
import Portal from "../../../../components/Portal/Portal";
import {closeCreateModal, editProduct, fetchOrigins, fetchProduct, resetIsSaved} from "../../store/actions";
import {getDetailedProduct, getOrigins} from "../../store/selectors/selectors";
import {connect} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getErrorModalState, getSavingStatus} from "../../store/selectors/modalSelectors";

const EditProduct = (props) => {
  const {product, fetchProduct, closeCreateModal, editProduct, origins, saveError, fetchOrigins, isSaved, resetIsSaved} = props;

  const id = useParams().id;
  const history = useHistory();

  useEffect(() => {
    resetIsSaved();
    fetchProduct(id);
  }, [id])

  const saveProductHandler = (product) => {
    editProduct(product);
    if (isSaved) {
      history.goBack();
    }
  }

  const closeModal = () => {
    closeCreateModal();
    history.goBack();
  }

  return (
    <Portal>
      <div className={classes.create}>
        <button className={classes.create__close} onClick={() => closeModal()}>x</button>
        <div className={classes.create__title}>Edit product</div>
        <ProductForm origins={origins} onSave={(product) => saveProductHandler(product)} product={product} fetchOrigins={fetchOrigins} />
        {saveError ? <div className={classes.create__error}><TextError>{saveError}</TextError></div> : null}
      </div>
    </Portal>
  )
}

const mapStateToProps = state => {
 return {
   origins: getOrigins(state),
   product: getDetailedProduct(state),
   saveError: getErrorModalState(state),
   isSaved: getSavingStatus(state)
 }
}

const mapDispatchToProps = {
  fetchProduct,
  closeCreateModal,
  fetchOrigins,
  editProduct,
  resetIsSaved
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
