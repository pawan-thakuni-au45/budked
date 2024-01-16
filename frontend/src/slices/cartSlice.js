import {createSlice} from '@reduxjs/toolkit'

import { updateCart } from '../utils/cartUtils';


const initialState=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):{cartItems:[]};

const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            //we want to send ittem in cart and to access the action we will do action.payload
            const item=action.payload
            //we want to find if there anything is exist in the cart for that
            const existItem=state.cartItems.find((x)=>x._id===item._id)

            if(existItem){
                state.cartItems=state.cartItems.map((x)=>x._id===existItem._id?item:x)
            }
            else{
                //we will add new item

                 state.cartItems=[...state.cartItems,item]
            }
   return updateCart(state)
          

        }
    }
})

export const {addToCart}=cartSlice.actions

export default cartSlice.reducer