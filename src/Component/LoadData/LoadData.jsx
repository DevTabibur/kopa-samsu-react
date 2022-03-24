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

    const handleAddToCart = (gun) => {
        console.log(gun);
    }

    return (
        <div className='template-grid'>
            {
                guns.map(gun => <Card
                    key={gun.id}
                    gun={gun}
                    handleAddToCart={handleAddToCart}
                />)
            }
            
        </div>
    );
};

export default LoadData;