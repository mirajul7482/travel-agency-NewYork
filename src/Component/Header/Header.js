import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';

const Header = () => {
    const {user, signOutt} = useAuth();
    return (
        <div>
         <Navbar bg="light" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to={"/home"} className="fs-3 fw-bolder ">Home</Nav.Link>
                <Nav.Link  as={Link} to={"/aboutus"} className="fs-3 fw-bolder">AboutUs</Nav.Link>
                <Nav.Link  as={Link} to={"/services"} className="fs-3 fw-bolder">Services</Nav.Link>
                <Nav.Link  as={Link} to={"/blog"} className="fs-3 fw-bolder"> Blog</Nav.Link>
                
                {user?.email ? 
                <Button onClick={signOutt} variant="dark">Logout</Button>
                :
                <Nav.Link  as={Link} to={"/login"} className="fs-3 fw-bolder"> Login</Nav.Link>
                }
                <Navbar.Text>
                    sign in as: <a href="#login">{user?.displayName }</a>
                </Navbar.Text>
            </Nav>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>   
        </div>
    );
};

export default Header;