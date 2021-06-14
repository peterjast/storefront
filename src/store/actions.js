import superagent from 'superagent';

let api = 'https://api-server-ps.herokuapp.com/product';
let apiCart = 'https://api-server-ps.herokuapp.com/cartItem';

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      dispatch(getAction(response.body))
    }).catch(err => console.log(err.message))
}

export const getCartData = () => dispatch => {
  return superagent.get(apiCart)
    .then(response => {
      dispatch(getCart(response.body))
    }).catch(err => console.log(err.message))
}

export const getElectronics = () => dispatch => {
  return superagent.get(api)
  .then(response => {
    dispatch(electronics(response.body))
  }).catch(err => console.log(err.message))
}

export const getFood = () => dispatch => {
  return superagent.get(api)
  .then(response => {
    dispatch(food(response.body))
  }).catch(err => console.log(err.message))
}

export const putRemoteData = (id, data) => async dispatch => {
  try{
    let getCartResponse = await superagent.get(apiCart);
    let cartContainsItem = false;
    getCartResponse.body.forEach(item => {
      if(item._id === id){
        cartContainsItem = true;
      }
    })
    if(!cartContainsItem){
      let body = { inventory: data.inventory-1 };
      let response = await superagent.put(`${api}/${id}`).send(body);
      dispatch(addToCart(response.body))
      let res = await superagent.post(apiCart).send(response.body);
      console.log(res.body)
    }
  } catch(err) {
    console.log(err.message);
  }
}

export const deleteCartItem = (id, data) => async dispatch => {
  try{
    let body = { inventory: data.inventory+1 };
    let response = await superagent.put(`${api}/${id}`).send(body)
    dispatch(removeFromCart(response.body));
    let res = await superagent.delete(`${apiCart}/${id}`);
    console.log(res.body);
  } catch(err) { console.log(err.message)
  };
}

export const getAction = data => {
  return {
    type: 'GET',
    payload: data
  }
}

export const getCart = data => {
  return {
    type: 'GETCART',
    payload: data
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

export const food = (data) => {
  return {
    type: 'FOOD',
    payload: data
  }
}

export const electronics = (data) => {
  return {
    type: 'ELECTRONICS',
    payload: data
  }
}

