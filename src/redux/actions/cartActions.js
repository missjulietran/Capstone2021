import axios from 'axios'
import dotenv from 'dotenv'
import {
    ADD_TO_CART,
    ADD_QUANTITY,
    REMOVE_QUANTITY,
    DELETE_FROM_CART
} from '../types/template'

dotenv.config();

export const addToCartThunk=(id,image,name,price)=>async(dispatch,getState)=>{
    try{
        dispatch({type:ADD_TO_CART, id,image,name,price})
        const state= getState().cart
        axios.post(`${process.env.REACT_APP_API_SERVER}/addtocart`, {id})
        await axios.post(`${process.env.REACT_APP_API_SERVER}/cartstatechange`,{
           state
        })
        

    }catch(err){console.log(err.message)}
}

export const addQuantityThunk=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:ADD_QUANTITY,id})
        const state= getState().cart
        console.log(id)
        axios.post(`${process.env.REACT_APP_API_SERVER}/addtocart`, {id})
        await axios.post(`${process.env.REACT_APP_API_SERVER}/cartstatechange`,{
           state
        })
        
        
    }catch(err){console.log(err.message)}
    
}


export const removeQuantityThunk=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({type:REMOVE_QUANTITY,id})
        const state= getState().cart
        axios.post(`${process.env.REACT_APP_API_SERVER}/removequantity`, {id})
        await axios.post(`${process.env.REACT_APP_API_SERVER}/cartstatechange`,{
           state
        })

        
    }catch(err){console.log(err.message)}
    
}


export const deleteFromCartThunk=(id)=>async(dispatch,getState)=>{
    try{
        //current cart state with item still present
        const initialState= getState().cart
        dispatch({type:DELETE_FROM_CART,id})
        //quantity of item removed
        const initQuant=initialState.items.find(item=>item.id===id).quantity
        //New state with removed item
        const state=getState().cart
        //updating db quantity
        axios.post(`${process.env.REACT_APP_API_SERVER}/deletefromcart`,{id,initQuant})
        await axios.post(`${process.env.REACT_APP_API_SERVER}/cartstatechange`,{
           state
        })
        
    }catch(err){console.log(err.message)}
    
}
