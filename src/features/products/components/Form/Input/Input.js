import React from "react";
import { FastField, ErrorMessage } from 'formik';
import TextError from "../TextError/TextError";
import classes from './Input.module.scss'

const Input = props => {
  const {label, name, ...rest} = props;

  return (
    <div>
      <label className={classes.label} htmlFor={name}>{label}:</label>
      <FastField className={classes.input} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
