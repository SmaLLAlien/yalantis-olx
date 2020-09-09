import React from "react";
import classes from './TextError.module.scss';

const TextError = (props) => (
  <div className={classes.error}>{props.children}</div>
)

export default TextError;
