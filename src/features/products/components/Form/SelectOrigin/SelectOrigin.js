import React from "react";
import {FastField, ErrorMessage} from 'formik';
import TextError from "../TextError/TextError";
import classes from './SelectOrigin.module.scss'
import Select from "react-select";

const SelectOrigin = (props) => {
  const {name, label, options, setFieldValue} = props;

  return (
    <div>
      <label className={classes.label} htmlFor={name}>{label}:</label>
      <FastField className={classes.input} as='select' id={name} name={name}>
        <option className={classes.option} defaultValue>Select origin</option>
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
