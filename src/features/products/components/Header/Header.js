import React from 'react';
import {useRouteMatch, Link, useHistory} from 'react-router-dom';
import BasketWidget from '../../containers/BasketWidget';
import { Routes } from '../../../../global/constants';
import classes from './Header.module.scss';
import {openCreateModal, resetOrigin} from "../../store/actions";
import {connect} from "react-redux";

const Header = (props) => {
  const {openCreateModal} = props;
  const match = useRouteMatch(Routes.BASKET);
  const basket = match ? null : <BasketWidget />;

  return <>
    <div className={classes.header}>
      <button type='button' className={classes.header__create} onClick={openCreateModal}>Create product</button>
      {/*<Link to={{pathname: Routes.U, search: '?editable=true'}}>My Products</Link>*/}
      <Link to={{pathname: Routes.U}}>My Products</Link>
      <Link to={Routes.P}>Products</Link>
      {basket}
    </div>
  </>;
};

const mapDispatchToProps = {
  openCreateModal,
  resetOrigin
}

export default connect(null, mapDispatchToProps)(Header);

// const Header = (props) => {
//   const {openCreateModal, resetOrigin} = props;
//   const match = useRouteMatch(Routes.BASKET);
//   const basket = match ? null : <BasketWidget />;
//   const history = useHistory()
//
//   const myProdutctsCLickHandler = (link) => {
//     resetOrigin();
//     history.push(link)
//   }
//
//   return <>
//     <div className={classes.header}>
//       <button type='button' className={classes.header__create} onClick={openCreateModal}>Create product</button>
//       {/*<Link to={{pathname: Routes.U, search: '?editable=true'}}>My Products</Link>*/}
//       <button to={{pathname: Routes.U}} onClick={() => myProdutctsCLickHandler(Routes.U)}>My Products</button>
//       <button to={Routes.P} onClick={() => myProdutctsCLickHandler(Routes.P)}>Products</button>
//       {basket}
//     </div>
//   </>;
// };
