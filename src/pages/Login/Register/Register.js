import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {

    const navigate = useNavigate();

    const navigateLogin =() =>{
        navigate("/login");
    }

    const handleRegister =event =>{
        event.preventDefault();
    }
    return (
        <div>
            <h2 className="register-title">Please at first complete your registration</h2>

            <div className="register-form">
                
                
            <form onSubmit={handleRegister}>
            <input type="text" name="Name" id="" placeholder="Your Name"/>
            <input type="email" name="email" id="" placeholder="Email address" required/>
            <input type="password" name="password" id="" placeholder="Password" required/>

            <input className="register-btn" type="submit" value="Register"/>
            </form>
            <p>Already have an account ? <Link to ="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>please Login</Link></p>

            </div>
            
        </div>
    );
};

export default Register;