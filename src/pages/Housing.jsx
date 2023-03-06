import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { housingService } from "../_services/housing.service";

const Housing = () => {
  let { hid } = useParams();
  const [housings, setHousings] = useState({});

  useEffect(() => {
    setHousings(housingService.getHousing(hid));
  }, [hid]);

  return (
    <div className="Housing">
      <h1 style={{ marginTop: "100px" }}>Housing page</h1>
      <img src={housings.cover} alt={housings.title} />
      <p>{housings.title}</p>
    </div>
  );
};

export default Housing;
