import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Commons/useFetch";
import Categories from "./Categories";
import ProductList from "../Products/ProductList";
import styles from "./CategoryProductList.module.css";

const CategoryProductList = () => {
  const { category } = useParams();

  const { data: products, loading, error } = useFetch(
    "http://localhost:8080/category/" + category
  );
  return (
    <div className={styles.container}>
      <div>
        <Categories />
      </div>
      <div>
        {/* <Row>
          <h1>Filtered listing - {category}</h1>
        </Row> */}
        {loading && <p>Loading...</p>}
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
    </div>
  );
};

export default CategoryProductList;
