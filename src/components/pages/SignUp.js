import { SignUpForm } from "../Accounts/SignUp/SignUpForm";
import "../../App.css";

export const SignUp = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUpForm />
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
  );
};
