import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    let numberOfCartItems = 0
    cartCtx.items.forEach( item => {
        numberOfCartItems =  numberOfCartItems + Number(item.quantity)
    }, 0)

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
