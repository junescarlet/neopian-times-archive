import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import classes from './MobileNav.module.scss'
import Sidebar from '../sidebar/Sidebar';


const MobileNav = props => {
    const [displaySidebar, setDisplaySidebar] = useState(false);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <>
            {displaySidebar &&  <><div className={classes.backdrop} onClick={displaySidebarHandler} /> <Sidebar /> </>}
            <Navbar bg="light" fixed="bottom">
            <Nav className="justify-content-center" >
                <Nav.Item>
                    <Nav.Link>
                        <Button variant="link" onClick={displaySidebarHandler} >
                            Menu
                        </Button>
                    </Nav.Link>
                </Nav.Item>
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
            
            {/* <ul>
                    <li>
                        <Button variant="link" onClick={displaySidebarHandler} >
                            <br />Menu
                        </Button>
                    </li>
                    <li><s>Prev</s></li>
                    <li><s>Back</s></li>
                    <li><s>Next</s></li>
                    <li><s>Search</s></li>
                </ul> */}
            </Navbar>
            {/* <div className={classes.mobileNav}>
            {displaySidebar &&  <><div className={classes.backdrop} onClick={displaySidebarHandler} /> <Sidebar /> </>}
                <ul>
                    <li>
                        <Button variant="link" onClick={displaySidebarHandler} >
                            <br />Menu
                        </Button>
                    </li>
                    <li><s>Prev</s></li>
                    <li><s>Back</s></li>
                    <li><s>Next</s></li>
                    <li><s>Search</s></li>
                </ul>
            </div> */}
        </>
    );
};

export default MobileNav;