import React, { useState } from "react";
import "./BuyerSeller.css";
import SellerLogin from "./SellerLogin";
import BuyerLogin from "./BuyerLogin";

export const BuyerSeller = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-child magenta">
          <div className="left">
            <h1>
              Are you a{" "}
              <button className="userButton" onClick={handleClick}>
                BUYER
              </button>{" "}
              or a{" "}
              <button className="userButton" onClick={handleClick}>
                SELLER
              </button>{" "}
              ?
            </h1>
          </div>
        </div>

        <div className="flex-child green">
          <div className="right">
            {click ? <SellerLogin /> : <BuyerLogin />}
          </div>
        </div>
      </div>
    </div>
  );
};
