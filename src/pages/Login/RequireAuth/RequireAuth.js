import React from 'react';

import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
    if(!user.emailVerified){

        return  <div>
            <h3 className="text-danger">Your Email is not verified</h3>
            <h5 className="text-success">Please verify your email address</h5>
            <button
            className="btn btn-primary"
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Send Verification email again
      </button>
      <ToastContainer/>
        </div>
    }
    return children;

        
    
};

export default RequireAuth;