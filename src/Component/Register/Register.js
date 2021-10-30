import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const Register = () => {

    const {handleGoogleSign,signUpp, handleEmail,handlePass,error,setError, handleName} = useAuth()
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
            <h2>Please Register</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleName} className="input" type="text" placeholder="Enter your name" />
                    
                </Form.Group>
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
                <Button onClick={signUpp} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>{error}</p>
            <h3>Already Registared ? <Link to="/login">Click Here</Link></h3>
            <h2>------- OR ------</h2>
            <button className="google-btn" onClick={handleAndRedirect}>signin in with google</button>
        </div>
    );
};

export default Register;