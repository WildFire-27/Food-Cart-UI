import React from 'react';
import Modal from '../ui/Modal';
import classes from './Cart.module.css';

export const Cart = (props) => {
    const cartItems = (

        <ul className={classes["cart-items"]}>
    
          {[{ id: "c1", name: "Sushi", amount: 500000, price: 12.99 }].map((item) => (
    <>
     <li>{item.name}</li>
            {/* <li>{item.price}</li> */}
    </>
       
          ))}
    
        </ul>
    
      );
  return (
    <Modal onClose={props.onCloseCart}>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>5000</span>
    </div>
    <div className={classes.action}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order </button>
    </div>
    </Modal>
  )
}
