import React, { useState } from "react";
import Input from "../../ui/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //string
    const enteredAmountNumber = +enteredAmount; //numeric
    console.log(enteredAmountNumber);

    //checking form validations
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    //you will call a function provided by mealIteam and mealItem comp
    // will prepare complete data alog with amount and call addItem

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>Add to cart</button>
      {!amountIsValid && <p>Please enter valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;