import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './PriceRange.module.scss';
import {
  MAX_PRICE_DEFAULT,
  MIN_PRICE_DEFAULT,
} from '../../../../global/constants';
import {
  getQueryVariable,
  isDisabledPriceRange,
} from '../../../../helpers/helpers';

const PriceRange = (props) => {
  const minUrlPrice = getQueryVariable('minPrice') || 0;
  const maxUrlPrice = getQueryVariable('maxPrice') || MAX_PRICE_DEFAULT;
  const { changedPrice } = props;
  const [maxPrice, setMaxPrice] = useState(maxUrlPrice);
  const [minPrice, setMinPrice] = useState(minUrlPrice);

  const maxPriceHandler = (event) => {
    const { target } = event;
    setMaxPrice(target.value);
  };

  const minPriceHandler = (event) => {
    const { target } = event;
    setMinPrice(target.value);
  };

  const setPrice = () => {
    if (!isDisabledPriceRange(minPrice, maxPrice)) {
      changedPrice(minPrice, maxPrice);
    }
  };

  const resetPrice = () => {
    if (!isDisabledPriceRange(minPrice, maxPrice)) {
      setMaxPrice(MAX_PRICE_DEFAULT);
      setMinPrice(MIN_PRICE_DEFAULT);
      changedPrice(MIN_PRICE_DEFAULT, MAX_PRICE_DEFAULT);
    }
  };

  const onEnter = (e) => {
    if (!isDisabledPriceRange(minPrice, maxPrice) && e.key === 'Enter') {
      changedPrice(minPrice, maxPrice);
    }
  };

  return (
    <div className={classes.range}>
      <div className={classes.range__header}>Price</div>
      <div className={classes.range__control}>
        <input
          className={classes.range__input}
          type="text"
          value={minPrice}
          onChange={minPriceHandler}
          onKeyDown={onEnter}
        />
      </div>
      <div className={classes.range__control}>
        <input
          className={classes.range__input}
          type="text"
          value={maxPrice}
          onChange={maxPriceHandler}
          onKeyDown={onEnter}
        />
      </div>
      <div className={classes.range__buttons}>
        <button
          type="button"
          disabled={isDisabledPriceRange(minPrice, maxPrice)}
          onClick={() => setPrice()}
        >
          Apply
        </button>
        <button
          type="button"
          disabled={isDisabledPriceRange(minPrice, maxPrice)}
          onClick={() => resetPrice()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

PriceRange.propTypes = {
  changedPrice: PropTypes.func.isRequired,
};

export default PriceRange;
