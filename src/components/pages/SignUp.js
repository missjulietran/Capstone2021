import SignUpForm from "../Accounts/SignUp/SignUpForm";
import "../../App.css";
import React, {useState} from "react";
import SignUpFormSeller from '../Accounts/SignUp/SignUpFormSeller';


export const SignUp = () => {

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
      return (
      <div> 
        <div className="d-flex justify-content-center"><h1>I want to register as a<button onClick={handleClick}>Buyer</button> or a <button onClick={handleClick}>Seller</button></h1></div>
      
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
        {click ? <SignUpForm /> : <SignUpFormSeller />}
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

