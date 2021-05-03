import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/actions/loginAction";

const SellerLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.login);
  const { isLoading, isAuthenticated } = auth;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push("/Seller");
      console.log("yes");
    }
  }, [isAuthenticated]);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUserThunk(email, password));
  };
  return (
    <div>
      <h1>Welcome back, Seller</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              console.log("password", e.target.value);
              setPassword(e.currentTarget.value);
            }}
            value={password}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={login}>
          Submit
        </Button>
        {isLoading && "Loading..."}
      </Form>
    </div>
  );
};

export default SellerLogin;
