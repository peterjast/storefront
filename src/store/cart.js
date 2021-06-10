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
      let tempCart = state.cart.filter(item => item.name !== payload.name);

      return { cart: tempCart, cartCounter: cartCount };

    case 'GETCART':
      let fetchedProds = payload;

      return { cart: fetchedProds, cartCounter: payload.length };

    default:
      return state;
  }
}

export default changeCart;