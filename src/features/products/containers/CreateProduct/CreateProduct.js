import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import Portal from '../../../../components/Portal/Portal';
import ProductForm from '../../components/Form/ProductForm/ProductForm';
import classes from './CreateProduct.module.scss';
import TextError from '../../components/Form/TextError/TextError';
import { Routes } from '../../../../global/constants';
import { originType } from '../../types/types';

export const CreateProduct = (props) => {
  const {
    closeCreateModal,
    origins,
    saveProduct,
    saveError,
    isSavingInProgress,
  } = props;
  const params = useLocation().pathname;
  const history = useHistory();

  const saveProductHandler = (product) => {
    const isUserPage = params.includes(Routes.CREATED) ? '?editable=true' : '';
    saveProduct(product, isUserPage, history);
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
          isSavingInProgress={isSavingInProgress}
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
  isSavingInProgress: PropTypes.bool.isRequired,
};

CreateProduct.defaultProps = {
  saveError: null,
};
