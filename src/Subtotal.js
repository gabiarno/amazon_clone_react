import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  //const [total, setTotal] = useState(0);
  let total = 0;
  console.log(basket, "lo que tengo en el basket de mi");
  console.log(dispatch);

  basket.forEach((element) => {
    total += element.price;
    console.log(total, "mi total");
    console.log(element, "mi elemento");
  });

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              {/*<strong>{`${value}`}</strong>*/}
              <strong>€ {total}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        /* value={ getBasketTotal(basket)} */
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
    </div>
  );
}

export default Subtotal;
