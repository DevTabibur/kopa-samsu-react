import React from 'react';
import './Card.css'

const Card = (props) => {
    const {id, img, price, action, bullet, capacity} = props;
    return (
        <div className='cards-container'>
            <div className="card">
                <img src={img} alt="gun__img" />
                <p>Price: ${price}</p>
                <p>action: {action}</p>
                <p>bullet: {bullet}</p>
                <p>capacity: {capacity}</p>
            </div>
        </div>
    );
};

export default Card;