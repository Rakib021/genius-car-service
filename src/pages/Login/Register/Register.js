import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';
import PageTitle from '../../shared/PageTitle/PageTitle';



const Register = () => {
    const[agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification:true});


      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      
    const navigate = useNavigate();

    const navigateLogin =() =>{
        navigate("/login");
    }
    if(loading ||updating){
        return <Loading></Loading>
    }

    if(user){
       console.log('user',user);
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

     await createUserWithEmailAndPassword(email,password);
     
        await updateProfile({ displayName:name});
        console.log('Updated profile');
        navigate("/home");



    }
    return (
        <div>
            <h2 className="register-title">Please at first complete your registration</h2>
            <PageTitle title="register"/>

            <div className="register-form">
                
                
            <form onSubmit={handleRegister}>
            <input type="text" name="Name" id="" placeholder="Your Name"/>
            <input type="email" name="email" id="" placeholder="Email address" required/>
            <input type="password" name="password" id="" placeholder="Password" required/>
            <input onClick ={()=>setAgree(!agree)} type="checkbox" name="term" id="terms"/>
            {/* <label className={agree ? " ps-2 text-primary" :" ps-2 text-danger"} htmlFor="terms">Accept genius car terms and conditions</label> */}
            <label className={`px-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept genius car terms and conditions</label>
            <input 
            disabled={!agree}
            className=" w-50 mx-auto btn btn-primary" type="submit" value="Register"/>
            </form>
            <p>Already have an account ? <Link to ="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}>please Login</Link></p>
             

             <SocialLogin></SocialLogin>
            </div>
            
        </div>
    );
};

export default Register;