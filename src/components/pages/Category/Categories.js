import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../Commons/useFetch";
import SubSectionCard from "../Commons/SubSectionCard";
import Container from "react-bootstrap/Container";
import styles from "../Commons/SubSectionCard.module.css";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

dotenv.config();

const Categories = () => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch(`${process.env.REACT_APP_API_SERVER}/Categories`);

  const location = useLocation();
  const path = location.pathname.slice(0, 7);

  return (
    <Container fluid className={styles.sideContainer}>
      {loading && (
        <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
      )}
      {error && <p>{error}</p>}
      {categories && (
        <SubSectionCard
          main={path}
          section="Categories"
          subSections={categories}
        />
      )}
    </Container>
  );
};

export default Categories;
