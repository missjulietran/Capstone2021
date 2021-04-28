import React from "react";
import NavBar from "./components/Navbar1/NavBar";
import Navbar2 from "./components/Navbar2/NavBar2";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Footer from "./components/Footer";
import Footer from "./components/Footer";
import SellerDashboard from "./components/SellerDashboard/SellerDashboard";
import InventoryForm from "./components/SellerDashboard/InventoryForm";
import EventForm from "./components/SellerDashboard/EventForm";
import Product from "./components/SellerDashboard/Product";

import { About } from "./components/pages/About";
import { Brands } from "./components/pages/Brands";
import { Categories } from "./components/pages/Categories";
import { SignUp } from "./components/pages/SignUp";
import { LogIn } from "./components/pages/LogIn";
import { Cart } from "./components/pages/Cart";
import { BuyerSeller } from "./components/Accounts/BuyerSeller";
import { Contact } from "./components/pages/Contact";
import { FAQ } from "./components/pages/FAQ";
// import Error from "./components/pages/Error"

function App() {
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
        <Route path="/Brands" component={Brands} />
        <Route path="/Categories" component={Categories} />

        {/* <Error /> */}
        {/* Footer links */}
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/FAQ" component={FAQ} />
      </Switch>
      {/* SellerDashboard Links */}
      <Route path="/SellerDashboard" component={SellerDashboard} />
      <Route path="/InventoryUpload" component={InventoryForm} />
      <Route path="/EventUpload" component={EventForm} />
      <Route path="/Sellerproduct" component={Product} />
      <Footer />
    </Router>
  );
}

export default App;
