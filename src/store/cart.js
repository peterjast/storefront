let initialState = {
  cart: [],
  cartCounter: 0
}

const changeCart = (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {

    case 'ADDCART':
      let cartCounter = state.cartCounter + 1;
      let cart = state.cart;
      cart.push(payload);

      return { cart, cartCounter };

    case 'REMOVECART': 
      let cartCount = state.cartCounter - 1;
      let tempCart = state.cart.filter(item => item !== payload);

      return { cart: tempCart, cartCounter: cartCount };

    default:
      return state;
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADDCART',
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVECART',
    payload: product
  }
}

export default changeCart;