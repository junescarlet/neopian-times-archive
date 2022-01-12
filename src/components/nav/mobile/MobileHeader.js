import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import './MobileHeader.scss'

const MobileHeader = props => {
    let {timesData} = props;

    return (
        <Navbar className="justify-content-center" bg="light" fixed="top">
                <Nav className="justify-content-center">
                    <Navbar.Brand  className="brandMobile"><Link to="/"><img width="40px" alt="Neopian Times Quill" src="images/nt_quill.svg" /> The Neopian Times Archive</Link></Navbar.Brand>
                    <Nav.Item>
                        <Link to="archives">#{timesData && timesData.Edition}</Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
    );
};

export default MobileHeader;