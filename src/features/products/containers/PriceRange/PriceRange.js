import React, {useState} from 'react';
import classes from './PriceRange.module.scss'
import {MAX_PRICE_DEFAULT} from "../../../../global/constants";
import {getQueryVariable} from "../../../../helpers/helpers";

const PriceRange = props => {
  const minUrlPrice = getQueryVariable('minPrice') || 0;
  const maxUrlPrice = getQueryVariable('maxPrice') || MAX_PRICE_DEFAULT;
  const {changedPrice} = props;
  let [maxPrice, setMaxPrice] = useState(maxUrlPrice);
  let [minPrice, setMinPrice] = useState(minUrlPrice);

  const maxPriceHandler = event => {
    const {target} = event;
    setMaxPrice(target.value)
  }

  const minPriceHandler = event => {
    const {target} = event;
    setMinPrice(target.value)
  }

  const isMinPriceChanged = () => {
    return minPrice !== '0' && +minPrice > 0 && +minPrice < +maxPrice;
  }

  const isMaxPriceChanged = () => {
    return maxPrice !== '1500' && +maxPrice > 0 && +minPrice < +maxPrice;
  }

  const isDisabled = () => {
    return isMinPriceChanged() || isMaxPriceChanged()
  }

  const setPrice = () => {
    if (isDisabled()) {
      changedPrice(minPrice, maxPrice)
    }
  }

  return (
    <div className={classes.range}>
      <div>{minPrice}</div>
      <input type="text" value={minPrice} onChange={minPriceHandler} />
      <input type="text" value={maxPrice} onChange={maxPriceHandler} />
      <div>{maxPrice}</div>
      <button disabled={!isDisabled()} onClick={() => setPrice()}>Apply</button>
    </div>
  )
}

export default PriceRange;
