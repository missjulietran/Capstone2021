import React,{useEffect,useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addQuantityThunk, deleteFromCartThunk, removeQuantityThunk} from '../../redux/actions/cartActions';
import axios from 'axios';
import dotenv from "dotenv";
import {Container, Row, Col, Button} from 'react-bootstrap'
import Loader from "react-loader-spinner";

dotenv.config()

//Stripe

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLIC_TEST}`);

const Cart=(props)=>{
    //User Info
    const user = localStorage.getItem("token");
    const [userInfo, setUserInfo]=useState("");

    useEffect(()=>{
        const fetchData=async()=>{
        const {data}=await axios.get(`${process.env.REACT_APP_API_SERVER}/buyerDashboard`, {
        headers: { Authorization: `Bearer ${user}` },
      });
      setUserInfo(data.buyer[0])
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    //Cart Actions
    const add=(id)=>{
        props.addQuantity(id)

    }
    const minus=(id)=>{
        props.subQuantity(id)
    }
    const remove=(id)=>{
        props.removeFromCart(id)

    }
    const handleCheckout=async(event)=>{
        setLoading(true)
        const stripe = await stripePromise;
    //Call your backend to create the Checkout Session
        const response = await fetch(`${process.env.REACT_APP_API_SERVER}/create-checkout-session`, { method: 'POST' });
        const session = await response.json();

    //When the customer clicks on the button, redirect them to Checkout.
   const result = await stripe.redirectToCheckout({
     sessionId: session.id,
   });

    if (result.error) {
        console.log(result.error.message)
    }
  };

  //Styling
    const lineItem={
        textAlign:"center",
        padding:"2px",
        height:'100px',
        width:'25%',
        fontSize:'1.1em'
    } 
    
    const crossIcon={
        position:'relative',
        left:"50%",
        bottom:"20%"
    }
    const quantButton={
        margin:"10px"
    }
    const cartTotal={
        fontSize:"1.3em",
        margin:"40px"
    }

    //Loader
    const [loading, setLoading]=useState(false);
    return(
        <div>
            <Container fluid>
                {loading && (
                    <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
                )}
                <Row>
                    <Col lg={6}>
                    {props.items.length?props.items.map(item=>{
                    return(
                        <div style={{display:'flex'}}>
                             <div style={lineItem}>
                               <img style={{height:"80px"}} src={item.image} alt={item.name}/>
                            </div>
                               <div style={lineItem}>
                               {item.name}<br/>${item.price.toLocaleString()} / unit

                            </div>
                            <div style={lineItem}>
                                <i style={quantButton} className='fas fa-plus fa-1x' onClick={()=>{add(item.id)}}></i>
                                {item.quantity}
                                <i style={quantButton} className="fas fa-minus fa-1x" onClick={()=>{minus(item.id)}}></i>
                            </div>
                            <div style={lineItem}>
                            <i style={crossIcon} className="fas fa-times fa-1x" onClick={()=>{remove(item.id)}}></i>
                            ${(item.quantity*item.price).toLocaleString()}<br/>
                            </div>
                        </div>
                    )
                }):"Cart is Emtpy"}
                <p style={cartTotal}>{props.total>0 && `Cart Total: $${props.total.toLocaleString()}`}</p><hr/>
                    </Col>

                    <Col lg={6}>
                    <div style={{textAlign:'center', fontSize:'1.2em'}}> 
                
                    Delivery Address:<br/><br/>
                    Name: {userInfo.name}<br/>
                    Address: {userInfo.address}<br/>
                    Phone: {userInfo.phone_no}<br/>
                    Email: {userInfo.email}<br/>
                    <Link to="/updatebuyer"><Button variant="outline-info" size="sm">Update Address</Button></Link><br/>
                    <Button style={{margin:"50px"}} variant="outline-secondary" size="lg" role="link" onClick={handleCheckout}>Checkout</Button>
                    
                </div>
                    </Col>
                
                </Row>
            </Container>
                
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        items:state.cart.items,
        total:state.cart.total
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        addQuantity:(id)=>{dispatch(addQuantityThunk(id))},
        subQuantity:(id)=>{dispatch(removeQuantityThunk(id))},
        removeFromCart:(id)=>{dispatch(deleteFromCartThunk(id))}
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
