import React, {useEffect} from 'react';
import ProductsList from '../ProductsList';
import PropTypes from 'prop-types'
import {originType} from "../../types/types";
import OriginFilter from "../../components/OriginFilter/OriginFilter";
import {useLocation, useHistory} from 'react-router-dom'
import {manageOrigins} from "../../store/actions";

export const Products = (props) => {
  const {productOrigins, fetchOrigins, manageOrigins} = props;
  const history = useHistory();
  const params = useLocation();
  const searchValue = params.search.slice(1).split('=')[1];
  const searchValues = searchValue ? searchValue.split('.') : [];

  useEffect(() => {
    fetchOrigins(searchValues);
  }, [])

  const onOriginCheckedHandler = (origin) => {
    console.log(origin, 'ORIGIN');
    if (searchValues.includes(origin.value)) {
      const index = searchValues.findIndex(search => search === origin.value);
      searchValues.splice(index, 1);
    } else {
      searchValues.push(origin.value);
    }

    manageOrigins(origin)
    history.push({
      search: "?" + new URLSearchParams({origins: searchValues.join('.')}).toString()
    })
  }

  return (
    <React.Fragment>
      <OriginFilter origins={productOrigins} checkedOriginHandler={(origin) => onOriginCheckedHandler(origin)} />
      <ProductsList />
    </React.Fragment>
  );
};

Products.propTypes = {
  fetchOrigins: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  productOrigins: PropTypes.arrayOf(originType)
}
