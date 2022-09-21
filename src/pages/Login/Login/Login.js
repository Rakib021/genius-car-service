import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../../shared/PageTitle/PageTitle";



const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  


  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  if(loading ||sending){
    return <Loading></Loading>
}
  if (user) {
    // navigate("/home");
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error ) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>
     
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };
 
  const resetPassword =async() =>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
          toast('Sent email');
    }
    else{
      toast("please enter your email address");
    }

  }

  return (
    
    <div className="container w-50 mx-auto border border-primary p-3 mt-4 rounded">
      
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}

      <p>
        forget password ?{" "}
        <button
          
          className="text-primary pe-auto text-decoration-none btn btn-link"
          onClick={resetPassword}
        >
          Reset password
        </button>
      </p>
      <p>
        New to Genius car ?{" "}
        <Link
          to="/register"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          please Register
        </Link>
      </p>

      <PageTitle title="Login"/>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
