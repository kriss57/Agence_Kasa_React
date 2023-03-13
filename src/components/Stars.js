import React from 'react';
import starImg from '../_assets/images/star.png'
import emptyStarImg from '../_assets/images/empty-star.png'

const Stars = ({ stars }) => {
    console.log(typeof (stars));
    console.log(stars);


    return (
        <div className='Stars'>
            <p>{stars}</p>
            <img src={starImg} alt="" />
            <img src={emptyStarImg} alt="" />
        </div>
    );
};

export default Stars;