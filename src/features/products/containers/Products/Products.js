import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ProductsList from '../ProductsList';
import Pagination from '../../components/Pagination/Pagination'
import { originType } from '../../types/types';
import OriginFilter from '../../components/OriginFilter/OriginFilter';
import PriceRange from '../PriceRange/PriceRange';
import {getQueryVariable, makeParams} from '../../../../helpers/helpers';
import classes from './Products.module.scss';
import PerPage from "../../components/PerPage/PerPage";

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

    let newQuery = makeParams();
    newQuery.origins = originsArrayFromUrl.join(',');
    newQuery = new URLSearchParams(newQuery).toString();

    manageOrigins(origin);
    history.push({search: newQuery});
  };

  const setPrice = (minPrice, maxPrice) => {
    let newQuery = makeParams();

    newQuery.minPrice = minPrice;
    newQuery.maxPrice = maxPrice;

    newQuery = new URLSearchParams(newQuery).toString();
    history.push({search: newQuery});
  };

  const pageChanged = (pageNumber) => {
    let newQuery = makeParams();
    newQuery.page = pageNumber
    newQuery.perPage = perPage
    newQuery = new URLSearchParams(newQuery).toString();
    history.push({search: newQuery});
  }

  const perPageChanged = (perPageNumber) => {
    let newQuery = makeParams();
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


          <PerPage perPage={perPage} perPageClicked={(perPage) => perPageChanged(perPage)} />
        </div>
        <div><ProductsList /></div>

      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          totalItems={totalItems}
          pageChanged={(page) => pageChanged(page)}
        />
      </div>
    </>
  );
};

Products.propTypes = {
  fetchOrigins: PropTypes.func.isRequired,
  manageOrigins: PropTypes.func.isRequired,
  productOrigins: PropTypes.arrayOf(originType).isRequired,
};

