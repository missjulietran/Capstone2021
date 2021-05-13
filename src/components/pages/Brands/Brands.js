import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../Commons/useFetch";
import SubSectionCard from "../Commons/SubSectionCard";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styles from "../Commons/SubSectionCard.module.css";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

dotenv.config();

const Brands = () => {
  const location = useLocation();
  const path = location.pathname.slice(0, 7);

  const {
    data: brands,
    loading,
    error,
  } = useFetch(`${process.env.REACT_APP_API_SERVER}/brands`);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (brands) {
      brands
        .filter((brand) => {
          return [brand.name]
            .map((word) => {
              return word.toLowerCase();
            })
            .some((word) => {
              return word.includes(search.toLowerCase());
            });
        })
        .map((word) => setResult(word.name));
    }
  }, [brands, search]);

  return (
    <Container fluid className={styles.sideContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          className={styles.search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />{" "}
        <h4>Search Result</h4>
        <Link to={`${path}/Brands/${result}`} className={styles.link}>
          {" "}
          {result}
        </Link>
      </div>
      <div className={styles.all}>
        <h4>All Brands</h4>
        {loading && (
          <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
        )}
        {error && <p>{error}</p>}
        {brands && (
          <SubSectionCard main={path} section="Brands" subSections={brands} />
        )}
      </div>
    </Container>
  );
};

export default Brands;
