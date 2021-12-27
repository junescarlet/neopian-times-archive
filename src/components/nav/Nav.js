import React from "react";
import MediaQuery from 'react-responsive'

import './Nav.scss';
import MobileHeader from './mobile/MobileHeader';
import MobileNav from './mobile/MobileNav';
import DesktopNav from './desktop/DesktopNav';

const Nav = props => {
    let {timesData} = props;

    return (
        <div className="nav">
            <MediaQuery maxWidth={800}>
                <MobileHeader timesData={timesData} />
                <MobileNav />
            </MediaQuery>
            <MediaQuery minWidth={801}>
                <DesktopNav timesData={timesData}  />
            </MediaQuery>
        </div>
    );
};

export default Nav;