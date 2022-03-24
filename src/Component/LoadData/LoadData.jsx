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

    return (
        <div className='template-grid'>
            {
                guns.map(gun => <Card
                    key={gun.id}
                    img={gun.img}
                    price={gun.price}
                    action={gun.action}
                    bullet={gun.bullet}
                    capacity={gun.capacity}
                />)
            }
            
        </div>
    );
};

export default LoadData;