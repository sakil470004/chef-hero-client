import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const {id}=useParams()
    
    return (
        <div>
           this is chef details{id}
        </div>
    );
};

export default ChefDetails;