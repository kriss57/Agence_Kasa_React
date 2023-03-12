import React from "react";
import Nav from "./Nav";

import image from '../_assets/images/logo.png'
import './header.scss'


const Header = () => {
  return (
    <header>
      <img src={image} alt="logo kasa" />
      <Nav />
    </header>
  );
};

export default Header;
