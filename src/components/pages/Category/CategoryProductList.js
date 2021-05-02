import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../Commons/useFetch';
import ProductList from '../Products/ProductList'

const CategoryProductList=()=>{
    const{category}=useParams();
    const {data:products, loading, error}=useFetch('http://localhost:8080/category/'+category)
    return(
        <div>
            <h1>Filtered listing - {category}</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {products && <ProductList products={products} title={`${category} Products`} section="Categories" subSection={category} />}
        </div>
    )
}

export default CategoryProductList;