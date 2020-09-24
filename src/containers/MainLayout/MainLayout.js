import React from "react";
import {productAuthInstanceApi, productInstanceApi} from "../../core/api";
import Spinner from "../../components/Spinner/Spinner";
import PropTypes from 'prop-types';

export const MainLayout = props => {
  const {children, showSpinner, hideSpinner, isRequested} = props;
  const successRequest = (config) => {
    showSpinner();
    return config
  }

  const successResponse = (response) => {
    hideSpinner();
    return response;
  }

  const error = (error) => {
    return Promise.reject(error);
  }

  productAuthInstanceApi.interceptors.request.use(successRequest, error);

  productAuthInstanceApi.interceptors.response.use(successResponse, error);

  productInstanceApi.interceptors.request.use(successRequest, error);

  productInstanceApi.interceptors.response.use(successResponse, error);

  return (
    <>
      {isRequested ? <Spinner/> : null},
      {children}
    </>
  )
}

MainLayout.propTypes = {
  showSpinner: PropTypes.func.isRequired,
  hideSpinner: PropTypes.func.isRequired,
  isRequested: PropTypes.bool.isRequired
}
