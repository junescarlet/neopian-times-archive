import React from "react";
import MediaQuery from 'react-responsive'

import './Nav.scss';
import MobileHeader from './mobile/MobileHeader';
import MobileNav from './mobile/MobileNav';
import DesktopNav from './desktop/DesktopNav';

const Nav = props => {

    return (
        <div className="nav">
            <MediaQuery maxWidth={800}>
                <MobileHeader />
                <MobileNav />
            </MediaQuery>
            <MediaQuery minWidth={801}>
                <DesktopNav />
            </MediaQuery>
        </div>
    );
};

export default Nav;