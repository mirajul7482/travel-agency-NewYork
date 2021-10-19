import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setservices] = useState([]);

    useEffect(() =>{
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setservices(data))
    }, [])
    return (
        <div >
            <h1>This is our all services list</h1>
            <div className="service-container">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;