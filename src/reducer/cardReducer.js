const cardReducer = (state, action) => {
  if (action.type === "ADD_TO_CARD") {
    let {id, quantity, product} = action.payload;
    console.log("Product Data: ",product[0]);
    
    
    let cartproduct = {
        id: id + product[0].title,
        image : product[0].images[0],
        quantity,
        description : product[0].product_description,
        name : product[0].title,
        price : product[0].final_price,
    }

    return {
        ...state,
        cart : [...state.cart , cartproduct]
    }
    
  }

  if (action.type === 'REMOVE_ITEM'){
    let newCart = state.cart.filter((item) => item.id !== action.payload);
    return {
        ...state,
        cart :  newCart
    }
  }
  
    return state
}

export default cardReducer