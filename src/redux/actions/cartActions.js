import {
    ADD_TO_CART,
    ADD_QUANTITY,
    REMOVE_QUANTITY,
    DELETE_FROM_CART
} from '../types/template'

export const addToCart=(id,image,name,price)=>{
    return{
        type:ADD_TO_CART,
        id,
        image,
        name,
        price
    }
    
}

export const addQuantity=(id)=>{
    return{
        type:ADD_QUANTITY,
        id
    }
    
}


export const removeQuantity=(id)=>{
    return{
        type:REMOVE_QUANTITY, 
        id
    }

}

export const deleteFromCart=(id)=>{
    return{
        type:DELETE_FROM_CART,
        id
    }
}