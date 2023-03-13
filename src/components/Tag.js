import React from 'react';

const Tag = ({ tags }) => {
    console.log(tags);
    return (
        <div className='Tag'>
            <p>{tags}</p>
        </div>
    );
};

export default Tag;