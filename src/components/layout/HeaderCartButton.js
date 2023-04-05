import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0) //sum =0 ,sum=sum+item.price
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
