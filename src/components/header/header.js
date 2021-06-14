import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React from "react";
import Cart from '../storefront/simplecart';
import './header.css';

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar>
        <Link to="/">
        <Typography variant="h6" color="white" noWrap>
          REALLY COOL STORE
        </Typography>
        </Link>
      </Toolbar>
    )
  };
  
  return (
    <header>
      <AppBar>
        {displayDesktop()}
        <Cart />
      </AppBar>
    </header>
  );
}

/* <AppBar position="absolute" color="default" className={classes.appBar}>
<Toolbar>
  <Typography variant="h6" color="inherit" noWrap>
    Company name
  </Typography>
</Toolbar>
</AppBar> */