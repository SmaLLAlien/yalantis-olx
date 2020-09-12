import React, {useEffect} from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {useOriginQuery} from "../../hooks/useOriginQuery";
import {makeParams, refactorOriginsSearch} from "../../../../helpers/helpers";
import CreateProduct from "../CreateProduct/CreateProduct";
import classes from "./Layout.module.scss";
import OriginFilter from "../../components/OriginFilter/OriginFilter";
import PriceRange from "../PriceRange/PriceRange";
import PerPage from "../../components/PerPage/PerPage";
import Pagination from "../../components/Pagination/Pagination";
import {Routes} from "../../../../global/constants";
import Products from "../Products";
import UserProducts from "../UserProducts";
import PropTypes from 'prop-types';
import {originType} from "../../types/types";

const Layout = props => {
  const {
    productOrigins,
    fetchOrigins,
    manageOrigins,
    currentPage,
    perPage,
    totalItems,
    setOriginQueryToStore,
    isCreateModalOpen,
    resetOrigin
  } = props;
  const history = useHistory();
  const originsArrayFromUrl = useOriginQuery();
  const params = useLocation().pathname;

  useEffect(() => {
    resetOrigin()
  }, [params])

  useEffect(() => {
    const storeOrigins = () => {
      setOriginQueryToStore(originsArrayFromUrl);
    };
    storeOrigins();
  }, [originsArrayFromUrl]);

  useEffect(() => {
    fetchOrigins();
  }, []);

  const onOriginCheckedHandler = (origin) => {
    refactorOriginsSearch(origin, originsArrayFromUrl);

    let newQuery = makeParams();
    newQuery.origins = originsArrayFromUrl.join(',');
    newQuery = new URLSearchParams(newQuery).toString();

    manageOrigins(origin);
    history.push({ search: newQuery });
  };

  const setPrice = (minPrice, maxPrice) => {
    let newQuery = makeParams();

    newQuery.minPrice = minPrice;
    newQuery.maxPrice = maxPrice;

    newQuery = new URLSearchParams(newQuery).toString();
    history.push({ search: newQuery });
  };

  const pageChanged = (pageNumber) => {
    let newQuery = makeParams();
    newQuery.page = pageNumber;
    newQuery.perPage = perPage;
    newQuery = new URLSearchParams(newQuery).toString();
    history.push({ search: newQuery });
  };

  const perPageChanged = (perPageNumber) => {
    let newQuery = makeParams();
    newQuery.perPage = perPageNumber;
    newQuery = new URLSearchParams(newQuery).toString();
    history.push({ search: newQuery });
  };

  return (
    <>
      {isCreateModalOpen && <CreateProduct />}
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
          <hr />
          <PerPage
            perPage={perPage}
            perPageClicked={(perPageNumber) => perPageChanged(perPageNumber)}
          />
        </div>
        <div className={classes.products__list}>
          <Switch>
            <Route path={`${Routes.CATALOG}`} exact component={Products} />
            <Route path={`${Routes.CREATED}`} exact component={UserProducts} />
          </Switch>
        </div>
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
  )
}

Layout.propTypes = {
  fetchOrigins: PropTypes.func.isRequired,
  manageOrigins: PropTypes.func.isRequired,
  setOriginQueryToStore: PropTypes.func.isRequired,
  isCreateModalOpen: PropTypes.bool.isRequired,
  productOrigins: PropTypes.arrayOf(originType).isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
}

export default Layout;
