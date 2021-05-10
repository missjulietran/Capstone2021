import React from "react";
import styles from "./SortFeature.module.css";
const SortFeature = (props) => {
  return (
    <div className={styles.container}>
      <select onChange={props.changeHandler} className={styles.select}>
        <option default value="name" className={styles.options}>
          Name
        </option>
        <option value="priceDesc">Price(High to Low)</option>
        <option value="priceAsc">Price (Low to High)</option>
        <option value="bbdAsc">Best Before Date(Soonest)</option>
        <option value="bbdDesc">Best Before Date(Latest)</option>
      </select>
    </div>
  );
};

export default SortFeature;
