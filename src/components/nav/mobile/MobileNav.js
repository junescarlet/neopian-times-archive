import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars, faCompass, faSearch } from '@fortawesome/free-solid-svg-icons';

import './MobileNav.scss'
import Sidebar from '../sidebar/Sidebar';
//import PrevButton from '../../UI/PrevButton';


const MobileNav = props => {
    //let { timesData } = props; //It's all the data, needs to just be the section data for the Prev Button to work.
    const [displaySidebar, setDisplaySidebar] = useState(false);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <>
            {displaySidebar &&  <><div className="backdrop" onClick={displaySidebarHandler} /> <Sidebar /> </>}
            <Navbar className="justify-content-center"  bg="light" fixed="bottom">
                <Nav justify >
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="link" onClick={displaySidebarHandler} >
                            <FontAwesomeIcon icon={faBars} /><br />Menu
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <PrevButton timesData={times} />   */}
                        <Nav.Link href="#">
                        <FontAwesomeIcon icon={faAngleLeft} /><br /><s>Prev</s>
                        </Nav.Link> 
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                        <Link to="/"><FontAwesomeIcon icon={faCompass} /><br />Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">
                        <FontAwesomeIcon icon={faAngleRight} /><br /><s>Next</s>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="search"><FontAwesomeIcon icon={faSearch} /><br />Search</Link>
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