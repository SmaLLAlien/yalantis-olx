import React, {useEffect} from 'react';
import ProductsList from '../ProductsList';
import PropTypes from 'prop-types'
import {originType} from "../../types/types";
import OriginFilter from "../../components/OriginFilter/OriginFilter";
import {useHistory} from 'react-router-dom'
import PriceRange from "../PriceRange/PriceRange";
import {getQueryVariable} from "../../../../helpers/helpers";

export const Products = (props) => {
  const {productOrigins, fetchOrigins, manageOrigins} = props;
  const history = useHistory();
  const originsQuery =  getQueryVariable('origins');
  const originsArrayFromUrl = originsQuery ? originsQuery.split(',') : [];

  useEffect(() => {
    fetchOrigins(originsArrayFromUrl);
  }, [])

  const onOriginCheckedHandler = (origin) => {


    if (originsArrayFromUrl.includes(origin.value)) {
      const index = originsArrayFromUrl.findIndex(search => search === origin.value);
      originsArrayFromUrl.splice(index, 1);
    } else {
      originsArrayFromUrl.push(origin.value);
    }

    let newQuery = null;
    let minPrice = getQueryVariable('minPrice');
    let maxPrice = getQueryVariable('maxPrice');

    if (minPrice) {
      newQuery = new URLSearchParams({origins:originsArrayFromUrl.join(','), minPrice, maxPrice}).toString();
    } else {
      newQuery = new URLSearchParams({origins: originsArrayFromUrl.join(',')}).toString();
    }

    manageOrigins(origin);
    history.push({
      search: newQuery
    })
  }

  const setPrice = (minPrice, maxPrice) => {
    let newQuery = null;
    let origins = getQueryVariable('origins');

    if (origins) {
      newQuery = new URLSearchParams({origins, minPrice, maxPrice}).toString();
    } else {
      newQuery = new URLSearchParams({minPrice, maxPrice}).toString();
    }

    history.push({
          search: newQuery
        })
  }

  return (
    <React.Fragment>
      <OriginFilter origins={productOrigins} checkedOriginHandler={(origin) => onOriginCheckedHandler(origin)} />
      <PriceRange changedPrice = {(minPrice, maxPrice) => setPrice(minPrice, maxPrice)} />
      <ProductsList />
    </React.Fragment>
  );
};

Products.propTypes = {
  fetchOrigins: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  productOrigins: PropTypes.arrayOf(originType)
}
