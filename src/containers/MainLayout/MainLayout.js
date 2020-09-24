import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { productAuthInstanceApi, productInstanceApi } from '../../core/api';
import Spinner from '../../components/Spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import {
  ERROR_TOASTER_ID,
  METHODS_FOR_TOASTER,
  SUCCESS_TOASTER_ID,
  TOASTER_CONFIG,
} from '../../global/constants';

toast.configure(TOASTER_CONFIG);

export const MainLayout = (props) => {
  const { children, showSpinner, hideSpinner, isRequested } = props;
  const successRequest = (config) => {
    showSpinner();
    return config;
  };

  const showToaster = (response) => {
    const { method } = response.config;
    if (METHODS_FOR_TOASTER.includes(method)) {
      toast.success('Success!', { toastId: SUCCESS_TOASTER_ID });
    }
  };

  const successResponse = (response) => {
    hideSpinner();
    showToaster(response);
    return response;
  };

  const errorHandler = (error) => {
    hideSpinner();
    toast.error(`${error.message}`, { toastId: ERROR_TOASTER_ID });
    return Promise.reject(error);
  };

  productAuthInstanceApi.interceptors.request.use(successRequest, errorHandler);

  productAuthInstanceApi.interceptors.response.use(
    successResponse,
    errorHandler,
  );

  productInstanceApi.interceptors.request.use(successRequest, errorHandler);

  productInstanceApi.interceptors.response.use(successResponse, errorHandler);

  return (
    <>
      {isRequested ? <Spinner /> : null}
      {children}
    </>
  );
};

MainLayout.propTypes = {
  showSpinner: PropTypes.func.isRequired,
  hideSpinner: PropTypes.func.isRequired,
  isRequested: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
