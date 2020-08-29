import React from 'react';
import PropTypes from 'prop-types';
import classes from './PiecesControl.module.scss';

const PiecesControl = (props) => {
  const { btnClass, clicked, children } = props;

  return (
    <button
      type="button"
      className={classes[`${btnClass}`]}
      onClick={() => clicked()}
    >
      {children}
    </button>
  );
};

PiecesControl.propTypes = {
  btnClass: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default PiecesControl;
