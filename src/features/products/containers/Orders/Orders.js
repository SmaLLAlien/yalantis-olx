import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import classes from "./Orders.module.scss";
import {formatDate} from "../../../../helpers/helpers";
import {Routes} from "../../../../global/constants";
import {orderType} from "../../types/types";

export const Orders = props => {
  const {fetchOrders, orders} = props;

  useEffect(() => {
    fetchOrders();
  }, [])

  let orderElements =  'Loading';

  if (orders.length) {
    orderElements = orders.map(order => {
      return (
        <Link to={`${Routes.ORDER}/${order.id}`} key={order.id} className={classes.order}>
          <div className={classes.order__info}>Order info:</div>
          <div className={classes.order__date}>
            Ordered:
            {formatDate(order.createdAt)}
          </div>
          {
            order.pieces.map(product => {
              return (
                <div key={product.id} className={classes.products}>
                  <div className={classes.order__price}>
                    Amount:
                    {product.count}
                  </div>
                  <div className={classes.order__name}>
                    Item:
                    {product.product.name}
                  </div>
                </div>
              )
            })
          }
        </Link>
      )
    })
  }

  return (
    <div className={classes.orders}>
      <div className={classes.orders__title}>Orders history</div>
      <div>
        {
          orderElements
        }
      </div>
    </div>
  )
}

Orders.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(orderType).isRequired
}
