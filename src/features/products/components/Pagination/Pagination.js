import React from "react";
import classes from './Pagination.module.scss'
import {makePages} from "../../../../helpers/helpers";

const Pagination = props => {
  const { currentPage, perPage, totalItems, pageChanged } = props;
  const numberOfPages = Math.ceil(totalItems / perPage);
  const pages = makePages(numberOfPages);

  return (
    <React.Fragment>
        <div className={classes.container}>
          <button
            disabled={currentPage === 1 || numberOfPages === 0}
            className={classes.pagination__prev}
            onClick={() => pageChanged(currentPage - 1)}>&#8826;</button>

          <div className={classes.pagination}>
            {
              pages.map(page => <button
                className={currentPage === page ? classes.pagination__active : classes.pagination__page}
                onClick={() => pageChanged(page)}
                key={page}>{page}</button>
              )
            }
          </div>

          <button
            disabled={currentPage === numberOfPages || numberOfPages === 0}
            className={classes.pagination__next}
            onClick={() => pageChanged(currentPage + 1)}>&#8827;</button>
        </div>
    </React.Fragment>
  )
}

export default Pagination
