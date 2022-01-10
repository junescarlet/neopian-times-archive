import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import './DesktopNav.scss';
import Sidebar from '../sidebar/Sidebar';
// import { SidebarContext } from '../../context/Sidebar-context';

const DesktopNav = props => {
    let {timesData} = props;
    

    return (
        <>
           <Sidebar timesData={timesData} />
            <Navbar className="justify-content-center" bg="light" fixed="top">
                <Nav className="justify-content-center">
                    <Navbar.Brand><Link to="/"><img width="40px" alt="Neopian Times Quill" src="images/nt_quill.svg" /> The Neopian Times Archive</Link></Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <s>Issue #{timesData && timesData.Edition}</s>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <s>Search</s>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <div className="prevArrow">
                <s>Prev</s>
            </div>
            <div className="nextArrow">
                <s>Next</s>
            </div>
        </>
    );
};

export default DesktopNav;