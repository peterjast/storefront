import React from 'react';
import Categories from './components/storefront/categories';
import Products from './components/storefront/products';
import Header from './components/header/header';
import ActiveCategory from './components/storefront/current-category';
import Footer from './components/footer/footer';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <>
      <Header />
      <Container minHeight="100 vh">
      <Categories />
      <ActiveCategory />
      <Products />
      </Container>
      <Footer />
    </>
  );
}

export default App;
