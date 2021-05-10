import React from "react";
import useFetch from "../Commons/useFetch";
import SubSectionCard from "../Commons/SubSectionCard";
import Container from "react-bootstrap/Container";
import styles from "../Commons/SubSectionCard.module.css";

const Categories = () => {
  const { data: categories, loading, error } = useFetch(
    "http://localhost:8080/Categories"
  );

  return (
    <Container fluid className={styles.sideContainer}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {categories && (
        <SubSectionCard section="Categories" subSections={categories} />
      )}
    </Container>
  );
};

export default Categories;
