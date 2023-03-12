import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import InfoHousing from "../components/InfoHousing";

import { housingService } from "../_services/housing.service";
import './housing.scss'

const Housing = () => {
  let { hid } = useParams();
  const [housings, setHousings] = useState({
    pictures: [],
    description: '',
    title: '',
    location: '',
    equipments: [],
  });

  const stopDoubleCall = useRef(false)

  let navigate = useNavigate()

  useEffect(() => {

    if (!housingService.getHousing(hid)) {
      navigate('../*')
    }
    if (stopDoubleCall.current === false) {
      setHousings(housingService.getHousing(hid));
    }
    return () => stopDoubleCall.current = true
    // eslint-disable-next-line
  }, []);

  return (
    <main className="Housing">
      <Carousel data={housings.pictures} />
      <InfoHousing title={housings.title} location={housings.location} />
      <section className="dropSection">
        <Dropdown title='Description' description={housings.description} />
        <Dropdown title='Equipements' description={housings.equipments} />
      </section>

    </main>
  );
};

export default Housing;
