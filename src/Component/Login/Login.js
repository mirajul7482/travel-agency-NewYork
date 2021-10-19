import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoole} = useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="input" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="input" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <h3>Are you New ? <Link to="/register">Register</Link></h3>
            <h2>------- OR ------</h2>
            <button className="google-btn" onClick={signInUsingGoole}>signin in with google</button>
        </div>
    );
};

export default Login;