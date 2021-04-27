import React from 'react';
import Navbar from './components/Navbar1/NavBar';
import Navbar2 from './components/Navbar2/NavBar2';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Cart } from "./components/pages/Cart";
import { Contact } from "./components/pages/Contact";
import Footer from './components/Footer';
import HomePage from "./components/HomePage";
// import {Events} from "./components/pages/Events";
import {Brands} from "./components/pages/Brands";
import {Categories} from './components/pages/Categories'
// import {SignUp} from './components/pages/SignUp'
// import {LogIn} from "./components/pages/LogIn";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Footer from "./components/Footer";
import InventoryForm from "./components/InventoryForm";
import EventForm from "./components/EventForm";
import { GlobalStyle } from "./globalStyles";


function App() {
  return (
    <Router>
      <Navbar />
      <Navbar2 />

      <Route path='/' exact component={Home} />
      {/* <HomePage />  */}
      <Switch>

//       <Route path="/LogIn" component={LogIn} />
//       <Route path="/SignUp" component={SignUp} />
      {/* <Route path="/Events" component={Events} /> */}
      <Route path="/Brands" component={Brands} />
      <Route path="/Categories" component={Categories} />
        <Route path="/About" component={About} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Contact" component={Contact} />
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/log-in" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/inventoryupload" component={InventoryForm} />
        <Route path="/eventupload" component={EventForm} />

      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
