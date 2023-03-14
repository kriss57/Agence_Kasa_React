import React from 'react';
import starImg from '../_assets/images/star.png'
import emptyStarImg from '../_assets/images/empty-star.png'

import './stars.scss'

const Stars = ({ stars }) => {

    const starsArray = []
    const nbStars = +stars
    console.log(typeof (nbStars));
    console.log(nbStars);
    console.log(starsArray);

    for (let i = 1; i <= 5; i++) {
        const star = i <= nbStars ? starImg : emptyStarImg
        starsArray.push(<img className='star' key={i} src={star} alt="etoile" />)
    }

    return (
        <div className='Stars'>
            {starsArray}
        </div>
    );
};

export default Stars;