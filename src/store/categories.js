// setup of initial state
let initialState = {
  categories: [
    { name: 'FOOD', description: 'Eat the things' },
    { name: 'ELECTRONICS', description: 'It\'s electric! Boogie woogie, woogie!' }
  ],
  products: [
    { category: 'FOOD', name: 'Calzone', description: 'Hotpocket on steroids', price: 7.99, inventory: 7, image:'https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/753751/pictures/large_family-night-pepperoni-calzones.jpeg'},
    { category: 'ELECTRONICS', name:'Keyboard', description: 'typer thingy', price: 89.99, inventory: 8, image: 'https://www.mostfamouslist.com/wp-content/uploads/2016/04/Kirameki-Pure-Gold-Keyboard.jpg'}
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

    case 'ADDCART':
      let items = state.products.map(product => {
        if (product.name === payload.name) {
          return { category: product.category, name: product.name, description: product.description, price: product.price, inventory: product.inventory - 1, image: product.image };
        }
        return product;
      })  

      return {categories: state.categories, activeCategory: state.activeCategory, products: items};

    case 'REMOVECART':
      let allItems = state.products.map(product => {
        if (product.name === payload.name) {
          return { category: product.category, name: product.name, description: product.description, price: product.price, inventory: product.inventory + 1, image: product.image };
        }
        return product;
      })  

      return { categories: state.categories, activeCategory: state.activeCategory, products: allItems};

      
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

export const addToCard = (product) => {
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

export default changeCategory;