import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    
    const {id, img, name, details} = props.service;
    const history = useHistory();
    const sDetails = () =>{
        history.push(`/selected/${id}`)
    }
    return (
        <div>
            <div className="service pb-3">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{details.slice(0,200)}</p>
                
                <button onClick={sDetails} className="outbtn btn btn-warning rounded "
                > Book Now</button>
                
            </div>
        </div>
    );
};

export default Service;
