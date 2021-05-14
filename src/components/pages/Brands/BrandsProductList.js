import React from "react";
import { useParams, useLocation } from "react-router-dom";
import useFetch from "../Commons/useFetch";
import ProductList from "../Products/ProductList";
import Brands from "./Brands";
import styles from "../Category/CategoryProductList.module.css";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

dotenv.config();

const BrandsProductList = () => {
  const { brand } = useParams();
  const location = useLocation();
  const path = location.pathname.slice(0, 7);
  const { data: products, loading, error } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/brands/` + brand
  );
  return (
    <div className={styles.container}>
      <div>
        <Brands />
      </div>
      {/* <h1>Filtered listing - {brand}</h1> */}
      {loading && (
        <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
      )}
      {error && <p>{error}</p>}
      {products && (
        <ProductList
          main={path}
          products={products}
          title={`${brand} Products`}
          section="Categories"
          subSection={brand}
        />
      )}
    </div>
  );
};

export default BrandsProductList;
