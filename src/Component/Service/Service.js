import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    
    const {id, img, service, details} = props.service;
    return (
        <div>
            <div className="service pb-3">
                <img src={img} alt="" />
                <h2>Service: {service}</h2>
                <p>{details.slice(0,200)}</p>
                <Link to={`/details/${id}`}>
                <button className="outbtn btn btn-warning rounded "
                >{service} Details</button>
                </Link>
                
            </div>
        </div>
    );
};

export default Service;
