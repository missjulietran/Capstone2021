import React, { useState } from "react";
import "./BuyerSeller.css";
import SellerLogin from "./SellerLogin";
import BuyerLogin from "./BuyerLogin";

export const BuyerSeller = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div
      className="buyersellercontainer"
      style={{
        // background: `url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm209-adj-06_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2420e67d8999e57ee2fcfa856be738e2)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-container">
        <div className="flex-child magenta">
          <div className="left">
            <h1>
              Are you a{" "}
              <button className="userButton" onClick={handleClick}>
                Buyer
              </button>{" "}
              or a{" "}
              <button className="userButton" onClick={handleClick}>
                Seller
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
