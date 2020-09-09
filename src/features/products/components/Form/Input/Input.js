import React from "react";
import { FastField, ErrorMessage, getIn } from 'formik';
import TextError from "../TextError/TextError";
import classes from './Input.module.scss'

const Input = props => {
  const {label, name, errors, touched, ...rest} = props;

  const getStyles = (errors, fieldName, touched) => {
    if (getIn(errors, fieldName) && getIn(touched, fieldName)) {
      return {
        border: '1px solid red',
        borderLeftWidth: '5px',
        transition: '0.5s all'
      }
    }
  }

  return (
    <div>
      <label className={classes.label} htmlFor={name}>{label}:</label>
      <FastField style={getStyles(errors, name, touched)} className={classes.input} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
