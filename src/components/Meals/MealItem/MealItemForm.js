import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext)
    const addItemToCart = (event) => {
        event.preventDefault()
        const quantity = document.getElementById('amount').value
        cartCtx.addItem({...props.item, quantity: quantity})
        console.log(event.target)
    }

  return (
    <form className={classes.form}>
        {console.log(cartCtx)}
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
