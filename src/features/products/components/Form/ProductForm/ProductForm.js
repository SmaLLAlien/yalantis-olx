import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormikControl from '../FormikControl/FormikControl';
import classes from './ProductForm.module.scss';
import { VALIDATION_MESSAGES } from '../../../../../global/constants';
import { originType, productType } from '../../../types/types';

const ProductForm = (props) => {
  const { onSave, origins, product = null, fetchOrigins } = props;

  let initialValues = {
    name: '',
    origin: '',
    price: '',
  };

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
      onSubmit={onSubmit}
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
            />

            <FormikControl
              control="input"
              label="price"
              type="number"
              name="price"
              touched={formikProps.touched}
              errors={formikProps.errors}
              placeholder="Product price"
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
            />

            <div>
              <button
                disabled={!(formikProps.isValid && formikProps.dirty)}
                className={classes.submit}
                type="submit"
              >
                Submit
              </button>
              <button
                disabled={!formikProps.dirty}
                className={classes.submit}
                type="submit"
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
};

ProductForm.defaultProps = {
  origins: [],
  product: null,
  fetchOrigins: null,
};

export default ProductForm;
