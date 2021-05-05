import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

//Fixed Components
import NavBarSeller from "./components/Navbar1/NavBarSeller";
import Navbar2 from "./components/Navbar2/NavBar2";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";

//Seller Dashboard Components



// SellerDashboard Components

import SellerDashboard from "./components/SellerDashboard/SellerDashboard";
import InventoryForm from "./components/SellerDashboard/InventoryForm";
import EventForm from "./components/SellerDashboard/EventForm";
import Product from "./components/SellerDashboard/Product";
import UpdateInventoryForm from "./components/SellerDashboard/UpdateInventory";
import Information from "./components/SellerDashboard/UpdateInformation";

//Brands Section Components
import Brands from "./components/pages/Brands/Brands.js";
import BrandsProductList from "./components/pages/Brands/BrandsProductList.js";
// Category Section Components
import Categories from "./components/pages/Category/Categories.js";
import CategoryProductList from "./components/pages/Category/CategoryProductList.js";

import ProductDetailPage from "./components/pages/Products/ProductDetailPage.js";
//Events Section Components
import Events from "./components/pages/Events/Events.js";
import EventsProductListing from "./components/pages/Events/EventsProductListing.js";

import { About } from "./components/pages/About";
import { SignUp } from "./components/pages/SignUp";
import { LogIn } from "./components/pages/LogIn";
import { Cart } from "./components/pages/Cart";
import { BuyerSeller } from "./components/Accounts/BuyerSeller";
import { Contact } from "./components/pages/Contact";
import { FAQ } from "./components/pages/FAQ";

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
                to={{ pathname: "/Login", state: { from: props.location } }}
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
      <NavBarSeller />
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
        <Route exact path="/Brands" component={Brands} />
        <Route exactn path="/Brands/:brand" component={BrandsProductList} />
        {/* Category Routes */}
        <Route exact path="/Categories" component={Categories} />

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
        <Route exact path="/" component={Events} />
        <Route exact path="/Events/:id" component={EventsProductListing} />

        {/* <Error /> */}
        {/* Footer links */}
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/FAQ" component={FAQ} />
      </Switch>
      {/* SellerDashboard Links */}
      {/* USERID */}
      <PrivateRoute path="/SellerDashboard" component={SellerDashboard} />
      <PrivateRoute path="/InventoryUpload" component={InventoryForm} />
      <PrivateRoute
        path="/InventoryUpdate/:itemId"
        component={UpdateInventoryForm}
      />
      <PrivateRoute path="/EventUpload" component={EventForm} />
      <PrivateRoute path="/Sellerproduct" component={Product} />
      <PrivateRoute path="/InformationUpdate" component={Information} />
      <Footer />
    </Router>
  );
}

export default App;
