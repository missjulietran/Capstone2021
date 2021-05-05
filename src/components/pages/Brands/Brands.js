import React from 'react';
import useFetch from '../Commons/useFetch';
import SubSectionCard from '../Commons/SubSectionCard';
import Container from 'react-bootstrap/Container';

const Brands=()=>{
    const {data:brands, loading, error}=  useFetch("http://localhost:8080/brands")
    return(
        <Container fluid className='section-card'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {brands && <SubSectionCard section='Brands' subSections={brands} />}     
        </Container>
    )
}

export default Brands;