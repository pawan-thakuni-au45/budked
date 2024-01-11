import {createSlice} from '@reduxjs/toolkit'


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

            //calculate item price

            state.itemPrice=state.cartItems.reduce((acc,item)=>acc+item.price*item.qty,0)

            //calculate item price
            //is shipping is over 100dlr then its free, else it will chareg 10dlr
            state.shippingPrice=(state.itemPrice>100?0:10)

            //calculate tax price(15%)
            state.taxPrice=(Number(0.15*state.itemPrice).toFixed(2))




            //calculate total price
              state.totalPrice=(Number(state.itemPrice)+Number(state.shippingPrice)+Number(state.taxPrice)).toFixed(2)
                    
              localStorage.setItem('cart',JSON.stringify(state))
            

        }
    }
})

export const {addToCart}=cartSlice.actions

export default cartSlice.reducer