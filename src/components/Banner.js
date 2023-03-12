import React from 'react';

import './banner.scss'

const Banner = ({ image, title }) => {

    return (
        <section className='Banner'>
            <div className='imageContainer'>
                <img src={image} alt="montagne" />
                <div className="filter"></div>
                {title && <h1>{title}</h1>}
            </div>
        </section>
    );
};

export default Banner;