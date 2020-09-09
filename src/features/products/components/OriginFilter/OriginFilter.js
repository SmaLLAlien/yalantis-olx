import React from 'react';
import PropTypes from 'prop-types';
import classes from './OriginFilter.module.scss';
import Origin from '../Origin/Origin';
import { originType } from '../../types/types';

const OriginFilter = (props) => {
  const { origins, checkedOriginHandler } = props;

  let items = <div>Loading...</div>;
  if (origins) {
    items = origins.map((origin) => {
      return (
        <Origin
          key={origin.value}
          origin={origin}
          clicked={(originItem) => checkedOriginHandler(originItem)}
        />
      );
    });
  }

  return <div className={classes['origin-filter']}>{items}</div>;
};

OriginFilter.propTypes = {
  origins: PropTypes.arrayOf(originType).isRequired,
  checkedOriginHandler: PropTypes.func.isRequired,
};

export default OriginFilter;
