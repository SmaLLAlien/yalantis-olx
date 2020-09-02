import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductsList from '../ProductsList';
import Pagination from '../../components/Pagination/Pagination'
import { originType } from '../../types/types';
import OriginFilter from '../../components/OriginFilter/OriginFilter';
import PriceRange from '../PriceRange/PriceRange';
import { getQueryVariable } from '../../../../helpers/helpers';
import classes from './Products.module.scss';

export const Products = (props) => {
  const { productOrigins, fetchOrigins, manageOrigins, currentPage, perPage, totalItems } = props;
  const history = useHistory();
  const originsQuery = getQueryVariable('origins');
  const originsArrayFromUrl = originsQuery ? originsQuery.split(',') : [];

  useEffect(() => {
    fetchOrigins(originsArrayFromUrl);
  }, []);

  const onOriginCheckedHandler = (origin) => {
    if (originsArrayFromUrl.includes(origin.value)) {
      const index = originsArrayFromUrl.findIndex(
        (search) => search === origin.value,
      );
      originsArrayFromUrl.splice(index, 1);
    } else {
      originsArrayFromUrl.push(origin.value);
    }

    let newQuery;
    const minPrice = getQueryVariable('minPrice');
    const maxPrice = getQueryVariable('maxPrice');

    if (minPrice) {
      newQuery = new URLSearchParams({
        origins: originsArrayFromUrl.join(','),
        minPrice,
        maxPrice,
      }).toString();
    } else {
      newQuery = new URLSearchParams({
        origins: originsArrayFromUrl.join(','),
      }).toString();
    }

    manageOrigins(origin);
    history.push({search: newQuery});
  };

  const setPrice = (minPrice, maxPrice) => {
    let newQuery = {};
    const origins = getQueryVariable('origins');

    if (origins) {
      newQuery.origins = origins;
    }

    newQuery.minPrice = minPrice;
    newQuery.maxPrice = maxPrice;


    newQuery = new URLSearchParams(newQuery).toString();
    history.push({search: newQuery});
  };

  const pageChanged = (pageNumber) => {
    let newQuery = {};
    const origins = getQueryVariable('origins');
    const minPrice = getQueryVariable('minPrice');
    const maxPrice = getQueryVariable('maxPrice');

    if (origins) {
      newQuery.origins = origins;
    }

    if (minPrice) {
      newQuery.minPrice = minPrice;
      newQuery.maxPrice = maxPrice;
    }

    newQuery.page = pageNumber

    newQuery = new URLSearchParams(newQuery).toString();
    history.push({search: newQuery});
  }

  const perPageChanged = (perPageNumber) => {
    let newQuery = {};
    const origins = getQueryVariable('origins');
    const minPrice = getQueryVariable('minPrice');
    const maxPrice = getQueryVariable('maxPrice');

    if (origins) {
      newQuery.origins = origins;
    }

    if (minPrice) {
      newQuery.minPrice = minPrice;
      newQuery.maxPrice = maxPrice;
    }

    newQuery.perPage = perPageNumber;
    newQuery = new URLSearchParams(newQuery).toString();
    history.push({search: newQuery});
  }

  return (
    <>
      <div className={classes.products}>
        <div className={classes.products__controls}>
          <OriginFilter
            className={classes.products__filter}
            origins={productOrigins}
            checkedOriginHandler={(origin) => onOriginCheckedHandler(origin)}
          />
          <hr />
          <PriceRange
            changedPrice={(minPrice, maxPrice) => setPrice(minPrice, maxPrice)}
          />
        </div>
        <div><ProductsList /></div>

      </div>
      <div>
        <Pagination
        currentPage={currentPage}
        perPage={perPage}
        totalItems={totalItems}
        pageChanged={(page) => pageChanged(page)}
        perPageClicked={(perPage) => perPageChanged(perPage)} />
      </div>
    </>
  );
};

Products.propTypes = {
  fetchOrigins: PropTypes.func.isRequired,
  manageOrigins: PropTypes.func.isRequired,
  productOrigins: PropTypes.arrayOf(originType).isRequired,
};
