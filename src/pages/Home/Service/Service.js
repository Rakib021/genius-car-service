import React from 'react';
import './Service.css';

const Service = ({service}) => {

    const {name,img,description,price} = service;
    return (
        <div className="service">
            <img className="w-80" src={img} alt=""/>
            <h4>{name}</h4>
            <p>price :{price}</p>
            <p><small>{description}</small></p>
            <button className="btn btn-primary">Book : {name}</button>
        </div>
    );
};

export default Service;