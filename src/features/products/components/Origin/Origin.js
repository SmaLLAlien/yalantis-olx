import React from 'react';
import PropTypes from 'prop-types';
import { originType } from '../../types/types';

const Origin = (props) => {
  const { origin, clicked } = props;

  return (
    <label htmlFor={origin.value}>
      <input
        type="checkbox"
        id={origin.value}
        checked={origin.checked}
        onChange={() => clicked(origin)}
      />
      {origin.displayName}
    </label>
  );
};

Origin.propTypes = {
  origin: originType.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Origin;
