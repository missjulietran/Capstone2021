import {
    ADD_TO_CART,
    ADD_QUANTITY,
    REMOVE_QUANTITY,
    DELETE_FROM_CART
} from '../types/template'

const initialState={
    items:[],
    total:0
}

const cartReducer=(state=initialState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem={
            id:action.id,
            image:action.image,
            name:action.name,
            price:action.price,
            quantity:1
        }
        let existingItem=state.items.find(item=>item.id===action.id)
        if(existingItem)
        {
            existingItem.quantity+=1
            let newTotal=state.total+action.price
            return{
            ...state,
            total: newTotal
            }
        }
        else{
           let newTotal=state.total+action.price
         return{
            ...state,
            items:[...state.items,addedItem],
            total: newTotal
            }
        }

    }
        if(action.type===ADD_QUANTITY){
            let targetItem=state.items.find(item=>item.id===action.id);
            targetItem.quantity+=1
            let newTotal=state.total+targetItem.price
            return{
                ...state,
                total:newTotal
            }
        }
            
        if(action.type===REMOVE_QUANTITY){
            let targetItem=state.items.find(item=>item.id===action.id);
            if(targetItem.quantity===1){
                let newItems = state.items.filter(item=>item.id !== action.id)
                let newTotal = state.total - targetItem.price
                return{
                    ...state,
                    items: newItems,
                    total: newTotal
                }
            }
            else{
                targetItem.quantity-=1
               let newTotal=state.total-targetItem.price
                return{
                ...state,
                total:newTotal
                } 
            }
        }
        if(action.type===DELETE_FROM_CART){
            let targetItem=state.items.find(item=>item.id===action.id);
            let newItems = state.items.filter(item=>item.id !== action.id)
            let newTotal=state.total-(targetItem.price*targetItem.quantity);
            return{
                ...state,
                items:newItems,
                total:newTotal
            }
        }   
        else return state
    }

export default cartReducer;