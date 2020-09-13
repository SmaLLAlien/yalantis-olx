import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './EditProduct.module.scss';
import ProductForm from '../../components/Form/ProductForm/ProductForm';
import TextError from '../../components/Form/TextError/TextError';
import Portal from '../../../../components/Portal/Portal';
import { originType, productType } from '../../types/types';

export const EditProduct = (props) => {
  const {
    product,
    fetchProduct,
    closeCreateModal,
    editProduct,
    origins,
    saveError,
    fetchOrigins,
    isSaved,
    resetIsSaved,
  } = props;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    resetIsSaved();
    fetchProduct(id);
  }, [id]);

  const saveProductHandler = (value) => {
    editProduct(value);
    if (isSaved) {
      history.goBack();
    }
  };

  const closeModal = () => {
    closeCreateModal();
    history.goBack();
  };

  return (
    <Portal>
      <div className={classes.create}>
        <button
          type="button"
          className={classes.create__close}
          onClick={() => closeModal()}
        >
          x
        </button>
        <div className={classes.create__title}>Edit product</div>
        <ProductForm
          origins={origins}
          onSave={(value) => saveProductHandler(value)}
          product={product}
          fetchOrigins={fetchOrigins}
        />
        {saveError ? (
          <div className={classes.create__error}>
            <TextError>{saveError}</TextError>
          </div>
        ) : null}
      </div>
    </Portal>
  );
};

EditProduct.propTypes = {
  product: productType,
  fetchProduct: PropTypes.func.isRequired,
  closeCreateModal: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  origins: PropTypes.arrayOf(originType),
  saveError: PropTypes.string,
  fetchOrigins: PropTypes.func.isRequired,
  isSaved: PropTypes.bool.isRequired,
  resetIsSaved: PropTypes.func.isRequired,
};

EditProduct.defaultProps = {
  origins: [],
  product: null,
  saveError: null,
};
