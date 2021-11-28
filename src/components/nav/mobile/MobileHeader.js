import React from 'react';

import classes from './MobileHeader.module.scss'

const MobileHeader = props => {
    return (
        <div className={classes.mobileHeader}>
            <h1>The Neopian Times</h1>
        </div>
    );
};

export default MobileHeader;