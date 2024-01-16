

export const updateCart=(state)=>{

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

    return state
}
  