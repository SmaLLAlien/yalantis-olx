import React, {useEffect, useState} from "react";
import classes from './ToTop.module.scss'

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      if (window.pageYOffset > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    document.addEventListener("scroll", toggle);

    return () => document.removeEventListener('scroll', toggle);
  }, [])

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const top = visible
    ? (
      <button
        type='button'
        onClick={scrollToTop}
        className={classes.top}
      >
        &#8593;
      </button>
)
    : null
  return (
    <>{top}</>
  )
}

export default ToTop
