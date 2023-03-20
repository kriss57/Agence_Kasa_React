import React from "react";
import { Link } from "react-router-dom";

import './errorPage.scss'

const ErrorPage = () => {
  return (
    <main className="ErrorPage">
      <div className="errorZone">
        <h1 style={{}}>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/home">Retourner sur la page d'acceuil</Link>
    </main>
  );
};

export default ErrorPage;
