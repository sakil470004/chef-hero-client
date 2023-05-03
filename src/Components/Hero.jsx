import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Hero = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
fetch('http://localhost:5000/chefs')
.then(res=>res.json())
.then(data=>setChefs(data))
    },[])
    return (
        <div>
            <h3>Our Chefs</h3>
<ChefCard/>
        </div>
    );
};

export default Hero;