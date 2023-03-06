import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { housingService } from "../_services/housing.service";

const Card = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    setHousings(housingService.getAllHousings);
  }, []);

  return (
    <div className="Card ">
      {housings.map((housing) => (
        <Link key={housing.id} to={`/housing/${housing.id}`}>
          <div
            key={housing.id}
            style={{
              width: "350px",
              height: "350px",
              border: "solid 2px blue",
              borderRadius: "15px",
            }}
          >
            <p>{housing.title}</p>
            <img src={housing.cover} alt={housing.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
