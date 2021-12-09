import React from "react";

import './Nav.scss';
import MobileHeader from './mobile/MobileHeader';
import MobileNav from './mobile/MobileNav';

const Nav = props => {

    return (
        <div className="nav">
            <MobileHeader />
            <MobileNav />
        </div>
    );
};

export default Nav;