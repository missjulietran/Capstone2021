import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

//Fixed Components
import NavBar from "./components/Navbar1/NavBar";
import Navbar2 from "./components/Navbar2/NavBar2";
import BuyerNavBar2 from "./components/Navbar2/BuyerNavBar2";
import SellerNavBar2 from "./components/Navbar2/SellerNavBar2";
import NavBarBuyerAuthenticated from "./components/Navbar1/NavBarBuyerAuthenticated";
import NavBarSellerAuthenticated from "./components/Navbar1/NavBarSellerAuthenticated";
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

import Chatbot from "./components/Chatbot";
import { About } from "./components/pages/About";
import { SignUp } from "./components/pages/SignUp";
import Cart from "./components/pages/Cart.js";
import { BuyerSeller } from "./components/Accounts/BuyerSeller";
import { Contact } from "./components/pages/Contact";
import { FAQ } from "./components/pages/FAQ";
import { Thankyou } from "./components/pages/Thankyou";
import GiveBack from "./components/pages/GiveBack";
// import Error from "./components/pages/Error";

//Stripe Payment Cart

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
                  pathname: "/ishome/BuyerSeller",
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
      <Route path="/" exact>
        <Redirect to="/ishome" />
      </Route>
      <Route path="/" component={Chatbot} />

      <Route path="/ishome" component={NavBar} />
      <PrivateRoute path="/buyers" component={NavBarBuyerAuthenticated} />
      <PrivateRoute path="/seller" component={NavBarSellerAuthenticated} />

      <Route path="/ishome" component={Navbar2} />
      <PrivateRoute path="/buyers" component={BuyerNavBar2} />
      <PrivateRoute path="/seller" component={SellerNavBar2} />

      <div className="maincontainer">
        <Route exact path="/ishome" component={Home} />
        <PrivateRoute exact path="/seller" component={Home} />
        {/* <PrivateRoute exact path="/buyers" component={Home} /> */}
        <Switch>
          {/* Navbar1 Links */}
          <Route path="/ishome/BuyerSeller" component={BuyerSeller} />
          <Route path="/ishome/SignUp" component={SignUp} />
          <Route path="/buyers/Cart" component={Cart} />

          {/* Navbar2 links */}
          {/* Brands Routes */}
          <Route
            exact
            path="/ishome/Brands/:brand"
            component={BrandsProductList}
          />
          <PrivateRoute
            exact
            path="/buyers/Brands/:brand"
            component={BrandsProductList}
          />
          <PrivateRoute
            exact
            path="/seller/Brands/:brand"
            component={BrandsProductList}
          />

          {/* Category Routes */}
          <Route
            exact
            path="/ishome/Categories/:category"
            component={CategoryProductList}
          />
          <PrivateRoute
            exact
            path="/buyers/Categories/:category"
            component={CategoryProductList}
          />
          <PrivateRoute
            exact
            path="/seller/Categories/:category"
            component={CategoryProductList}
          />

          <Route
            exact
            path="/ishome/Categories/:category/:id"
            component={ProductDetailPage}
          />
          <PrivateRoute
            exact
            path="/buyers/Categories/:category/:id"
            component={ProductDetailPage}
          />
          <PrivateRoute
            exact
            path="/seller/Categories/:category/:id"
            component={ProductDetailPage}
          />

          {/* Events Routes */}
          <Route
            exact
            path="/ishome/Events/:id"
            component={EventsProductListing}
          />
          <PrivateRoute
            exact
            path="/buyers/Events/:id"
            component={EventsProductListing}
          />
          <PrivateRoute
            exact
            path="/seller/Events/:id"
            component={EventsProductListing}
          />

          {/* <Error /> */}
          {/* Footer links */}
          <Route path="/ishome/About" component={About} />
          <Route path="/ishome/Contact" component={Contact} />
          <Route path="/ishome/FAQ" component={FAQ} />
          <Route path="/ishome/Thankyou" component={Thankyou} />
          <Route path="/ishome/GiveBack" component={GiveBack} />

          {/* SellerDashboard Links */}
          <PrivateRoute
            path="/seller/sellerdashboard"
            component={SellerDashboard}
          />
          <PrivateRoute
            path="/seller/inventoryupload"
            component={InventoryForm}
          />
          <PrivateRoute
            path="/seller/inventoryupdate/:itemId"
            component={UpdateInventoryForm}
          />
          <PrivateRoute path="/seller/eventupload" component={EventForm} />
          <PrivateRoute path="/seller/sellerproduct" component={Product} />
          <PrivateRoute
            path="/seller/informationupdate"
            component={Information}
          />

          {/* BuyerDashboard Links */}
          <PrivateRoute exact path="/buyers" component={Home} />
          <PrivateRoute exact path="/buyers/Cart" component={Cart} />
          <PrivateRoute
            path="/buyers/buyerdashboard"
            component={BuyerDashboard}
          />
          <PrivateRoute path="/buyers/updatebuyer" component={UpdateBuyer} />
          <PrivateRoute path="/buyers/yourorder" component={BuyerOrderPage} />
          <PrivateRoute
            path="/buyers/orderdetails/:orderId"
            component={OrderDetails}
          />
        </Switch>
      </div>

      <Footer />
      {/* <Route path="*" component={Error} /> */}
    </Router>
  );
}

export default App;
