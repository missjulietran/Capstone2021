import React,{useEffect,useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {connect} from 'react-redux'
import { addQuantityThunk, deleteFromCartThunk, removeQuantityThunk} from '../../redux/actions/cartActions';
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config()

//Stripe

const stripePromise = loadStripe(process.env.STRIPE_SECRET_TEST);

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
    return(
        <div>
                {props.items.length?props.items.map(item=>{
                    return(
                        <div>
                            Name:{item.name}, Quantity:{item.quantity} SubTotal:{item.quantity*item.price}<br/>
                            <button onClick={()=>{add(item.id)}}>add</button>
                            <button onClick={()=>{minus(item.id)}}>minus</button>
                            <button onClick={()=>{remove(item.id)}}>remove</button>
                            <hr/>
                        </div>
                    )
                }):"Cart is Emtpy"}
                {props.total>0 && `Cart Total: ${props.total}`}
                <div>
                    <button role="link" onClick={handleCheckout}>Checkout</button>
                    <hr/>
                    USER INFO GOES HERE<br/>
                    Address: {userInfo.address}<br/>
                    Phone: {userInfo.phone_no}<br/>
                    Email: {userInfo.email}<br/>
                    <hr/>
                </div>
                
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
