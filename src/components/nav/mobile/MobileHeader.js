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
                    <Navbar.Brand><Link to="/"><img width="40px" alt="Neopian Times Quill" src="images/nt_quill.svg" /> The Neopian Times Archive</Link></Navbar.Brand>
                    <Nav.Link href="#">
                            <s>#{timesData && timesData.Edition}</s>
                        </Nav.Link>
                </Nav>
            </Navbar>
    );
};

export default MobileHeader;