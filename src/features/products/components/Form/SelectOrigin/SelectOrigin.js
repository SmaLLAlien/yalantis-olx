import React from "react";
import {FastField, ErrorMessage, getIn} from 'formik';
import TextError from "../TextError/TextError";
import classes from './SelectOrigin.module.scss'
import Select from "react-select";

const SelectOrigin = (props) => {
  const {name, label, options, touched, errors, setFieldValue} = props;

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
      <FastField style={getStyles(errors, name, touched)} className={classes.input} as='select' id={name} name={name}>
        <option hidden className={classes.option} defaultValue>Select origin</option>
        {
          options.map(option => (
             <option className={classes.option} key={option.value} value={option.value}>{option.displayName}</option>
          ))
        }
      </FastField>
      {/*<Select*/}
      {/*  className={classes.input}*/}
      {/*  getOptionLabel={option => option.displayName}*/}
      {/*  name="origin"*/}
      {/*  options={options}*/}
      {/*  placeholder="Origins"*/}
      {/*  onChange={value => setFieldValue("origin", value)}*/}
      {/*/>*/}
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default SelectOrigin;
