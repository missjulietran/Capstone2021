import React from 'react';
import ProductCard from './ProductCard';
import {Container, Row,Col} from 'react-bootstrap'

const ProductList=(props)=>{
    
    

    return(
        <div className="product-list">
            <h1>{props.title}</h1>
            <Container fluid>
                <Row>
                {props.products.map((product)=>{
                return(
                    <Col lg={2} md={4} sm={6}>
                    <ProductCard 
                    key={product.id}
                    img={product.image}
                    section={props.section}
                    subSection={props.subSection}
                    sku={product.sku}
                    name={product.name}
                    price={product.price}
                    />
                    </Col>
                )
            })}
                </Row>
            
            </Container>
        </div>
    )
}

export default ProductList;