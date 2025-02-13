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
import { getStyles } from '../../../../../helpers/helpers';

const SelectOrigin = (props) => {
  const { name, label, options, touched, errors, disabled } = props;

  return (
    <div>
      <label className={classes.label} htmlFor={name}>
        {label}:
      </label>
      <FastField
        style={getStyles(errors, name, touched, getIn)}
        className={classes.input}
        as="select"
        id={name}
        name={name}
        disabled={disabled}
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
  disabled: PropTypes.bool.isRequired,
};

SelectOrigin.defaultProps = {
  errors: null,
  touched: null,
};

export default SelectOrigin;
