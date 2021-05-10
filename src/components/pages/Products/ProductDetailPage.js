import React from 'react';
import { useParams } from 'react-router';
import useFetch from '../Commons/useFetch';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductDetailPage=()=>{
    const {id}=useParams();
    const {data:product, loading, error}=useFetch('http://localhost:8080/productpage/'+id);
    const pageStyle={
        margin:'16px',
        display:'flex',
    }
    const productImage={
        height:'50vh',
        width:'33%'
    }
    const productDescription={
        width:'66%',
    }
    const smallerDetails={
        display:'flex',
    }
    const other={
        width:'50%'
    }
    console.log("Product description:", product)
    return(
        <div style={pageStyle}>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div style={productImage}>
                {product && <img src={product[0].image}/>}<br/>
            </div>
            <div style={productDescription}>
                <h1>{product &&product[0].name}</h1>
                <p>{product && product[0].descriptions}</p>
                <div style={smallerDetails}>
                <div style={other}>
                    <h6>Price:<br/>{product && product[0].price}$</h6>
                    <h6>MOQ:{product && product[0].units}</h6>    
                </div>
                <div style={other}>
                    <h6>Remaining Quantity:{product && product[0].total_quantity}</h6>  
                </div>
            </div>
            <select>
                <option></option>
                <option value="" disabled selected>Select Quantity</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
            </select><br/>
            <Button variant="success" size="sm"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</Button>
            </div>
           
                 
        </div>
        
    )
}

export default ProductDetailPage;