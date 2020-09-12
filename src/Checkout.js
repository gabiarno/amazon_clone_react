import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/30/X-Site/MAPE_VC_update._CB449116409_.jpg"
          alt=""
        ></img>
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/*BasketItem */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
