import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1 style={{ marginTop: "100px" }}>Error page</h1>
      <Link to="/home">Retourner à Acceuil</Link>
    </div>
  );
};

export default ErrorPage;
