import React from "react";

import classes from './Nav.module.scss';
import MobileHeader from './mobile/MobileHeader';
import MobileNav from './mobile/MobileNav';

const Nav = props => {

    return (
        <div className={classes.nav}>
            <MobileHeader />
            <MobileNav />
        </div>
    );
};

export default Nav;