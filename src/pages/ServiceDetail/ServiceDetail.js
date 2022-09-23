import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceId} = useParams();
    // const [service,setService] = useState([]);
    // useEffect(()=>{
    //     const url = `http://localhost:5000/service/${serviceId}`;
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data => setService(data));
    // },[])
   
    return (
        <div>
            <h2>You are about to book:</h2>
            <Link to="/checkout">
                <button className="btn btn-primary">Proceed checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;