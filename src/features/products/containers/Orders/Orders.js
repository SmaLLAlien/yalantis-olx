import React, {useEffect} from "react";
import classes from "./Orders.module.scss";
import {CURRENCY} from "../../../../global/constants";
import PropTypes from 'prop-types';

export const Orders = props => {
  const {fetchOrders, orders} = props;

  useEffect(() => {
    fetchOrders();
  }, [])

  let orderElements =  'Loading';

  if (orders.length) {
    orderElements = orders.map(order => {
      return (
        <div key={order.id}>
          {
            order.pieces.map(product => {
              return <div className={classes.product} key={product.id}>
                <div className={classes.product__name}>{product.product.name}</div>
                <div className={classes.product__origin}>
                  Country:
                  {product.product.origin.toUpperCase()}
                </div>
                <div className={classes.product__price}>
                  Price:
                  {product.product.price}
                  {' '}
                  {CURRENCY}
                </div>
              </div>
            })
          }
        </div>
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
  orders: PropTypes.array
}
