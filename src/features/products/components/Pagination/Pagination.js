import React from 'react';
import PropTypes from 'prop-types';
import classes from './Pagination.module.scss';
import { makePages } from '../../../../helpers/helpers';

const Pagination = (props) => {
  const { currentPage, perPage, totalItems, pageChanged } = props;
  const numberOfPages = Math.ceil(totalItems / perPage);
  const pages = makePages(numberOfPages);

  return (
    <>
      <div className={classes.container}>
        <button
          type="button"
          disabled={currentPage === 1 || numberOfPages === 0}
          className={classes.pagination__prev}
          onClick={() => pageChanged(currentPage - 1)}
        >
          &#8826;
        </button>

        <div className={classes.pagination}>
          {pages.map((page) => (
            <button
              type="button"
              className={
                currentPage === page
                  ? classes.pagination__active
                  : classes.pagination__page
              }
              onClick={() => pageChanged(page)}
              key={page}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={currentPage === numberOfPages || numberOfPages === 0}
          className={classes.pagination__next}
          onClick={() => pageChanged(currentPage + 1)}
        >
          &#8827;
        </button>
      </div>
    </>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  pageChanged: PropTypes.func.isRequired,
};

export default Pagination;
