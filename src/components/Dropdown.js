import React, { useState } from "react";
import arrowUp from '../_assets/images/up-arrow.png'
import './dropdown.scss'


const Dropdown = ({ title, description }) => {

  const [isOpen, setIsOpen] = useState(false)
  //const [checkType, setCheckType] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="Dropdown">
      <div className="headerDropdown">
        <p>{title}</p>
        <img className={`arrow ${isOpen ? 'isDown' : 'isUp'}`} onClick={toggleDropdown} src={arrowUp} alt="fleche haut" />
      </div>
      <div className={`containerDropdown  ${isOpen ? 'isOpen' : 'isClosed'}`} >
        <div className="textContainer">
          {Array.isArray(description) ? (<ul className="descriptionList">
            {
              description.map((equ, index) => (
                <li key={index}>{equ}</li>
              ))
            }
          </ul>) : typeof (description) === 'string' ? (< p className="description" > {description}</p >) : null}
        </div>

      </div>

    </div>
  );
};

export default Dropdown;
