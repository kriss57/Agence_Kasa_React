import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { housingService } from "../_services/housing.service";
import './card.scss'

const Card = () => {
  const [housings, setHousings] = useState([]);
  const stopDoubleCall = useRef(false)

  useEffect(() => {
    if (stopDoubleCall.current === false) {
      setHousings(housingService.getAllHousings());
    }

    return () => stopDoubleCall.current = true
  }, []);

  return (
    <div className="Card">
      {housings.length > 0 ? (
        housings.map((housing) => (
          <Link key={housing.id} to={`/housing/${housing.id}`}>
            <article key={housing.id}>
              <img src={housing.cover} alt={housing.title} />
              <p>{housing.title}</p>
            </article>
          </Link>
        ))
      ) : (<p>Loading...</p>
      )}

    </div>
  );
};

export default Card;
