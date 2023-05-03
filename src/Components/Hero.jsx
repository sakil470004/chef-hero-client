import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import { Row } from 'react-bootstrap';

const Hero = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <h2 className='mt-5 text-danger'>Our Chefs</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    chefs.map(chef => <ChefCard key={chef.id}  id={chef.id}/>)
                }

            </Row>
        </div>
    );
};

export default Hero;