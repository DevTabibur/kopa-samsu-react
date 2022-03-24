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
                    gun={gun}
                />)
            }
            
        </div>
    );
};

export default LoadData;