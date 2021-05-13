import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51IppcNIrcJJ8VlaByzocVIhX5vgHrRDeyCzu4fjQ5vGbmfm5g2TRdcjEQFZ6Ijigcc7ChcQ0xRyc2mEl1F07VqVh00DgpnrWjK');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
