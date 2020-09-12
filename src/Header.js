import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React from "react";
import "./Header.js";
import "./Header.css";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider.js";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="data:image/png;base64,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"
        ></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/*logo*/}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
export default Header;
