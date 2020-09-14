import React from 'react';
import PropTypes from 'prop-types';
import classes from './Errors.module.scss';

const Errors = (props) => {
  const { error, showError } = props;

  const tryAgain = showError
    ? (
      <button
        type="button"
        className={classes.error__button}
        onClick={() => showError()}
      >
        Try again
      </button>
)
    : null

  return (
    <div className={classes.error}>
      <div className={classes.error__text}>{error}</div>
      {tryAgain}
    </div>
  );
};

Errors.propTypes = {
  error: PropTypes.string.isRequired,
  showError: PropTypes.func,
};

Errors.defaultProps = {
  showError: null
}

export default Errors;
