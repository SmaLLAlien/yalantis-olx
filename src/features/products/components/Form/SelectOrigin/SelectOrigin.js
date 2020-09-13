import React from 'react';
import { FastField, ErrorMessage, getIn } from 'formik';
import PropTypes from 'prop-types';
import TextError from '../TextError/TextError';
import classes from './SelectOrigin.module.scss';
import {
  originType,
  productErrorsType,
  productTouchedType,
} from '../../../types/types';

const SelectOrigin = (props) => {
  const { name, label, options, touched, errors } = props;

  const getStyles = (errorsControls, fieldName, touchedFields) => {
    if (getIn(errorsControls, fieldName) && getIn(touchedFields, fieldName)) {
      return {
        border: '1px solid red',
        borderLeftWidth: '5px',
        transition: '0.5s all',
      };
    }
    return null;
  };

  return (
    <div>
      <label className={classes.label} htmlFor={name}>
        {label}
        :
      </label>
      <FastField
        style={getStyles(errors, name, touched)}
        className={classes.input}
        as="select"
        id={name}
        name={name}
      >
        <option hidden className={classes.option} defaultValue>
          Select origin
        </option>
        {options.map((option) => (
          <option
            className={classes.option}
            key={option.value}
            value={option.value}
          >
            {option.displayName}
          </option>
        ))}
      </FastField>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

SelectOrigin.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(originType).isRequired,
  touched: productTouchedType,
  errors: productErrorsType,
};

SelectOrigin.defaultProps = {
  errors: null,
  touched: null,
};

export default SelectOrigin;
