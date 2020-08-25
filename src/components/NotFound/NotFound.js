import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.scss';
import { Routes } from '../../global/constants';

const NotFound = () => (
  <Link to={Routes.PRODUCTS} className={classes.link}>
    <div className={classes.container}>
      <p className={classes.text}>404</p>
    </div>
  </Link>
);

export default NotFound;
