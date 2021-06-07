// setup of initial state
let initialState = {
  categories: [
    { name: 'FOOD', description: 'Eat the things' },
    { name: 'ELECTRONICS', votes: 'Do the things with the things' }
  ],
  products: [
    { category: 'FOOD', name: 'Calzones', description: 'Hotpocket on steroids', price: 7.99, inventory: 7 },
    { category: 'ELECTRONICS', name:'Keyboard', description: 'typer thingy', price: 89.99, inventory: 8}
  ],
  activeCategory : ''
}

const changeCategory = (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {

    case 'FOOD':
      let activeCategory = 'FOOD';
      let categories = state.categories.map(category => {
        if (category.name === payload) {
          return { name: category.name, description: category.description }
        }
        return category;
      });     
      let products = initialState.products.filter(product => product.category === payload);

      return { activeCategory, categories, products };

    case 'ELECTRONICS':
      let active = 'ELECTRONICS';
      let cats = state.categories.map(category => {
        if (category.name === payload) {
          return { name: category.name, description: category.description }
        }
        return category;
      });      
      let prods = initialState.products.filter(product => product.category === payload);

      return { activeCategory: active, categories: cats, products: prods};  

    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

export const food = (name) => {
    return {
      type: 'FOOD',
      payload: name
    }
}

export const electronics = (name) => {
  return {
    type: 'ELECTRONICS',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default changeCategory;