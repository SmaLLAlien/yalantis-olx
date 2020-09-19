import React from 'react';
import PropTypes from 'prop-types';
import classes from './TextError.module.scss';

const TextError = (props) => {
  const { children } = props;

  return <div className={classes.error}>{children}</div>;
};

TextError.propTypes = {
  children: PropTypes.string.isRequired,
};
export default TextError;
