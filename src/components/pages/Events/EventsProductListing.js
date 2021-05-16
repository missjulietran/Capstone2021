import React from "react";
import { useParams } from "react-router";
import useFetch from "../Commons/useFetch";
import ProductList from "../Products/ProductList";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";
import Jumbotron from "react-bootstrap/Jumbotron";
import jumbotronpic from "./../../../images/sale1.jpg";

dotenv.config();

const EventsProductListing = () => {
  const { id } = useParams();
  const { data: products, loading, error } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/events/` + id
  );
  const { data: event } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/eventsellername/` + id
  );
  console.log(event);
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${jumbotronpic})`,
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{ backgroundColor: `#fff`, width: `350px`, marginTop: `50px` }}
        >
          {event && event[0].name}
          <br />
          {event && event[0].title}
        </h1>
      </Jumbotron>

      {loading && (
        <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
      )}
      {error && <p>{error}</p>}
      {/* {products && console.log(products)} */}
      {products && (
        <ProductList
          products={products}
          title={`Event ${id} Products`}
          section="Categories"
          subSection={id}
        />
      )}
    </div>
  );
};

export default EventsProductListing;
