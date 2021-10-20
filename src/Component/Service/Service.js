import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    
    const {id, img, service, details} = props.service;
    const history = useHistory();
    const Details = () =>{
        history.push(`/details/${id}`)
    }
    return (
        <div>
            <div className="service pb-3">
                <img src={img} alt="" />
                <h2>Service: {service}</h2>
                <p>{details.slice(0,200)}</p>
                
                <button onClick={Details} className="outbtn btn btn-warning rounded "
                > Details</button>
                
            </div>
        </div>
    );
};

export default Service;
