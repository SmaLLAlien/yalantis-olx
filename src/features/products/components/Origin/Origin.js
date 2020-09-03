import React from 'react';
import PropTypes from 'prop-types';
import { originType } from '../../types/types';
import classes from './Origin.module.scss';

const Origin = (props) => {
  const { origin, clicked } = props;

  return (
    <div className={classes.origin}>
      <input
        className={classes.origin__control}
        type="checkbox"
        id={origin.value}
        checked={origin.checked}
        onChange={() => clicked(origin)}
      />
      <label className={classes.origin__label} htmlFor={origin.value}>
        {origin.displayName}
      </label>
    </div>
  );
};

Origin.propTypes = {
  origin: originType.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Origin;
