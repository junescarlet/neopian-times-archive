import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './MobileHeader.scss'

const MobileHeader = props => {
    return (
        <Navbar className="justify-content-center" bg="light" fixed="top">
                <Nav className="justify-content-center">
                    <Navbar.Brand href="#home">The Neopian Times</Navbar.Brand>
                </Nav>
            </Navbar>
    );
};

export default MobileHeader;