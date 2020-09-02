import React from "react";
import classes from './Pagination.module.scss'
import {makePages} from "../../../../helpers/helpers";
import {PER_PAGE_MENU} from "../../../../global/constants";

const Pagination = props => {
  const { currentPage, perPage, totalItems, pageChanged, perPageClicked } = props;
  const numberOfPages = Math.ceil(totalItems / perPage);
  const pages = makePages(numberOfPages);
  const perPageMenu = PER_PAGE_MENU;

  return (
    <React.Fragment>
      <div className={classes.pagination}>
        {
          pages.map(page => <button onClick={() => pageChanged(page)} key={page}>{page}</button>)
        }
      </div>
      <div>
        {
          perPageMenu.map(perPageNumber =>  <button onClick={() => perPageClicked(perPageNumber)} key={perPageNumber}>{perPageNumber}</button>)
        }
      </div>
      <button onClick={() => pageChanged(currentPage - 1)}>BACK</button>
      <button onClick={() => pageChanged(currentPage + 1)}>GO</button>
    </React.Fragment>
  )
}

export default Pagination
