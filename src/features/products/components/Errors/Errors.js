import React from 'react';
import PropTypes from 'prop-types';
import classes from './Errors.module.scss';

const Errors = (props) => {
  const { error, showError } = props;

  return (
    <div className={classes.error}>
      <div className={classes.error__text}>{error}</div>
      <button
        type="button"
        className={classes.error__button}
        onClick={() => showError()}
      >
        Try again
      </button>
    </div>
  );
};

Errors.propTypes = {
  error: PropTypes.string.isRequired,
  showError: PropTypes.func.isRequired,
};

export default Errors;
