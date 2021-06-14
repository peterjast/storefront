import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StoreFront from './components/storefront/storefront';
import ProductDetails from './components/products/details';
import ShoppingCart from './components/cart/checkout';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    maxWidth: '960px',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Header />
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="sm">
          <Switch>
            <Route exact path="/">
              <StoreFront />
            </Route>
            <Route path="/products/:id" children={<ProductDetails />} />
            <Route exact path="/cart">
              <ShoppingCart />
            </Route>
          </Switch>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">Really Cool Store</Typography>
            <Footer />
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
