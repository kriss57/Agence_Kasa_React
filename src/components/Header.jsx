import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="b3 mb-20"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <p>Logo Kasa</p>
      <nav>
        <ul style={{ display: "flex" }}>
          <li style={{ padding: "20px", listStyleType: "none" }}>
            <Link to="/home">Acceuil</Link>
          </li>
          <li style={{ padding: "20px", listStyleType: "none" }}>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
