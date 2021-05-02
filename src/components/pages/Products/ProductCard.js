import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard=(props)=>{
    return(
        <Card style={{width:'12rem'}}>
            <Link to={`/${props.section}/${props.subSection}/${props.sku}`}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body key={props.id}>
                    <Card.Text>
                        <h6>{props.name}</h6>
                        <h6>{props.price}$</h6>
                        <h6>Best Before:</h6>
                    </Card.Text>
                    <Button variant="success" size="sm"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</Button>
                </Card.Body>
            </Link>
        </Card>
       
    )
}

export default ProductCard;