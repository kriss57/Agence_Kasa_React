import React from "react";
import './footer.scss'

import footerLogo from '../_assets/images/logo-footer.png'

const Footer = () => {
  return (
    <footer className="Footer" style={{ marginTop: "50px" }}>
      <img className="logo-footer" src={footerLogo} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
