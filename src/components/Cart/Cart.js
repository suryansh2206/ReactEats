import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Chole Bhature", amount: 2, price: 80 }].map(
        (items) => (
          <li>{items.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>160</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
