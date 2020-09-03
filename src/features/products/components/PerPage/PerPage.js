import React from "react";
import PropTypes from 'prop-types'
import {PER_PAGE_MENU} from "../../../../global/constants";
import classes from './PerPage.module.scss';

const PerPage = props => {
  const { perPage, perPageClicked } = props;

  const perPageMenu = PER_PAGE_MENU;

  const selected = e => {
    perPageClicked(e.target.value);
  }

  return (
    <div className={classes.selectWrapper}>
      <span>Products per page: </span>
      <select onChange={selected} value={perPage} className={classes.select}>
        {
          perPageMenu.map(perPageNumber =>  <option className={classes.select__option} key={perPageNumber}>{perPageNumber}</option>)
        }
      </select>
    </div>
  )
}

PerPage.propTypes = {
  perPage: PropTypes.number.isRequired,
  perPageClicked: PropTypes.func.isRequired,
}

export default PerPage;
