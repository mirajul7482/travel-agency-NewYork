import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import './Login.css'

const Login = () => {
    const {handleGoogleSign, handleEmail, handlePass, error, setError, loggIn} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home';

    const handleAndRedirect = () => {
        handleGoogleSign()
        .then((result) => {
            history.push(redirect_url)
        }).catch((error) => {setError(error.message)
        });
    }
    return (
        <div>
            <h2>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} className="input" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePass} className="input" type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={loggIn} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>{error} </p>
            <h3>Are you New ? <Link to="/register">Register</Link></h3>
            <h2>------- OR ------</h2>
            <button className="google-btn" onClick={handleAndRedirect}>signin in with google</button>
        </div>
    );
};

export default Login;