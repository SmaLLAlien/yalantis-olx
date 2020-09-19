import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormikControl from '../FormikControl/FormikControl';
import classes from './ProductForm.module.scss';
import {createProductInitialValues, VALIDATION_MESSAGES} from '../../../../../global/constants';
import { originType, productType } from '../../../types/types';

const ProductForm = (props) => {
  const {
    onSave,
    origins,
    product = null,
    fetchOrigins,
    isSavingInProgress,
  } = props;

  let initialValues = {...createProductInitialValues};

  if (product) {
    initialValues = { ...product };
  }

  useEffect(() => {
    if (!origins.length) {
      fetchOrigins();
    }
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, VALIDATION_MESSAGES.minLength)
      .max(20, VALIDATION_MESSAGES.maxLength)
      .required(VALIDATION_MESSAGES.nameRequired),
    price: Yup.number()
      .positive(VALIDATION_MESSAGES.positiveNumber)
      .required(VALIDATION_MESSAGES.priceRequired),
    origin: Yup.string().required(VALIDATION_MESSAGES.originRequired),
  });

  const onSubmit = (value) => {
    onSave(value);
  };

  const reset = (resetForm) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(e) => onSubmit(e)}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <Form className={classes.form}>
            <FormikControl
              control="input"
              label="name"
              type="text"
              name="name"
              touched={formikProps.touched}
              errors={formikProps.errors}
              placeholder="Product name"
              disabled={isSavingInProgress}
            />

            <FormikControl
              control="input"
              label="price"
              type="number"
              name="price"
              touched={formikProps.touched}
              errors={formikProps.errors}
              placeholder="Product price"
              disabled={isSavingInProgress}
            />

            <FormikControl
              control="select"
              label="origins"
              name="origin"
              options={origins}
              touched={formikProps.touched}
              errors={formikProps.errors}
              setFieldValue={formikProps.setFieldValue}
              placeholder="Product origin"
              disabled={isSavingInProgress}
            />

            <div>
              <button
                disabled={
                  !(formikProps.isValid && formikProps.dirty) ||
                  isSavingInProgress
                }
                className={classes.submit}
                type="submit"
              >
                Submit
              </button>
              <button
                disabled={!formikProps.dirty || isSavingInProgress}
                className={classes.submit}
                type="button"
                onClick={() => reset(formikProps.resetForm)}
              >
                Reset
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

ProductForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  origins: PropTypes.arrayOf(originType),
  product: productType,
  fetchOrigins: PropTypes.func,
  isSavingInProgress: PropTypes.bool.isRequired,
};

ProductForm.defaultProps = {
  origins: [],
  product: null,
  fetchOrigins: null,
};

export default ProductForm;
