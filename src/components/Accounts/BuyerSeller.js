import React, { useState } from "react";
import "./BuyerSeller.css";
import SellerLogin from "./SellerLogin";
import BuyerLogin from "./BuyerLogin";

export const BuyerSeller = () => {
  const [isBuyer, setIsBuyer] = useState("");
  const handleClickA = () => setIsBuyer(true);
  const handleClickB = () => setIsBuyer(false);

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
        <div className="flex-child magenta"
        style={{background: `url(https://inhabitat.com/wp-content/blogs.dir/1/files/2019/04/eco-products-1-889x592.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "30px",
        backgroundRepeat: "no-repeat",}}>
          <div className="left"
        >
            <h1>
              Are you a{" "}
              <button className="userButton" onClick={handleClickB}>
                Buyer
              </button>{" "}
              or a{" "}
              <button className="userButton" onClick={handleClickA}>
                Seller
              </button>{" "}
              ?
            </h1>
          </div>
          
        </div>

        <div className="flex-child green">
          <div className="right">
            <div>{isBuyer ? <SellerLogin /> : <BuyerLogin />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

