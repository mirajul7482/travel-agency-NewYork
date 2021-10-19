import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    
    
    return (
        <div>

            <h2>service id : {serviceId}</h2>
            
        </div>
    );
};

export default Details;