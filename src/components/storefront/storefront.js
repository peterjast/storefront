import React from 'react';
import Categories from './categories';
import Products from './products';
import ActiveCategory from './current-category';
import './storefront.css';

const StoreFront = () => {
  return (
    <>
    <Categories />
    <ActiveCategory />
    <Products />
    </>
  )
}

export default StoreFront;