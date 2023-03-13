import React from 'react';

const Stars = ({ stars }) => {
    console.log(typeof (stars));

    return (
        <div className='Stars'>
            <p>{stars}</p>
        </div>
    );
};

export default Stars;