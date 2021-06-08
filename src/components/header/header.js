import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import Cart from '../storefront/simplecart';

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>Our Store</Toolbar>;
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