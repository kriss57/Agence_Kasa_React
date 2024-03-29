import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import InfoHousing from "../components/InfoHousing";
import Stars from "../components/Stars";
import Tag from "../components/Tag";

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
    host: {},
    tags: [],
    rating: ''
  });

  const stopDoubleCall = useRef(false)

  let navigate = useNavigate()

  useEffect(() => {
    const housing = housingService.getHousing(hid)

    if (!housing) {
      navigate('../error')
      return
    }
    if (stopDoubleCall.current === false) {
      setHousings(housing);
    }
    return () => stopDoubleCall.current = true
    // eslint-disable-next-line
  }, []);

  return (
    <main className="Housing">
      <Carousel data={housings.pictures} />
      <div className="infoSection">
        <div className="leftInfo">
          <InfoHousing title={housings.title} location={housings.location} />
          <Tag tags={housings.tags} />
        </div>
        <div className="rightInfo">
          <div className="hostInfo">
            <p >
              {housings.host?.name?.split(' ')[0]}<br />
              {housings.host?.name?.split(' ')[1]}
            </p>
            <img src={housings.host.picture} alt="profil" />
          </div>
          <Stars stars={housings.rating} />
        </div>

      </div>

      <section className="dropSection">
        <Dropdown resize={true} title='Description' description={housings.description} />
        <Dropdown resize={true} title='Equipements' description={housings.equipments} />
      </section>

    </main>
  );
};

export default Housing;
