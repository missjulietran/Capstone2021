import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Commons/useFetch";
import Categories from "./Categories";
import ProductList from "../Products/ProductList";
import styles from "./CategoryProductList.module.css";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

dotenv.config()

const CategoryProductList = () => {
  const { category } = useParams();

  const { data: products, loading, error } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/category/` + category
  );
  return (
    <div className={styles.container}>
      <div>
        <Categories />
      </div>
        {loading && (
          <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
        )}
        {error && <p>{error}</p>}
        {products && (
          <ProductList
            products={products}
            title={`${category} Products`}
            section="Categories"
            subSection={category}
          />
        )}
      </div>
  );
};

export default CategoryProductList;
