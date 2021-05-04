import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../Commons/useFetch';
import ProductList from '../Products/ProductList'

const EventsProductListing=()=>{
    const{id}=useParams();
    {console.log(id)}
    const {data:products, loading, error}=useFetch('http://localhost:8080/events/'+id)
    return(
        <div>
            <h1>Filtered listing - {id}</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {products && console.log(products)}
            {products && <ProductList products={products} title={`Event ${id} Products`} section="Categories" subSection={id} />}
        </div>
    )
}

export default EventsProductListing;