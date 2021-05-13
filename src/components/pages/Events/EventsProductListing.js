import React from "react";
import { useParams } from "react-router";
import useFetch from "../Commons/useFetch";
import ProductList from "../Products/ProductList";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

dotenv.config()

const EventsProductListing = () => {
  const { id } = useParams();
  const { data: products, loading, error } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/events/` + id
  );
  return (
    <div>
      <h1>Event - {id}</h1>
      {loading && (
        <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
      )}
      {error && <p>{error}</p>}
      {products && console.log(products)}
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
