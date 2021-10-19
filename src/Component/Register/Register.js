import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const Register = () => {

    const {handleRegistration, handlePasswordChange, handleEmailChange, signInUsingGoole} = useAuth();


    return (
        <div>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegistration}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} className="input" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} className="input" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <h3>Already Registared ? <Link to="/login">Click Here</Link></h3>
            <h2>------- OR ------</h2>
            <button className="google-btn" onClick={signInUsingGoole}>signin in with google</button>
        </div>
    );
};

export default Register;