//import { MediaQueryContext } from '../../Contextes/Context';
//import { useContext } from 'react';

import './Navigation.scss';
//import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../../Assets/Imgs/logo.svg';



export default function Navigation() {

    return (
        <Navbar className='navigation' sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt="Laser Cut"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    LaserCut
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">New Quote</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">My Orders</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}


