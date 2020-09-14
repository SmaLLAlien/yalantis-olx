import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from "./Order.module.scss";
import {formatDate} from "../../../../helpers/helpers";
import {orderType} from "../../types/types";

export const Order = props => {
  const {fetchOrder, order} = props;
  const {id} = useParams();

  useEffect(() => {
    fetchOrder(id);
  }, [id])

  let orderDetail = 'Loading';

  if (order) {
    orderDetail = (
      <div className={classes.order}>
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
      </div>
)
  }

  return (
    <div>{orderDetail}</div>
  )
}

Order.propTypes = {
  fetchOrder: PropTypes.func.isRequired,
  order: orderType
}

Order.defaultProps = {
  order: null
}
