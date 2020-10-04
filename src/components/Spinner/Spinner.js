import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.lds_dual_ring} />
    </div>
  );
};

export default Spinner;
