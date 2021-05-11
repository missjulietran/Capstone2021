import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

//Fixed Components
import NavBar from "./components/Navbar1/NavBar";

import Navbar2 from "./components/Navbar2/NavBar2";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/Footer";

//Seller Dashboard Components

// SellerDashboard Components
import SellerDashboard from "./components/SellerDashboard/SellerDashboard";
import InventoryForm from "./components/SellerDashboard/InventoryForm";
import EventForm from "./components/SellerDashboard/EventForm";
import Product from "./components/SellerDashboard/Product";
import UpdateInventoryForm from "./components/SellerDashboard/UpdateInventory";
import Information from "./components/SellerDashboard/UpdateInformation";

// BuyerDashboard Components
import BuyerDashboard from "./components/BuyerDashboard/BuyerDashboard";
import UpdateBuyer from "./components/BuyerDashboard/UpdateBuyer";
import BuyerOrderPage from "./components/BuyerDashboard/BuyerOrderPage";
import OrderDetails from "./components/BuyerDashboard/OrderDetails";

//Brands Section Components
import BrandsProductList from "./components/pages/Brands/BrandsProductList.js";

// Category Section Components
import CategoryProductList from "./components/pages/Category/CategoryProductList.js";
import ProductDetailPage from "./components/pages/Products/ProductDetailPage.js";

//Events Section Components
// import Events from "./components/pages/Events/Events.js";
import EventsProductListing from "./components/pages/Events/EventsProductListing.js";

import { About } from "./components/pages/About";
import { SignUp } from "./components/pages/SignUp";
import { LogIn } from "./components/pages/LogIn";
import Cart from "./components/pages/Cart.js";
import { BuyerSeller } from "./components/Accounts/BuyerSeller";
import { Contact } from "./components/pages/Contact";
import { FAQ } from "./components/pages/FAQ";
import { Thankyou } from "./components/pages/Thankyou";
import GiveBack from "./components/pages/GiveBack";

//Stripe Payment Cart

// import Error from "./components/pages/Error"

function App() {
  const PrivateRoute = ({ component, ...rest }) => {
    const auth = useSelector((state) => state.login);
    const { isAuthenticated } = auth;
    const Component = component;

    if (Component != null) {
      return (
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/BuyerSeller",
                  state: { from: props.location },
                }}
              />
            )
          }
        />
      );
    } else {
      return null;
    }
  };
  return (
    <Router>
      <NavBar />

      <Navbar2 />

      <Route path="/" exact component={Home} />
      <Switch>
        {/* Navbar1 Links */}
        <Route path="/BuyerSeller" component={BuyerSeller} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Cart" component={Cart} />

        {/* Navbar2 links */}
        {/* Brands Routes */}
        <Route exact path="/Brands/:brand" component={BrandsProductList} />

        {/* Category Routes */}
        <Route
          exact
          path="/Categories/:category"
          component={CategoryProductList}
        />
        <Route
          exact
          path="/Categories/:category/:id"
          component={ProductDetailPage}
        />

        {/* Events Routes */}
        <Route exact path="/Events/:id" component={EventsProductListing} />
        {/* Cart */}
        <Route exact path='/Cart' component={Cart}/>

        {/* <Error /> */}
        {/* Footer links */}
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Thankyou" component={Thankyou} />
        <Route path="/GiveBack" component={GiveBack} />
      </Switch>
      {/* SellerDashboard Links */}
      {/* USERID */}
      <PrivateRoute path="/sellerdashboard" component={SellerDashboard} />
      <PrivateRoute path="/inventoryupload" component={InventoryForm} />
      <PrivateRoute
        path="/inventoryupdate/:itemId"
        component={UpdateInventoryForm}
      />
      <PrivateRoute path="/eventupload" component={EventForm} />
      <PrivateRoute path="/sellerproduct" component={Product} />
      <PrivateRoute path="/informationupdate" component={Information} />

      {/* BuyerDashboard Links */}

      <PrivateRoute path="/buyerdashboard" component={BuyerDashboard} />
      <PrivateRoute path="/updatebuyer" component={UpdateBuyer} />
      <PrivateRoute path="/yourorder" component={BuyerOrderPage} />
      <PrivateRoute path="/orderdetails/:orderId" component={OrderDetails} />

      <Footer />
    </Router>
  );
}

export default App;
