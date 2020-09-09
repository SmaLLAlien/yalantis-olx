import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import classes from './Portal.module.scss';

const Portal = (props) => {
  const {children, el = 'div'} = props;
  let container = document.createElement(el);


  useEffect(() => {
    container.setAttribute("class", classes.wrapper);
    document.body.style.overflow = "hidden";
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
      document.body.style.overflow = "auto";
    }
  })

  return createPortal(children, container)
}

export default Portal
