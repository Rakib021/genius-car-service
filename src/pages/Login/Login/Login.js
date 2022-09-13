import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
const handleSubmit = event=>{
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email,password);
}

const navigateRegister=event=>{

    navigate("/register");

}

    return (
        <div  className="container w-50 mx-auto border border-primary p-3 mt-4 rounded">
            <h2 className="text-primary text-center mt-2">Please Login</h2>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <p>New to Genius car ? <Link to ="/register" className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>please Register</Link></p>
  



        </div>
    );
};

export default Login;