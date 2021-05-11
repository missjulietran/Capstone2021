// import React,{useEffect,useState} from 'react';
import React from 'react'
// import {connect, useSelector} from 'react-redux'
import {connect} from 'react-redux'
import { addQuantity, deleteFromCart, removeQuantity} from '../../redux/actions/cartActions';
import useFetch from '../pages/Commons/useFetch'

const Cart=(props)=>{
    const {data:userInfo}=useFetch('http://localhost:8080/user')
    console.log(userInfo)

    //**** COMMENTED IT OUT FOR YOU LUKASSSS FOR LOADING ****/
    // const {data:userInfo, loading, error}=useFetch('http://localhost:8080/user')
    // console.log(userInfo)


    // const cartState=useSelector(state=>state.cart);
    // const[cartItems, setCartItems]=useState()
    // const [cartTotal, setCartTotal]=useState()
    // const cartContent=localStorage.getItem('cartData')
    // const cartUpdater=()=>{
    //     localStorage.setItem('cartData',JSON.stringify(cartState))
    //     console.log(JSON.parse(cartContent))
    //}
    // useEffect(()=>{
    //     if(props.items.length){
    //         setCartItems(props.items)
    //         setCartTotal(props.total)
    //         console.log('state')
    //     }else {
    //        let items=JSON.parse(cartContent)
    //        let total=items.total
    //         setCartTotal(total)
    //         items=items.items
    //         setCartItems(items)
    //         console.log('localstorage')

    //     }
    // })
    
    const add=(id)=>{
        console.log(id)
        props.addQuantity(id)
        //cartUpdater()
    }
    const minus=(id)=>{
        props.subQuantity(id)
        //cartUpdater()
    }
    const remove=(id)=>{
        props.removeFromCart(id)
        //cartUpdater()
    }
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
        addQuantity:(id)=>{dispatch(addQuantity(id))},
        subQuantity:(id)=>{dispatch(removeQuantity(id))},
        removeFromCart:(id)=>{dispatch(deleteFromCart(id))}
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
