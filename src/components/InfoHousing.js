import React from 'react';
import './infoHousing.scss'

const InfoHousing = ({ title, location }) => {

    return (
        <div className='InfoHousing'>
            <div className="info">
                <h1>{title}</h1>
                <p>{location}</p>
            </div>

        </div>
    );
};

export default InfoHousing;