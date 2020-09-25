import React from 'react';
import { FastField, ErrorMessage, getIn } from 'formik';
import PropTypes from 'prop-types';
import TextError from '../TextError/TextError';
import classes from './Input.module.scss';
import { productErrorsType, productTouchedType } from '../../../types/types';
import { getStyles } from '../../../../../helpers/helpers';

const Input = (props) => {
  const { label, name, errors, touched, ...rest } = props;

  return (
    <div>
      <label className={classes.label} htmlFor={name}>
        {label}:
      </label>
      <FastField
        style={getStyles(errors, name, touched, getIn)}
        className={classes.input}
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  touched: productTouchedType,
  errors: productErrorsType,
};

Input.defaultProps = {
  errors: null,
  touched: null,
};

export default Input;
