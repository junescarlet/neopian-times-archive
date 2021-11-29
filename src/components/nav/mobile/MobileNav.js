import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import classes from './MobileNav.module.scss'
import Sidebar from '../sidebar/Sidebar';


const MobileNav = props => {
    const [displaySidebar, setDisplaySidebar] = useState(false);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <>
            <div className={classes.mobileNav}>
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
            </div>
        </>
    );
};

export default MobileNav;