import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './DesktopNav.scss';
import Sidebar from '../sidebar/Sidebar';
// import { SidebarContext } from '../../context/Sidebar-context';

const DesktopNav = props => {
    

    return (
        <>
           <Sidebar />
            <Navbar className="justify-content-center" bg="light" fixed="top">
                <Nav className="justify-content-center">
                    <Navbar.Brand href="#home">The Neopian Times</Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <s>Prev</s>
                        </Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <s>Back</s>
                        </Nav.Link>  
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <s>Next</s>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                            <s>Search</s>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
};

export default DesktopNav;