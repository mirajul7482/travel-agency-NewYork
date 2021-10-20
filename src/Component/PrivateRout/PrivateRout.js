import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/UseAuth';

const PrivateRout = ({ children, ...rest}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <h1 className="text-center">Please wait...</h1>
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: {from: location}
        }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivateRout;