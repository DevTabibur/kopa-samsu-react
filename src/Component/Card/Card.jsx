import React from 'react';
import './Card.css'
import {BsFillCartCheckFill} from "react-icons/bs"

const Card = (props) => {
    const {id, name, img, price, action, bullet, capacity, } = props.gun;
    const {handleAddToCart} = props;
    // const handleAddToCart = (id) => {
    //     console.log(id);
    // }
    return (
        <div className='cards-container'>
            <div className="card">
                <img src={img} alt="gun__img" />
                <h1>Name: {name}</h1>
                <h5>Action: {action}</h5>
                <p>bullet: {bullet}</p>
                <p>capacity: {capacity}</p>
                <h2>Price: ${price}</h2>
                <button onClick={ ()=> handleAddToCart(props.gun)} className='btn-addToCart'>
                    <p>Add to Cart</p>
                    <BsFillCartCheckFill/>
                </button>
            </div>
        </div>
    );
};

export default Card;