import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Portal from '../../../../components/Portal/Portal';
import ProductForm from '../../components/Form/ProductForm/ProductForm';
import classes from './CreateProduct.module.scss';
import TextError from '../../components/Form/TextError/TextError';
import { Routes } from '../../../../global/constants';
import { originType } from '../../types/types';

export const CreateProduct = (props) => {
  const { closeCreateModal, origins, saveProduct, saveError } = props;
  const params = useLocation().pathname;

  const saveProductHandler = (product) => {
    const isUserPage = params.includes(Routes.CREATED) ? '?editable=true' : '';
    saveProduct(product, isUserPage);
  };

  return (
    <Portal>
      <div className={classes.create}>
        <button
          type="button"
          className={classes.create__close}
          onClick={closeCreateModal}
        >
          x
        </button>
        <div className={classes.create__title}>Add new product</div>
        <ProductForm
          origins={origins}
          onSave={(product) => saveProductHandler(product)}
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

CreateProduct.propTypes = {
  closeCreateModal: PropTypes.func.isRequired,
  origins: PropTypes.arrayOf(originType).isRequired,
  saveProduct: PropTypes.func.isRequired,
  saveError: PropTypes.string,
};

CreateProduct.defaultProps = {
  saveError: null,
};
