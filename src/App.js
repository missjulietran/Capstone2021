import React from "react";
import NavBar from "./components/Navbar1/NavBar";
import Navbar2 from "./components/Navbar2/NavBar2";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import InventoryForm from "./components/InventoryForm";
import EventForm from "./components/EventForm";
import { About } from "./components/pages/About";
import { Brands } from "./components/pages/Brands";
import { Categories } from "./components/pages/Categories";
import { SignUp } from "./components/pages/SignUp";
import { LogIn } from "./components/pages/LogIn";
import { Cart } from "./components/pages/Cart";

function App() {
  return (
    <Router>
      <NavBar />
      <Navbar2 />
      <Route path="/" exact component={Home} />
      <Switch>
        {/* Navbar1 Links */}
        <Route path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Cart" component={Cart} />
        {/* Navbar2 links */}
        <Route path="/Brands" component={Brands} />
        <Route path="/Categories" component={Categories} />
        <Route path="/About" component={About} />
        {/* Back end Links */}
        <Route path="/inventoryupload" component={InventoryForm} />
        <Route path="/eventupload" component={EventForm} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
