import React, { useState } from 'react';

import classes from './MobileNav.module.scss'


const MobileNav = props => {
    


    return (
        <>
            <div className={classes.mobileNav}>
                <ul>
                    <li><s>Menu</s></li>
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