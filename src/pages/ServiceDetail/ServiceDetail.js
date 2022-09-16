import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceId} = useParams();
   
    return (
        <div>
            <h2>Welcome to Details :{serviceId}</h2>
            <Link to="/checkout">
                <button className="btn btn-primary">Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;