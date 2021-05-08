import SignUpForm from "../Accounts/SignUp/SignUpform";

import "../../App.css";
import React, { useState } from "react";
import SignUpFormSeller from "../Accounts/SignUp/SignUpFormSeller";

export const SignUp = () => {
  const [isBuyer, setIsBuyer] = useState("");
  const handleClickA = () => setIsBuyer(true);
  const handleClickB = () => setIsBuyer(false);
  return (
    <div className="signupdiv">
    {/* <div className="flex-container"> */}
      <div className="d-flex justify-content-center">
        <h3>
          I want to register as a<button onClick={handleClickA}>Buyer</button>{" "}
          or a <button onClick={handleClickB}>Seller</button>
        </h3>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            {isBuyer ? <SignUpForm /> : <SignUpFormSeller />}
          </div>
          <div className="col-md-7 my-auto">
            <img
              className="img-fluid w-100 rounded"
              src="https://cdn.shopify.com/s/files/1/0078/1032/files/Copy_of_Black_and_White_Road_Bordered_Poster_2_1024x1024.jpg?v=1617315927"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
