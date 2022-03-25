import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './LoadData.css'

const LoadData = () => {
    const [guns, setGuns] = useState([]);

    useEffect( ()=> {
        fetch("data.json")
        .then(res=> res.json())
        .then(data => setGuns(data))
    }, [])

    // for Add to Cart btn..  it,s a child to parent props arrow function
    const [cart, setCarts] = useState([]);
    const handleAddToCart = (gun) => {
        const newCart = [...cart ,gun];
        setCarts(newCart);
    }

    return (
        <>
        {
            cart.map(item => <h1 key={item.id}>{item.name}</h1>)
        }
        <div className='template-grid'>
        
            {
                guns.map(gun => <Card
                    key={gun.id}
                    gun={gun}
                    handleAddToCart={handleAddToCart}
                />)
            }
            
        </div>
        </>
    );
};

export default LoadData;