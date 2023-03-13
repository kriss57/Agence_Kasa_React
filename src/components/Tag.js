import React from 'react';
import './tag.scss'

const Tag = ({ tags }) => {

    return (
        <ul className='Tag'  >
            {
                tags.map((tag, index) => (
                    <li className=' mr-20' key={index}>{tag}</li>
                ))
            }
        </ul>
    );
};

export default Tag;