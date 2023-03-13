import React, { useState } from "react";
import './carousel.scss'

import arrowLeft from '../_assets/images/left-arrow.png'
import arrowRight from '../_assets/images/right-arrow.png'

const Carousel = ({ data }) => {
  const [position, setPosition] = useState(0);

  const prevMedia = () => {
    let newPosition = position - 1
    if (newPosition < 0) {
      newPosition = data.length - 1
    }
    setPosition(newPosition)
  }

  const nextMedia = () => {
    let newPosition = position + 1
    if (newPosition >= data.length) {
      newPosition = 0
    }
    setPosition(newPosition)
  }

  // Vérifier si les données sont disponibles (bloque le premier array vide)
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="Carousel">
      <div className="arrow-container">
        <img onClick={prevMedia} className="arrow" src={arrowLeft} alt="" />
        <img onClick={nextMedia} className="arrow" src={arrowRight} alt="" />
      </div>
      <span className="counter">{position + 1}/{data.length}</span>
      <img className="image" src={data[position]} alt='' />
    </div>
  );
};

export default Carousel;
